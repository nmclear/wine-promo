import React from 'react';

import Grid from '@material-ui/core/Grid';


const AgendaTable = () => (

    <Grid className='agendaDiv'>
        <Grid item xs={12}>
            <h1 className='header'>Agenda</h1>
        </Grid>
        <Grid item xs={12} id='agendaTable'>
            <Grid container className='tableRow'>
                <Grid item xs={3}>
                    <p className='rowTime'>6:00pm - 6:25pm</p>
                </Grid>
                <Grid item xs={9}>
                    <p className='rowTitle'>Networking + Food</p>
                </Grid>
            </Grid>
            <Grid container className='tableRow'>
                <Grid item xs={3}>
                    <p className='rowTime'>6:25pm - 6:30pm</p>
                </Grid>
                <Grid item xs={6}>
                    <p className='rowTitle'>Welcoming Words</p>
                </Grid>
                <Grid item xs={3}>
                    <p className='rowSpeaker'>Abby Clear</p>
                </Grid>
            </Grid>
            <Grid container className='tableRow'>
                <Grid item xs={3}>
                    <p className='rowTime'>6:30pm - 7:30pm</p>
                </Grid>
                <Grid item xs={6}>
                    <p className='rowTitle'>Wine Tour</p>
                </Grid>
                <Grid item xs={3}>
                    <p className='rowSpeaker'>Wine Maker</p>
                </Grid>
            </Grid>
            <Grid container className='tableRow'>
                <Grid item xs={3}>
                    <p className='rowTime'>7:30pm - 8:00pm</p>
                </Grid>
                <Grid item xs={9}>
                    <p className='rowTitle'>Networking</p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)

export default AgendaTable;