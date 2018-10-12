import React from 'react';
import Grid from '@material-ui/core/Grid';


const AboutJumbo = () => (
    <Grid className='jumboDiv' justify='center'>
        <Grid item xs={12}>
            <h1 className='header'> What is Women of Wine?</h1>
        </Grid>
        <Grid item xs={12}>
            <p>Women of wine is empowering women in Northern Michigan's wine industry.</p>
        </Grid>
    </Grid>
)

export default AboutJumbo;