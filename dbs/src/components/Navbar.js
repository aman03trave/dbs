import React from 'react';
import "./Navbar.css";


const Navbar = () => {
  // Function to handle location search
  const handleLocationSearch = () => {
    // Retrieve current user location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          // Call location search API with retrieved latitude and longitude
          fetch(`https://api.example.com/location/search?lat=${latitude}&lng=${longitude}`) // Replace with your actual API endpoint and query parameters
            .then(response => response.json())
            .then(data => {
              // Handle the location search API response here
              console.log(data);
            })
            .catch(error => {
              // Handle any errors from the location search API here
              console.error(error);
            });
        },
        error => {
          // Handle any errors from the Geolocation API here
          console.error(error);
        }
      );
    } else {
      // Geolocation is not supported by the browser, handle accordingly
      console.error('Geolocation is not supported by this browser.');
    }
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
              <a href="/Admin">Admin</a>
            </li>
            <li>
              <a href="#about">About Us</a>
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
    <li>
      <span>Food Type:</span>
      <label for="vegOption">
        <input type="radio" id="vegOption" name="foodType" value="veg"/>Veg
      </label>
      <label for="nonVegOption">
        <input type="radio" id="nonVegOption" name="foodType" value="non-veg"/>Non-Veg
      </label>
    </li>
  </ul>
</div>

      </section>

    </>
  );
};

export default Navbar;
