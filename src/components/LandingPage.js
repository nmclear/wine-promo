import React from 'react';
import Grid from '@material-ui/core/Grid';

import IntroSection from './IntroSection';
import Agenda from './Agenda';
import Banner from './Banner';
import ButtonRsvp from './ButtonRsvp';
import FeaturedWinery from './FeaturedWinery';
import LocationDiv from './LocationDiv';
import Contact from './Contact';
import Footer from './Footer';

import GoogleMap from './GoogleMap';

import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='background'>
            <Grid container alignItems='center' direction='column'>
                
                <IntroSection />
                <Banner>
                    <ButtonRsvp />
                </Banner>
                <LocationDiv />
                <Agenda />
                <FeaturedWinery />
                <GoogleMap/>
                <Contact />
                <Footer />
                
            </Grid>
        </div>
    )
};

export default LandingPage;