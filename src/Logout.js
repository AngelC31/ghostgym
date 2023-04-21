import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button className="buttonLogout btn-dark btn-outline-warning" onClick={() => {
        localStorage.removeItem('pagoRealizado');
        logout({ returnTo: window.location.origin })
    }}>
      Cerrar Sesion
    </button>
  );
}

export default LogoutButton;