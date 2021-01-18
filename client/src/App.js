import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import envoc from './images/envoc.png';

const App = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <AppBar  position="static" color="inherit">
                    <Typography variant="h2" align="center">Envoc</Typography>
                    <img src={envoc} alt="envoc" height="60"/>
                </AppBar> 
            </Container>      
        </div>
    )
}

export default App;