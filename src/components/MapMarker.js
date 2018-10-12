import React from 'react';

const styles = {
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
}


const MapMarker= ({ text }) => <div style={styles}>{text}</div>;


export default MapMarker;