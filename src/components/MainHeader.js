import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonRsvp from './ButtonRsvp';
import DownArrow from '@material-ui/icons/ArrowDownward';
import ExpandMore from './../images/ExpandMore.svg';

const MainHeader = () => (
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

)

export default MainHeader;


// <Grid item xs={12}>
//             <h1 className='logo'>Women of Wine</h1>
//         </Grid>
//         <Grid item xs={12}>
//             <p className='headerDetails' >October 24th, 2018 7PM</p>
//         </Grid>
//         <Grid item xs={12}>
//             <p className='headerDetails'>Mari Vineyards</p>
// </Grid>