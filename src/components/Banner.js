import React from 'react';

const styles = {
    banner: {
        background:'#00BFFF',
        width: '100%',
        textAlign: 'center',
        height: '100px',
        paddingBottom: '10px',
        paddingTop: '10px'
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