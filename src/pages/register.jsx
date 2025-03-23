import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useHistory
import '../styling/register.css';

const Register = () => {
  const [username, setUsername] = useState(''); // State untuk username
  const [password, setPassword] = useState(''); // State untuk password
  const [email, setEmail] = useState(''); // State untuk email
  const [phonenumber, setPhonenumber] = useState(''); // State untuk repassword
  const navigate = useNavigate(); // Hook untuk navigasi
  
    const handleRegister = (e) => {
      e.preventDefault(); // Mencegah reload halaman
      // Validasi input
      if (username.trim() === '' || password.trim() === '' || email.trim() === '' || phonenumber.trim() === '') {
        alert('Pastikan semua input terisi!');
        return; // Menghentikan eksekusi jika input tidak valid
      }
      // Jika valid, arahkan ke halaman login
      navigate('/');
    };
  

  return (
    <div className="login-container">
      <img id="logo_chill" src="../src/assets/images/Logo.png" alt="Logo Chill"/>
      <h3>Daftar</h3>
      <h5>Selamat Datang</h5>

      <form onSubmit={handleRegister}>
        <div className="form-group">
            <label htmlFor="username">Name</label>
            <input type="text" id="username" value={username} name="username" placeholder="Masukkan Nama" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} name="email" placeholder="Masukkan email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" value={phonenumber} name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Masukkan nomor telepon" onChange={(e) => setPhonenumber(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Masukkan Password</label>
            <input type="password" id="password" value={password} name="password" placeholder="Masukkan Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="sso-container">
        <button id="masuk-btn" type="submit" className="btn">Daftar</button>
        <p>Atau</p>
        <button id="sso-btn" className="btn btn-with-img"><img id="logo_google" src="../src/assets/images/logo_google.png" alt="logo google"/> <span>Daftar dengan Google</span></button>
      </div>
      </form>

      <div className="link-container">
        <a href="/">Sudah punya akun? <b>Masuk</b></a>
      </div>
    </div>
  );
};

export default Register;