//import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'; // Importa BrowserRouter y Routes desde 'react-router-dom'
import Principal from './Principal';
import Home from './Components/Chat/Home'; // Asumiendo que tienes un componente Homechat
import Login from './Components/Login'; // Asumiendo que tienes un componente Login
import Signup from './Components/Signup';
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };


  return (
    <Routes>
    {/* Utiliza Route con path exact="/" para el path / */}
    <Route exact path="/" element={<Principal />} />
    {/* Utiliza el atributo element en lugar de index */}
    <Route
      path="/homechat"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
    {/* Añade barras diagonales al principio de los paths */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  );
}

export default App;
