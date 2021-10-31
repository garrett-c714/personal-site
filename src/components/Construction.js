import React from 'react';
import gear from '../assets/images/circuit-board-gear.png';

const Construction = props => {
    return (
        <div className="flex flex-center construction-wrapper">
            <div className='con-inner-wrap flex'>
                <img src={gear} className="gear" alt="Spinning Gear"/>
                <div className='cw-div'>
                    <p className="con-words cw-headline">⚠️ Under Construction</p>
                    <p className='cw-body'>Something great is coming... stay tuned.</p>
                </div>
            </div>
        </div>
    );
}

export default Construction;