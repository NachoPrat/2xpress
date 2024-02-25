import { useState } from 'react';
import './LoginSignup.css';
import { auth } from './firebase'; 
import profile from './assets/profile.png';
import correo from './assets/correo.png';
import password from './assets/contraseña.png';
import NavBarLS from './navbarLS';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from './firebase';
import { doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { setDoc } from "firebase/firestore";

const Signup = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //create user on firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      //create empty user chats on firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});
      navigate("/login");
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };


  return (
    <div>
      <NavBarLS />
      <div className="acontainer">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <img src={profile} alt="" />
              <input type="text" name="username" placeholder="Create a new user" required />
            </div>
            <div className="input">
              <img src={correo} alt="" />
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="input">
              <img src={password} alt="" />
              <input type="password" name="password" placeholder="Enter your password" required />
            </div>
            <div className="submit-container">
              <div className="no-account">
                <a href="/Login" className="login-link">¿Ya tienes una cuenta?</a>
              </div>
              <button disabled={loading} type="submit" className="action-button">Sign Up</button>
              {loading && "please wait..."}
              {err && <span>Something went wrong</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;