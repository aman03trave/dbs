import React from 'react'
import {Link} from 'react-router-dom';
import "./Adminaftermath.css";
import "./Navbar.css";

const Adminaftermath = () => {
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
          <a href="#Admin">Admin</a>
        </li>
      </ul>
    </div>
  </nav>
<div className='container'>
    <h3>Choose to Insert item into menu</h3>
  <Link className="Link" to = "/Insert"><button type="button" onClick={Adminaftermath}>
    Insert
  </button></Link>
  <h3>Choose to Delete item into menu</h3>
  <Link className="Link" to = "/Delete"><button type="Delete" onClick={Adminaftermath}>
    Delete
  </button></Link>
  <h3>Choose to Update item into menu</h3>
  <Link className="Link" to = "/Update"><button type="Update" onClick={Adminaftermath}>
    Update
  </button></Link>
  <h3>Optional</h3>
  <Link className="Link" to = "#login"><button type="button" onClick={Adminaftermath}>
    Login
  </button></Link>
  </div>

</section>

  )
}

export default Adminaftermath
