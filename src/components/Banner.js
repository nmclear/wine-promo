import React from 'react';
import waves from './../images/just-waves.png';

const styles = {
    banner: {
        // background: `url(${waves})`,
        // background: '#e4f5fc',
        // background: '#1CE7EA',
        background:'#00BFFF',
        width: '100%',
        textAlign: 'center',
        height: '100px',
        paddingBottom: '10px',
        paddingTop: '10px'
        // lineHeight: '120px'
    },
    bannerText: {
        fontSize: '20px',
        color: 'white',
        marginTop: '10px',
        marginBottom: '10px'
    }

}


const Banner = ({ children }) => (
    <div style = {styles.banner}>
        <p style={styles.bannerText}>Let us know you're coming!</p>
        {children}
    </div>
);

export default Banner;