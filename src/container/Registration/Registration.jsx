import React from "react";
import "./Registration.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

function Registration() {
  return (
    <div className="container " maxWidth="lg">

      <h3>Edit User Registration</h3>
      <TextField id="outlined-basic" label="First name" variant="outlined" />
      <TextField id="outlined-basic" label="Last name" variant="outlined" />
      <TextField id="outlined-basic" label="Father's name" variant="outlined" />
      <TextField id="outlined-basic" label="Date of birth" variant="outlined" />
      <div className="Phone-number">
        <TextField id="outlined-basic" label="Phone number" variant="outlined" />
        <TextField id="outlined-basic" label="Phone number" variant="outlined" />
      </div>
      <TextField id="outlined-basic" label="Address" variant="outlined" />

      <div className="Phone-number">
        <Grid container spacing={0}>
          <Grid className='add_groupCom' item xs={6}>

            <div className="Sex ">
              <div>
                <span style={{ margin: "0 40px 0 20px" }}>Sex</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="Added" control={<Radio />} label="Male" />
                    <FormControlLabel value="Add" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </Grid>
          <Grid className='add_groupCom' item xs={6}>

            <div className="Sex">
              <div>
                <span style={{ margin: "0 40px 0 20px" }}>Schoolarship</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel className='radio' value="Added" control={<Radio />} label="Yes" />
                    <FormControlLabel value="Add" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </Grid>
        </Grid>

      </div>
      <Grid className='add_group' container spacing={0}>
        <Grid className='add_groupCom' item xs={6}>

          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" >
              <FormControlLabel value="Added" control={<Radio />} label="Add existing group" />
              <FormControlLabel value="Add" control={<Radio />} label="Waiting for a new group" />
            </RadioGroup>
          </FormControl>

        </Grid>

        <Grid className='add_groupCom' item xs={6}>
          <div className="Phone-number">
            <p>Course</p>
            <div className="course">
              <select>
                <option value="Kids">Kids</option>
                <option value="1-Bosqich">1-Bosqich</option>
                <option selected value="2-Bosqich">2-Bosqich</option>
                <option value="3-Bosqich">3-Bosqich</option>
                <option value="4-Bosqich">4-Bosqich</option>
                <option value="DTM">DTM</option>
              </select>
            </div>
          </div>
        </Grid>
      </Grid>



      <div className="Phone-number1">
        <Grid className='add_groupCom' item xs={6}>
          <div className="Phone-number1">
            <p>Groups</p>
            <div className="course">
              <select>
                <option value="Kids">Shohida</option>
                <option value="1-Bosqich">Shohida</option>
                <option selected value="2-Bosqich">Shohida</option>
                <option value="3-Bosqich">Shohida</option>
                <option value="4-Bosqich">Shohida</option>
                <option value="DTM">DTM</option>
              </select>
            </div>
          </div>
        </Grid>
        <Grid className='add_groupCom' item xs={6}>
          <div className="Phone-number1">
            <p>Advertise</p>
            <div className="course">
              <select>
                <option value="Kids">E'lon</option>
                <option value="1-Bosqich">Gazeta</option>
                <option selected value="2-Bosqich">Radio</option>
                <option value="3-Bosqich">Tanishlar</option>
                <option value="4-Bosqich">O'qituvchilar</option>
                <option value="DTM">Televideniya</option>
              </select>
            </div>
          </div>
        </Grid>
      </div>
      <TextField id="outlined-basic" label="Comment" variant="outlined" />
      <Button className="Button" variant="contained" color="secondary" >
        Submit
      </Button>


    </div >
  );
}

export default Registration