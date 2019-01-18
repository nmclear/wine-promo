import React from'react';
import Grid from '@material-ui/core/Grid';
import SponsorImg from './../images/sponsor.png'

const Sponsor = () => (
    
    <Grid className='sponsor-div'>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <p className='sponsor-header'>Sponsored By: </p>
                    <div className='sponsor-img-link'>
                        <a href="https://lakesandgrapes.com/">
                            <img className='sponsor-logo' src={SponsorImg} alt='Lakes And Grapes'/>
                        </a>
                    
                    </div>
    
                    <p className='sponsor-text'>
                        <a href="https://lakesandgrapes.com/">lakesandgrapes.com</a>
                    </p>
                    <p className='copyright'>
                        © 2019 Lakes and Grapes
                    </p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)

export default Sponsor;