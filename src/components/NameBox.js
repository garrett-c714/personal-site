import React from 'react';
import picture from '../assets/images/profile-pic.png';

const NameBox = props => {
    return (
        <div className='nb-container flex'>
            <img src={picture} className='nb-image' alt='Garrett Cox himself' />
            <h5 className='nb-name'>Garrett Cox {'>'}</h5>
        </div>
    );
}

export default NameBox;