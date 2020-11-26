import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import './Register.css'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

function FormPage() {
  const classes = useStyles()
  const [gender, setGender] = useState()
  const [scholarship, setScholarship] = useState()
  const [groups, setGroups] = useState()

  const handleScholarship = (e) => {
    setScholarship(e.target.name)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleGrops = (e) => {
    setGroups(e.target.value)
  }

  const [hasSchoolarship, setHasSchoolarship] = useState(false)
  const handleInput = (e) => {
    setHasSchoolarship(e.target.value === 'Added' ? true : false)
  }

  return (
    <Container id="reg-cont" maxWidth="sm">
    <form>
      <h1 id="reg-header">Registration</h1>
      <label class="focus" >First Name</label>
      <input id="reg-input" type="text" placeholder="First Name" required></input>
      <label class="focus">Last Name</label>
      <input id="reg-input" type="text" placeholder="Last Name" required></input>
      <label class="focus">Father's Name</label>
      <input id="reg-input" type="text" placeholder="Father's name" required></input>
      <label class="focus">Data was born</label>
      <input class="reg-time" type="date" placeholder="First name" required></input>
      <div id="reg-div">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <label class="focus">Phone Number</label>
            <input
              id="reg-input"
              type="text"
              placeholder="Phone Number"
              required
            ></input>
          </Grid>
          <Grid item xs={6}>
            <label class="focus" required>Extra Phone Number</label>
            <input
              id="reg-input"
              type="text"
              placeholder="Extra Phone Number"
              required
            ></input>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <div id="border-div">
              <p id="gender-p">Gender</p>
              <Radio
                value="male"
                checked={gender === 'male'}
                onChange={handleGender}
                required
              />
              <span class="focus">Male</span>
              <br></br>
              <Radio
                value="female"
                checked={gender === 'female'}
                onChange={handleGender}
                required
              />
              <span class="focus">Female</span>
            </div>
          </Grid>
          <Grid item xs>
            <div id="border-div-scholar">
              <p id="gender-p" class="focus">Scholarship</p>
              <div>
                <Radio
                  onClick={handleInput}
                  value="Added"
                  name="yes"
                  checked={scholarship === 'yes'}
                  onChange={handleScholarship}
                  
                />
                <span class="focus">Yes</span>
                <br></br>
                <Radio
                  onClick={handleInput}
                  name="no"
                  checked={scholarship === 'no'}
                  onChange={handleScholarship}
                  required
                />
                <span class="focus">NO</span>
              </div>
            </div>
          </Grid>
          <Grid item xs>
            <label class="focus">Payment</label>
            <input
              id="reg-input"
              type="text"
              placeholder="Payment"
              disabled={hasSchoolarship ? !'disabled' : 'disabled'}
              label="Payment"
              variant="outlined"
              required
            ></input>
          </Grid>
        </Grid>
      </div>
      <div id="reg-div">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Radio
              value="add"
              checked={groups === 'add'}
              onChange={handleGrops}
              required
            />
            <span>Add exsisting group</span>
            <br />
            <Radio
              value="waiting"
              checked={groups === 'waiting'}
              onChange={handleGrops}
              required
            />
            <span>Waiting for a new group</span>
          </Grid>
          <Grid item xs={6}>
            <div class="select">
            <span class="focus">Course</span>
              <select id="reg-select">
                <option id='reg-select' value="Option 1">1-bosqich</option>
                <option id='reg-select' value="Option 2">2-bosqich</option>
                <option id='reg-select' value="Option 3">3-bosqich</option>
                <option id='reg-select' value="Option 4">4-bosqich</option>
              </select>
              
            </div>
          </Grid>
        </Grid>
      </div>
      <div id="reg-div">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div class="select">
            <span class="focus">Groups</span>
              <select id="reg-select">
                <option id='reg-select' value="Option 1">Ahror</option>
                <option id='reg-select' value="Option 2">Samandar</option>
                <option id='reg-select' value="Option 3">Shaxbozbek</option>
                <option id='reg-select' value="Option 4">Maftuna</option>
              </select>
              
            </div>
          </Grid>
          <Grid item xs={6}>
            <div class="select">
            <span class="focus">Advertise</span>
              <select id="reg-select">
                <option id='reg-select' value="Option 1">Social Media</option>
                <option id='reg-select' value="Option 2">Tv</option>
                <option id='reg-select' value="Option 3">Friends</option>
                <option id='reg-select' value="Option 4">Radio</option>
              </select>
            </div>
          </Grid>
        </Grid>
         <div>
           <textarea placeholder="Typing..." id="text-area"name="message" rows="5" cols="60"></textarea>
         </div>
      </div>
      <br></br>
        <Button variant="contained" color="primary">
          SUBMIT
        </Button>
    <br></br>
    <br></br>
    
</form>
    </Container>
  )
}

export default FormPage
