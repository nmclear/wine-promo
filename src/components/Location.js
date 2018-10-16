import React from 'react';
import Grid from '@material-ui/core/Grid';
import GoogleMap from './GoogleMap';

const Location = () => (
    <Grid className='locationDiv'>
    <Grid item xs={12}>
        <h1 className='header'>When & Where</h1>
    </Grid>
    <Grid item xs={12} id='wineryTable'>
        <Grid container >
            <Grid item xs={12}>
                <p className='locationHeader'>October 24th, 2018 -- 6:00PM - 9:00PM</p>
            </Grid>
        </Grid>
        <Grid container >
            <GoogleMap />
        </Grid>
        <Grid container >
            <Grid item xs={12}>
                <p className='locationHeader'>Mari Vineyards</p>
                <p className='locationDetail'>8175 Center Rd Traverse City</p>
            </Grid>
        </Grid>
    </Grid>
</Grid>
)

export default Location;