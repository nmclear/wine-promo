import React from 'react';
import Grid from '@material-ui/core/Grid';
import DownArrow from '@material-ui/icons/ArrowDownward';

const IntroSection = () => (
    <div className='introSection'>
        <Grid container className='mainHeaderDiv' justify='center' alignItems='center' direction='column'>
                
        <Grid item xs={12} className='landingCircle'>
            <p className='landingDate'>October 24 / 7-9PM</p>
            <p className='logo'>Women</p>
            <p className='logo'>- of -</p>
            <p className='logo'>Wine</p>
            <p className='landingLocation'>Mari Vineyards</p>
        </Grid>
        <Grid item xs={12} className='arrowContainer'>
            <DownArrow className='bounce downArrow'/>
        </Grid>

    </Grid>

    </div>
    
);

export default IntroSection;