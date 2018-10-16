import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Agenda = () => (


    <Grid container className='testAgendaDiv' direction='column' alignItems='center'> 
        <Grid item xs={12}>
            <h4>AGENDA /</h4>
            <Grid container direction='column' alignItems='center'>
                <Grid item xs={12} className='agendaInfo'>
                    <p>7:00pm - 7:25pm</p>
                    <p>Networking + Food</p>
                </Grid>
                <Grid item xs={12} className='agendaInfo'>
                    <p>7:25pm - 7:30pm</p>
                    <p>Welcoming Words - Abby Clear</p>
                </Grid>
                <Grid item xs={12} className='agendaInfo'>
                    <p>7:30pm - 8:00pm</p>
                    <p>Winery Tour - Winemaker </p>
                </Grid>
                <Grid item xs={12} className='agendaInfo'>
                    <p>8:00pm - 9:00pm</p>
                    <p>Networking</p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>

)

export default Agenda;