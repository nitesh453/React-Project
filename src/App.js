import React from 'react'
import "./App.css"
import { AppBar, Container, Grid, Toolbar } from '@mui/material';
import Utility from './Utility';

function App() {
  return (
    <>
    
    <div className='App'>
      <AppBar position='static' sx={{marginBottom:"30px"}}  >
        <Toolbar sx={{flexGrow:1}}>
          <h2>Text Utils</h2>
        </Toolbar>
        </AppBar>
        <Container fixed>
        <Grid container spacing={5} >
        <Utility/>
        </Grid>
        </Container>
      </div>
      </>
  )
}

export default App