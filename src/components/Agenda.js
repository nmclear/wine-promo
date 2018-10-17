import React from 'react';
import Grid from '@material-ui/core/Grid';

const Agenda = () => (

    <Grid container className='agendaDiv' direction='column' alignItems='center'> 
        <Grid item xs={12}>
            <h4>AGENDA /</h4>
            <Grid container direction='column' alignItems='center'>
                <Grid item xs={12} className='agendaInfo'>
                    <p>7:00pm - 7:45pm</p>
                    <p>Networking + Food + Wine</p>
                </Grid>
                <Grid item xs={12} className='agendaInfo'>
                    <p>7:45pm - 7:50pm</p>
                    <p>Welcoming Words</p>
                </Grid>
                <Grid item xs={12} className='agendaInfo'>
                    <p>7:50pm - 8:30pm</p>
                    <p>Winery Tour</p>
                </Grid>
                <Grid item xs={12} className='agendaInfo'>
                    <p>8:30pm - 9:00pm</p>
                    <p>Networking + Wine</p>
                </Grid>
            </Grid>
        </Grid>
    </Grid>

)

export default Agenda;