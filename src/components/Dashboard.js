import React from 'react'
import { Link } from 'react-router-dom';

import { Header } from './Header'

const takePhoto = (e) => {
    // if photo taken
    document.getElementById("takePhoto").src = require("../images/me.png")
}

export const Dashboard = () => (
    <div>
        <Header />

        <button onClick={ takePhoto } style={{ marginLeft: '5rem' }}>
            <img id="takePhoto" className="img-responsive" src={require('../images/add-photo.png')} />
        </button>
    </div>
)