import React from 'react';
import Grid from '@material-ui/core/Grid';

const Agenda = ({ agendaList }) => (

    <Grid container className='agenda-div' direction='column' alignItems='center'> 
        <Grid item xs={12}>
            <h4>AGENDA /</h4>
            <Grid container direction='column' alignItems='center'>
                {agendaList.map(({key, time, detail}) => (
                    <Grid id={`agenda-list-${key}`} item xs={12} className='agenda-info'>
                    <p>{time}</p>
                    <p>{detail}</p>
                </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>

)

export default Agenda;