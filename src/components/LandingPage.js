import React from 'react';
import Grid from '@material-ui/core/Grid';

import MainHeader from './MainHeader';
import AboutJumbo from './AboutJumbo';
import AgendaTable from './AgendaTable';
import Banner from './Banner';
import FeaturedWinery from './FeaturedWinery';
import Location from './Location';
import Contact from './Contact';
import Footer from './Footer';

import './LandingPage.css';


const LandingPage = () => {
    return (
        <div className='background'>
            <Grid container alignItems='center' direction='column'>
                

                <MainHeader />
                <AboutJumbo />
                <AgendaTable />
                <Banner>#womenOfwine</Banner>
                <FeaturedWinery />
                <Location />
                <Contact />
                <Footer />
                
            </Grid>
        </div>
    )
};

export default LandingPage;