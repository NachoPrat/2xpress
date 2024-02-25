import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../../AuthContext'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className='navbar'>
      <span className="logo">2XPRESS</span>
      <div className="user">
        {currentUser && (
          <>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={handleSignOut}>logout</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar