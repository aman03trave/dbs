import React from 'react'
import {Link} from "react-router-dom";
import "./loginaftermath.css";

const Loginaftermath = () => {
  return (
        <div>

        <nav className="main-nav2">
        <div className="logo2">
          <h2>
            <a className="a" href="/">
            <span>C</span>hew
            <span>&</span>
            <span>R</span>eview
            </a>
          </h2>
        </div>
        <div className="menu-link2">
          <ul>
            <li>
              <a href="#Admin">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
      
    <div class="body">
    <h1 className='h1'>Please choose an option:</h1>
    
    {/* <p className='p'>Please choose an option:</p> */}
  
    <div class="buttons-container">
        <h2>Choose To Book A Table</h2>
      <Link className="Link" to = "#"><button id="bookTableBtn">Book a Table</button></Link>
      </div>
      <div className='buttons-container'>
      <h2>Choose To Give Review</h2>
      <Link className="Link" to = "/Reviewform"><button id="giveReviewBtn">Give a Review</button></Link>
    </div>
    </div>
  </div>
  
  
  )
}

export default Loginaftermath
