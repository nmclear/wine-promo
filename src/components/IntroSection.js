import React from 'react';
import Grid from '@material-ui/core/Grid';
import DownArrow from '@material-ui/icons/ArrowDownward';

const IntroSection = ({ date, time, location }) => (
    <div className='intro-section'>
        <Grid container className='main-header-div' justify='center' alignItems='center' direction='column'>
                
        <Grid item xs={12} className='landing-circle'>
            <p className='landing-date'>{`${date} / ${time}`}</p>
            <p className='logo'>Women</p>
            <p className='logo'>- of -</p>
            <p className='logo'>Wine</p>
            <p className='landing-location'>{location}</p>
        </Grid>
        <Grid item xs={12} className='arrow-container'>
            <DownArrow className='bounce down-arrow'/>
        </Grid>

    </Grid>

    </div>
    
);

export default IntroSection;