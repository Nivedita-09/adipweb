import React from 'react';

import '../Navbar/Navbar';
import './home.css';
import Navbar from '../Navbar/Navbar';
import Card from './card';

export default function home(){
  return (
    <>
    <Navbar />
    <div className='home_page'>
     
    
      <div className='vl'>
        <div className="profile">
          <div className="pic"></div>
          <div className="Name">Name:Agent</div>
          <div className="EID">EID - 8ztT57MmQOS2F78KE3</div>
          <div className="time">Login system time:- 9:30</div>
        </div>
        <button className="latest_register latest-btn">Latest Registrated</button>
        <button className="retry retry-btn">Retry List</button>
        <button className="rejected reject-btn">Rejected List</button>
      </div>
      <div className='container'>
        <div className='row'>
          <Card
            image="./profile.png"
            ID="8ztT57MmQOS2F78KE3Pkob"
            Name="XYZ"
            Location="Thane"
          />
          <Card
            image="./profile.png"
            ID="8ztT57MmQOS2F78KE3Pkob"
            Name="XYZ"
            Location="Mumbai"
          />
          
        </div>
      </div>
    {/*<div className='card'>
      <div className='card_body'>
        <img src="" />
        <p className='I-d'>Id</p>
        <p className='Name'>Name</p>
        <p className='loc'>Location</p>
        <button className='open'>Open</button>
        

  </div>
  </div>*/}
    </div>
     
    </>
  )
}


