import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import envoc from './images/envoc.png';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import userStyles from './styles';

//Material UI App
const App = () => {
    const classes = userStyles();


    return (
        <Container maxWidth="lg">
            <AppBar  className={classes.titleBar} position="static" color="inherit">
                <img className={classes.image} src={envoc} alt="envoc" height="50"/>
                <Typography className={classes.heading} variant="h2" align="center">Envoc</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow> 
        </Container>      
    )
}

export default App;