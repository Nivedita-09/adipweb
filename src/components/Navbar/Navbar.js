import React from "react";
import "./Navbar.css";
import Logo from "../Navbar/Logo_1";
import Icon from "../Navbar/Ambulances";


const Navbar = () => {
    return (
        <>
        <div className="Navbar Navbar-container" >
                {/*<img src={Logo} />*/} 
                <div className="Logo_1">
                    <Logo />
                </div>  
                <div className="nav-items">
                    <div className="nav-item"><a className="contact-us" href="/contact_us"> Contact Us</a></div>
                    <div className="nav-item"><button className="login login-btn" href="/Login">Login</button></div>
                    <div className="nav-item-icon"><Icon /></div>
                    
                </div> 
                
        </div>
        </>
    );
};

export default Navbar;