import React from 'react';

const Banner = ({ children }) => (
    <div className='banner'>
        <p className='banner-text'>Let us know you're coming!</p>
        {children}
    </div>
);

export default Banner;