import React from 'react';
import './App.css';
import { TextField,  } from '@mui/material';

function App() {
  return (
    <>
       <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center'>
        <div>
          
        </div>
       </div>


        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" style={{ marginTop: '10px' }} />
        <TextField id="standard-basic" label="Standard" variant="standard" style={{ marginTop: '10px' }} />
      
      
    </>
  );
}

export default App;
