import React from 'react'
import { withRouter } from 'react-router-dom'

import './homepage.sass'
import Directory from "../components/directory";

const HomePage = () => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;
