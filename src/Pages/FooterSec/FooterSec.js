import React from 'react';
import './FooterSec.css';

const FooterSec = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='container text-center mt-5 pt-5 py-4'>
            <p>All Copyright Reasurved With || <span>ISTIAK</span> ..</p>
        </div>
    );
};

export default FooterSec;