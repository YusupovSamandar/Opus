import React from "react";
import TextField from '@material-ui/core/TextField';
import "./Rekvizit.css";
import Button from '@material-ui/core/Button';

function Rekvizit() {

  return (

    <div className="Header">
   
      <h3>Edit User Rekvisit</h3>
      <TextField id="outlined-basic" label="NTM nomi " variant="outlined" />
      <TextField id="outlined-basic" label="Bank nomi" variant="outlined" />
      <TextField id="outlined-basic" label="MFO" variant="outlined" />
      <TextField id="outlined-basic" label="OKONX" variant="outlined" />
      <TextField id="outlined-basic" label="INN" variant="outlined" />
      <TextField id="outlined-basic" label="Xisob raqam" variant="outlined" />
      <TextField id="outlined-basic" label="Manzil" variant="outlined" />
      <TextField id="outlined-basic" label="Tug'ilgan sana" variant="outlined" />
      <TextField id="outlined-basic" label="Tel nomer" variant="outlined" />
      <br/>
      <Button className="Button" variant="contained" color="secondary" >
        Submit
      </Button>

    </div>
  )
}


export default Rekvizit