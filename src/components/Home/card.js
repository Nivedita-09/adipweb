import React from 'react'
import './card.css';

export default function Cards (props) {
    let bg_img = `url(${props.image})`
    let { ID, Name, Location} = props
    return (
    <div className='card'>
        <div className='wrapper wrap'>
            
            <div className="card_img" style={{"backgroundImage": bg_img}}></div>
            <div className='cardInfo'>
                <div className='flex-inside'>
                <p className='Id'>ID: {ID}</p>
                <p className='name'>Name: {Name}</p>
                <p className='loc'>Location: {Location}</p>
                </div>
                
            </div>
            <div className='button'>
                <button className='open'>Open</button>
            </div>
        </div>
    </div>
  )
}

