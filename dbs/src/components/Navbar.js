import React , { useState } from 'react';
import "./Navbar.css";


const Navbar = () => {
  const [mapUrl, setMapUrl] = useState(null);

  // Function to handle location search
  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      // Update map URL
      const newMapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
      setMapUrl(newMapUrl);
    });
  };
  

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>C</span>hew
            <span>&</span>
            <span>R</span>eview
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/Signup">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="search">
          {/* Button to trigger location search */}
          <button onClick={handleLocationSearch}>Search Location</button>
        </div>
      </nav>

      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Chew and Review</h1>

      </section>
      <section>

      <div class="menu-link">
  <ul>

    <li>
      <input type="text" id="searchInput" placeholder="Search"/>
      <button id="searchButton">Search</button>
    </li>
    
  </ul>
  {/* Render map iframe */}
  {mapUrl && (
        <section>
          <div id="mapContainer">
            <iframe src={mapUrl} width="700" height="300" title="Map"></iframe>
          </div>
        </section>
      )}

</div>

      </section>

    </>
  );
};

export default Navbar;


