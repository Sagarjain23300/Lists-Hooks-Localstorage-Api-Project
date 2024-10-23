import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="App">
      <h2>Login</h2>
      <button onClick={() => setIsLoginOpen(true)} className="open-modal-btn">
        Open Login 
      </button>

      <h2>Registration</h2>
      <button onClick={() => setIsRegistrationOpen(true)} className="open-modal-btn">
        Open Registration 
      </button>

      
      {isLoginOpen && <Modal closeModal={() => setIsLoginOpen(false)} type="login" />}
      
    
      {isRegistrationOpen && <Modal closeModal={() => setIsRegistrationOpen(false)} type="registration" />}
    </div>
  );
}

export default App;
