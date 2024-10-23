import React from 'react';
import './App.css';

function Modal({ closeModal, type }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>✖</button>
        {type === 'login' ? (
          <div>
            <h2>Login to My Account</h2>
            <form>
              <input type="email" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me On This Computer</label>
              </div>
              <button className="submit-btn">Login</button>
            </form>
            <a href="/" className="forgot-link">Forgot Your Password?</a>
            <a href="/" className="create-link">Create A New Account</a>
          </div>
        ) : (
          <div>
            <h2>Create a New Account</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email address" required />
              <input type="password" placeholder="Password" required />
              <button className="submit-btn">Register</button>
            </form>
            <a href="/" className="login-link">Already have an account? Login here.</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
