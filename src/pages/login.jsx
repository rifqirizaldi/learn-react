import React from 'react';
import '../styling/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <img id="logo_chill" src="../../src/assets/images/logo.png" alt="Logo Chill"/>
      <h3>Masuk</h3>
      <h5>Selamat Datang</h5>

      <form>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Masukkan Username/Email"/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Masukkan Password"/>
        </div>
      </form>
      <div className="link-container">
        <a href="#">Tidak punya akun? <b>Daftar</b></a>
        <a href="#">Lupa Password?</a>
      </div>
      <div className="sso-container">
        <button id="masuk-btn" type="submit" className="btn">Masuk</button>
        <p>Atau</p>
        <button id="sso-btn" className="btn btn-with-img"><img id="logo_google" src="../../src/assets/images/logo_google.png" alt="logo google"/> <span>Masuk dengan Google</span></button>
      </div>
    </div>
  );
};

export default Login;