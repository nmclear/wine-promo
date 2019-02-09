import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from './../images/featured-winery.jpg';

const FeaturedWinery = ({ location, description, descriptionMore }) => (
    <Grid className='winery-div'>
        <Grid item xs={12}>
            <h1 className='header-blue'>Featured Winery</h1>
        </Grid>
        <Grid item xs={12} id='winery-table'>
            <Grid container className='table-row'>
                <Grid item xs={12} md={4}>
                    <div className='img-div'>
                        <img className='winery-img' src={logo} alt={`${location} logo`}/>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <p className='row-title'>{location}</p>
                    <p className='description'>{description}</p>
                    {descriptionMore && (
                        <p className='description'>{descriptionMore}</p>
                    )}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default FeaturedWinery;