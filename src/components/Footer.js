import React from'react';
import Grid from '@material-ui/core/Grid';

import SponsorImg from './../images/sponsor.png'

const Footer = () => (
    

    <Grid className='footerDiv'>
        <Grid item xs={12}>
            <h1 className='header'>Women of Wine</h1>
        </Grid>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <p className='contactName'>Sponsored By: </p>
                    <p className='contactEmail'>
                        <a href="https://lakesandgrapes.com/" >
                            <img className='sponsorLogo' src={SponsorImg} alt='Lakes And Grapes'/>
                        </a>
                    </p>
                    <p className='contactEmail'>
                        <a href="https://lakesandgrapes.com/">lakesandgrapes.com</a>
                    </p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>



)

export default Footer;