import React from 'react';
import Grid from '@material-ui/core/Grid';
import SocialBar from './SocialBar';

const Contact = () => (
    <Grid className='contact-div'>
        <Grid item xs={12}>
            <h1 className='header'>Contact</h1>
        </Grid>
        <Grid item xs={12}>
            <Grid container justify='space-evenly'>
                <Grid item xs={12} sm={12} md={12}>
                    <p className='contact-name'>Abby Clear</p>
                    <p className='contact-email'>
                        <a href="mailto:abby@lakesandgrapes.com?subject=Women of Wine Meetup" >
                            abby@lakesandgrapes.com
                        </a> 
                    </p>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
        
        <SocialBar />
        </Grid>
    </Grid>


)

export default Contact;