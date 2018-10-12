import React from 'react';

const styles = {
    banner: {
        background: 'purple',
        width: '100%',
        textAlign: 'center',
        height: '90px'
    },
    bannerText: {
        fontSize: '35px',
        color: 'white',
        height: '90px',
        lineHeight: '90px',
        margin: '0'
    }

}


const Banner = ({ children }) => (
    <div style = {styles.banner}>
        <p style = {styles.bannerText}>
            {children}
        </p>
    </div>
);

export default Banner;