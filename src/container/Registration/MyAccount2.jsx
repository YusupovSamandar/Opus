import React from "react";
import TextField from '@material-ui/core/TextField';
import "./MyAccount2.css";
import Button from '@material-ui/core/Button';

function MyAccount2() {

  return (
    <div className="Header">

      <h3>Edit User   MyAccount2</h3>
      <TextField id="outlined-basic" label="Login" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="First name" variant="outlined" />
      <TextField id="outlined-basic" label="Last name name" variant="outlined" />
      <TextField id="outlined-basic" label="Phone number" variant="outlined" />
      <TextField id="outlined-basic" label="Passport number" variant="outlined" />
      <TextField id="outlined-basic" label="Subject" variant="outlined" />
      <TextField id="outlined-basic" label="Date of birth" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <Button className="Button" variant="contained" color="secondary" >
        Submit
      </Button>

    </div>
  )
}


export default MyAccount2