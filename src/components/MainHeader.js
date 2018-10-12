import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const MainHeader = () => (
    <Grid alignItems='center'>
                
        <Grid item xs={12}>
            <h1>Women of Wine</h1>
        </Grid>
        <Grid item xs={12}>
            <h1>October 24th, 2018</h1>
        </Grid>
        <Grid item xs={12}>
            <h1>Mari Vineyards</h1>
        </Grid>
        <Grid item xs={12}>
            <Button variant="outlined">
                RSVP
            </Button>
        </Grid>

    </Grid>

)

export default MainHeader;