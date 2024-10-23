import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="layout">
        <div className="navigation">
          <div>Navigation</div>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="auth-button">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="auth-button">
              Login
            </button>
          )}
        </div>
        <div className="view">
          {isLoggedIn ? <div>Private Views</div> : <div>Public Views</div>}
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
}

export default App;
