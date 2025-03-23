import React from 'react';
import '../styling/home.css';

const Home = () => {
  return (

    <div>
      <div className="fContainer">
        <nav className="wrapper">
          <img src="../src/assets/images/Logo.png" alt="logo_chill" />
          <ul className="navigation">
            <li><a href="#" className="active">Series</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Bookmark</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img
            id="img_profile"
            src="../src/assets/images/icon_profile.png"
            // onClick="clickProfile()"
            alt="icon_profile"
          />
          <span>Wahyu Supratman</span>
          <div className="dropdown-menu">
            <a href="#">Account</a>
            <a href="#">Setting</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    

      {/* Header */}
      <div className="banner">
        <div className="banner_contents">
          <h1 className="banner_title">Duty After School</h1>
          <div className="banner_desc">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan
            dalam perang.
          </div>
          <div className="banner_btns">
            <button className="banner_btn banner_btn1">Mainkan</button>
            <button className="banner_btn banner_btn2">Selengkapnya</button>
          </div>
        </div>
        <div className="banner_fade_bottom"></div>
      </div>

      {/* Section 2 */}
      <div className="row">
        <h2>Melanjutkan nonton film</h2>
        <div className="row_posters">
          <img
            src="../src/assets/images/list_film/lanjutkan menonton/image 233.png"
            alt="Logo Film"
            className="row_poster row_poster_large"
          />
          <img
            src="../src/assets/images/list_film/lanjutkan menonton/Type=17.png"
            alt="Logo Film"
            className="row_poster row_poster_large"
          />
          <img
            src="../src/assets/images/list_film/lanjutkan menonton/Type=5.png"
            alt="Logo Film"
            className="row_poster row_poster_large"
          />
          <img
            src="../src/assets/images/list_film/lanjutkan menonton/Type=9.png"
            alt="Logo Film"
            className="row_poster row_poster_large"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="row">
        <h2>Top Rating Film dan Series Hari Ini</h2>
        <div className="row_posters">
          <img
            src="../src/assets/images/list_film/image 205.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 206.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 207.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 208.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 209.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 210.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 211.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 212.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 213.png"
            alt="Foto Film"
            className="row_poster"
          />
        </div>
      </div>

      {/* /* Section 4 */}
      <div className="row">
        <h2>Film Trending</h2>
        <div className="row_posters">
          <img
            src="../src/assets/images/list_film/image 214.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 215.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 216.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 217.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 218.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 219.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 220.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 221.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 222.png"
            alt="Foto Film"
            className="row_poster"
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className="row">
        <h2>Rilisan Terbaru</h2>
        <div className="row_posters">
          <img
            src="../src/assets/images/list_film/image 224.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 225.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 226.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 227.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 220.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 218.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 230.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 231.png"
            alt="Foto Film"
            className="row_poster"
          />
          <img
            src="../src/assets/images/list_film/image 232.png"
            alt="Foto Film"
            className="row_poster"
          />
        </div>
      </div>

      <footer>
        <div className="footer_container">
          <div className="footer-content">
            <img src="../src/assets/images/Logo.png" alt="logo_chill" />
            <p id="p_id">&copy;2023 Chill All Rights Reserved.</p>
          </div>
          <div className="footer_content">
            <h2>Genre</h2>
            <ul className="list">
              <li><a href="#">Action</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Romance</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Tragedy</a></li>
              <li><a href="#">Happy</a></li>
            </ul>
          </div>
          <div className="footer_content">
            <h2>Bantuan</h2>
            <ul className="list">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Kontak Kami</a></li>
              <li><a href="#">Privasi</a></li>
              <li><a href="#">Syarat dan Ketentuan</a></li>
            </ul>
          </div>
        </div>
      </footer>  
    </div>
  );
};

export default Home;