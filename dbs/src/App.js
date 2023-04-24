
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignupBox from "./components/Signup";
import LoginForm from "./components/Login";
import ReviewForm from "./components/Reviewform";
import AdminForm from "./components/Admin"
import Loginaftermath from "./components/loginaftermath";
import Aboutus from "./components/aboutus";
import Signupaftermath from "./components/Signupaftermath";
import Owner from "./components/Owner";
import Insert from "./components/Insert";
import Adminaftermath from "./components/Adminaftermath";
import Delete from "./components/Delete";

function App() {
    return(
      <BrowserRouter>
    
          <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Signup" element={<SignupBox />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Reviewform" element={<ReviewForm />} />
          <Route path="/Admin" element={<AdminForm />} />
          <Route path="/loginaftermath" element={<Loginaftermath />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Signupaftermath" element={<Signupaftermath />} />
          <Route path="/Owner" element={<Owner />} />
          <Route path="/Insert" element={<Insert />} />
          <Route path="/Adminaftermath" element={<Adminaftermath />} />
          <Route path="/Delete" element={<Delete />} />
          </Routes>
        </BrowserRouter>
    );
    }
export default App;
