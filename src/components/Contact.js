import React from 'react';
import Grid from '@material-ui/core/Grid';

const Contact = () => (
    <Grid className='contactDiv'>
        <Grid item xs={12}>
            <h1 className='header'>Contact</h1>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <p className='contactName'>Abby Clear</p>
                    <p className='contactEmail'>
                        <a href="mailto:abby@lakesandgrapes.com?subject=Women of Wine Meetup" >
                            abby@lakesandgrapes.com
                        </a> 
                    </p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>


)

export default Contact;