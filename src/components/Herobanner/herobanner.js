import React from 'react';
import { useState } from 'react';
import "./herobanner.css";
import Objects from './OBJECTS.svg';
import Popup from './popup';



export default function Herobanner() {
  const [modal, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!modal);
    
  };
  if(modal) {
    document.body.classList.add('active-modal')

  }else{
    document.body.classList.remove('active-modal')
  }
   
  return (
    <>
    <div className='title_container'>
      <div className='container'>
        
      <span className='line-1'>ADIP-Admin</span><br/><span className='line-2'>Assistance to</span><br/><span className='line-3'>Disabled Persons</span><br/>
      <button onClick={togglePopup}>What is ADIP?</button>

      {modal && (
        <div className='modal'>

          <div onClick={togglePopup} className="overlay"></div>
          <div className='modal-content'>
          <button className='close-modal' onClick={togglePopup}>X</button>
            <h2>What is ADIP?</h2>
            <p>he ADIP Scheme is in operation since 1981 with the main objective to assist the needy disabled persons in procuring durable, sophisticated and scientifically manufactured, modern, standard aids and appliances that can promote their physical, social and psychological rehabilitation by reducing the effects of disabilities and enhance their economic potential.  Assistive devices are given to PwDs with an aim to improve their independent functioning and to arrest the extent of disability and occurrence of secondary disability. The aids and appliances supplied under the Scheme must have due certification. The scheme also envisages conduct of corrective surgeries, wherever required, before providing an assistive device. Under the Scheme, grants-in-aid are released to various implementing agencies  (Artificial Limbs Manufacturing Corporation of India (ALIMCO)/National Institutes/Composite Regional Centres/District Disability Rehabilitation Centres/ State Handicapped Development Corporations/ NGOs, etc.) for purchase and distribution of aids and assistive devices. </p>
            
          </div>
        </div>
      )}
      {/* <button onClick={shoot}>Take the shot!</button> */}
      
      {/* <input className='line-4' type="button" value="What is ADIP?" onClick={()=> togglePopup()}/> */}
      </div>
      
        <img src={Objects} className="obj" alt='object'/>
      
      
    </div>
    </>
  );
}

