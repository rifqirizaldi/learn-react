import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useHistory
import '../styling/login.css';

const Login = () => {
  const [username, setUsername] = useState(''); // State untuk username
  const [password, setPassword] = useState(''); // State untuk password
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    // Validasi input
    if (username.trim() === '' || password.trim() === '') {
      alert('Username dan password tidak boleh kosong!');
      return; // Menghentikan eksekusi jika input tidak valid
    }
    // Jika valid, arahkan ke halaman home
    navigate('/home');
  };

  return (
    <div className="login-container">
      <img id="logo_chill" src="../../src/assets/images/logo.png" alt="Logo Chill"/>
      <h3>Masuk</h3>
      <h5>Selamat Datang</h5>

      <form onSubmit={handleLogin}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} name="username" placeholder="Masukkan Username/Email" onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} name="password" placeholder="Masukkan Password" onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="sso-container">
          <button id="masuk-btn" type="submit" className="btn">Masuk</button>
          <p>Atau</p>
          <button id="sso-btn" className="btn btn-with-img"><img id="logo_google" src="../../src/assets/images/logo_google.png" alt="logo google"/> <span>Masuk dengan Google</span></button>
        </div>
      </form>
      <div className="link-container">
        <a href="/register">Tidak punya akun? <b>Daftar</b></a>
        <a href="#">Lupa Password?</a>
      </div>
      
    </div>
  );
};

export {Login};