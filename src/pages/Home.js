import React from 'react';
import Construction from '../components/Construction.js';
import NameBox from '../components/NameBox.js'

const Home = props => {
    return (
        <div className="flex flex-center home-div">
            <NameBox />
            <Construction />
        </div>
    );
}

export default Home;