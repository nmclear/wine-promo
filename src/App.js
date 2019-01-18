
import React from 'react';
import { Grid, Button } from '@material-ui/core';

import IntroSection from './components/IntroSection';
import Agenda from './components/Agenda';
import Banner from './components/Banner';
import FeaturedWinery from './components/FeaturedWinery';
import About from './components/About';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';
import GoogleMap from './components/Map';

import './styles/components.css';
import './styles/bounce.css';
import './styles/responsive.css';

import {
    description,
    descriptionMore,
    DATE,
    TIME,
    LOCATION_NAME,
    SHORT_NAME,
    ADDRESS,
    CITY,
    LOCATION_LAT,
    LOCATION_LONG,
    RSVP_LINK,
    AGENDA_LIST
} from './constants/winery';

const App = () => {
    return (
        <div className='background'>
            <Grid container alignItems='center' direction='column'>
                
                <IntroSection
                  date={DATE}
                  time={TIME}
                  location={LOCATION_NAME}
                />
                <Banner>
                    <Button id='button-type' variant="outlined" href={RSVP_LINK} target='_blank'>
                        RSVP
                    </Button>
                </Banner>
                <About
                  date={DATE}
                  time={TIME}
                  address={ADDRESS}
                  city={CITY}
                />
                <Agenda
                    agendaList={AGENDA_LIST}
                />
                <FeaturedWinery
                  location={LOCATION_NAME}
                  description={description}
                  descriptionMore={descriptionMore}
                />
                <GoogleMap
                  location={SHORT_NAME}
                  markerLat={LOCATION_LAT}
                  markerLong={LOCATION_LONG}
                />
                <Contact />
                <Sponsor />
                
            </Grid>
        </div>
    )
};

export default App;