import React from 'react'; // Agrega esta línea para importar React

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Homechat from './Components/Chat/Home';
import { AuthProvider } from './AuthContext';
import { ChatContextProvider } from "./ChatContext";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <ChatContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homechat" element={<Homechat />} />
          </Routes>
        </Router>
      </ChatContextProvider>
    </AuthProvider>
  </React.StrictMode>
);