
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SignupBox from "./components/Signup";
import LoginForm from "./components/Login";
import ReviewForm from "./components/Reviewform";
import AdminForm from "./components/Admin"
import Loginaftermath from "./components/loginaftermath";

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
          </Routes>
        </BrowserRouter>
    );
    }
export default App;
