import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './sign.css';
import axios from 'axios';

function Signupaftermath() {
  const [count, setCount] = useState(0); // Local state for count
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword,setConfirmpassword] = useState('');

  const handleSubmit = () => {
    if(name.length !== 0){
      const url = "http://localhost/signup.php";

      let fData = new FormData();
      fData.append('cust_name',name);
      fData.append('cust_id',count);
      fData.append('user_name',email);
      fData.append('password',password);

      axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
    } 
  }

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
            <a href="#SignUpForm">SignUpForm</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="signup-box">
    <h2>Sign Up for an Account</h2>
      <form>
        <h4>Name:</h4>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <h4>Email:</h4>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <h4>Password:</h4>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}/>
       

       
        {/* <p>Sign Up count: {count}</p> Display count */}
        <Link className="Link" to="/Login">
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
        </Link>
      </form>
    </div>
  </section>
  )
}

export default Signupaftermath
