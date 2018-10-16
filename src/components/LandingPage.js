import React from 'react';
import Grid from '@material-ui/core/Grid';

import IntroSection from './IntroSection';
import Agenda from './Agenda';
import Banner from './Banner';
import ButtonRsvp from './ButtonRsvp';
import FeaturedWinery from './FeaturedWinery';
import About from './About';
import Contact from './Contact';
import Sponsor from './Sponsor';

import GoogleMap from './Map';

import './../styles/components.css';
import './../styles/bounce.css';

const LandingPage = () => {
    return (
        <div className='background'>
            <Grid container alignItems='center' direction='column'>
                
                <IntroSection />
                <Banner>
                    <ButtonRsvp />
                </Banner>
                <About />
                <Agenda />
                <FeaturedWinery />
                <GoogleMap />
                <Contact />
                <Sponsor />
                
            </Grid>
        </div>
    )
};

export default LandingPage;