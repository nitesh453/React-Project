import { Button, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'


function Utility() {
    const [text, setText] = useState('')
    const upperCase = () => {
        setText(text.toUpperCase())
    }
    const lowerCase = () => {
        setText(text.toLowerCase())
    }
    const clearText = () => {
        setText('')
    }

    return (
        <>
            <Grid item xs={12}>
                <textarea rows="10" cols="100" value={text} onChange={e => setText(e.target.value)} /></Grid>
            <Grid xs={12}>
                <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around", padding:"20px", margin:"10px"}}>
                <Button variant='contained' onClick={upperCase}>Upper Case</Button>
                <Button variant='contained' color='success' onClick={lowerCase}>Lower Case</Button>
                <Button variant="contained" color='error' onClick={clearText}>Clear</Button>
                </Box>
                
            </Grid>
            <Grid xs={6}>
                <Paper elevation={12} sx={{maxWidth:"fit-content",padding:"20px",borderRadius:"10px"}}>
                    <strong>Word Count : </strong>{
                        text == '' ? 0 : text.split(' ').length
                    }
                </Paper>
            </Grid>
            <Grid xs={6}>
                <Paper elevation={12}>
                    <strong>Character Count : </strong>{text.length}
                </Paper>
            </Grid>
            <Grid xs={12}>
                <h2>Preview</h2>
                <p>{text}</p>
            </Grid>





        </>
    )

}

export default Utility