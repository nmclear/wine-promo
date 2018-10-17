import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './../images/featured-winery.png';

import description from './wineryDescription';

const FeaturedWinery = () => (
    <Grid className='wineryDiv'>
        <Grid item xs={12}>
            <h1 className='blueHeader'>Featured Winery</h1>
        </Grid>
        <Grid item xs={12} id='wineryTable'>
            <Grid container className='tableRow'>
                <Grid item xs={12} md={4}>
                    <div className='imgDiv'>
                        <img className='wineryImg' src={logo} alt='mari vineyards logo'/>
                    </div>
                    
                </Grid>
                <Grid item xs={12} md={8}>
                    <p className='rowTitle'>Mari Vineyards</p>
                    <p className='description'>{description}</p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default FeaturedWinery;