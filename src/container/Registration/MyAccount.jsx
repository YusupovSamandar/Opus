import React from "react";
import TextField from '@material-ui/core/TextField';
import "./MyAccount.css";
import Button from '@material-ui/core/Button';

function MyAccount() {

  return (
    <div className="Header">

      <h3>Edit User MyAccount</h3>
      <TextField id="outlined-basic" label="Login" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="First name" variant="outlined" />
      <TextField id="outlined-basic" label="Last name name" variant="outlined" />
      <TextField id="outlined-basic" label="Phone number" variant="outlined" />
      <TextField id="outlined-basic" label="Passport number" variant="outlined" />
      <TextField id="outlined-basic" label="Subject" variant="outlined" />
      <TextField id="outlined-basic" label="Class level" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="School name" variant="outlined" />
      <Button className="Button" variant="contained" color="secondary" >
        Submit
      </Button>

    </div>
  )
}


export default MyAccount 