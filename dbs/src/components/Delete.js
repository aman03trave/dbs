import React from 'react'
import './Navbar.css';
import './Delete.css';

const Delete = () => {
  return (
    <section>
    <nav className="main-nav">
      <div className="logo">
        <h2>
          <a className="a" href="/">
            <span>C</span>hew
            <span>&</span>
            <span>R</span>eview
          </a>
        </h2>
      </div>
      <div className="menu-link">
        <ul>
          <li>
            <a href="#SignUpForm">Insert</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="signup-box">
    <h2>Add Item into Menu</h2>
      <form>
        <h4>Restaurant Id:</h4>
        <input type="text" placeholder="Name" />
        <h4>Item Id:</h4>
        <input type="text" placeholder="Item Id" />
    
        <h4>Item Name:</h4>
        <input type="text" placeholder="Item Name"/>
          
       

       
        {/* <p>Sign Up count: {count}</p> Display count */}
        
        <button type="button" onClick={Delete}>
          Enter
        </button>
        
      </form>
    </div>
  </section>
  )
}

export default Delete
