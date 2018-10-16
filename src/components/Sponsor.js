import React from'react';
import Grid from '@material-ui/core/Grid';
import SponsorImg from './../images/sponsor.png'

const Sponsor = () => (
    
    <Grid className='sponsorDiv'>
        <Grid item xs={12}>
            <Grid container>
                <Grid item xs={12}>
                    <p className='sponsorHeader'>Sponsored By: </p>
                    <div className='sponsorImgLink'>
                        <a href="https://lakesandgrapes.com/">
                            <img className='sponsorLogo' src={SponsorImg} alt='Lakes And Grapes'/>
                        </a>
                    
                    </div>
    
                    <p className='sponsorText'>
                        <a href="https://lakesandgrapes.com/">lakesandgrapes.com</a>
                    </p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)

export default Sponsor;