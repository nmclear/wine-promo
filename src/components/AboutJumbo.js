import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const AboutJumbo = () => (
    
    
    
    <Grid className='jumboDiv' justify='center'>
        <div className='jumboBackground'>
            <Grid item xs={12}>
                <h1 className='header'> What is Women of Wine?</h1>
            </Grid>
            <Grid item xs={12}>
                <div className='jumboText'>
                    <Typography paragraph>
                        Women of Wine TC “WOW” is a group for industry women who want to network, learn, collaborate, imbibe and take over the world. The core focus of Women of Wine TC is to entertain, enlighten, and inform, all while bringing together the modern women in wine to connect, collaborate and build friendships within the industry. 
                    </Typography>
                    <Typography paragraph>
                        You are destined to meet other talented, like-minded women, all while learning tips and tricks from some of the best in the business. Wherever you are at/want to be at in the wine, beer, spirits and hospitality industries, pull up a seat! A huge part of WOW TC is building relationships so you can build your business, connections and industry knowledge. #Networking It’s why we’ll be hosting monthly WOW TC meet-ups where you’ll mix, mingle and make moves with your fellow WOW TC members!
                    </Typography>
                </div>
            </Grid>
        </div>
    </Grid>
    
)

export default AboutJumbo;