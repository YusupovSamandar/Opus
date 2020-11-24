import React from 'react';
import Container from '@material-ui/core/Container';
import './teacher-reges.css';

function FormPage() {
  return (
    <Container id="reg-cont" maxWidth="sm">
      <form>
        <h1 id="reg-header">Edit User (Teachers)</h1>
        <label class="focus">Login</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Login"
          required
        ></input>
        <label class="focus">Password</label>
        <input
          id="reg-input"
          type="password"
          placeholder="Password"
          required
        ></input>
        <label class="focus">First Name</label>
        <input
          id="reg-input"
          type="text"
          placeholder="First name"
          required
        ></input>
        <label class="focus">Last Name</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Last name"
          required
        ></input>
        <label class="focus">Phone Number</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Phone number"
          required
        ></input>
        <label class="focus">Passport Number</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Passport Number"
          required
        ></input>
        <div class="select">
            <span class="focus">Course</span>
              <select id="reg-select">
                <option id='reg-select' value="Option 1">Teacher</option>
                <option id='reg-select' value="Option 2">Director</option>
                <option id='reg-select' value="Option 3">Kassa</option>
                <option id='reg-select' value="Option 4">Adminstrator</option>
              </select>
            </div>
        <label class="focus">Data was born</label>
        <input
          class="reg-time"
          type="date"
          placeholder="First name"
          required
        ></input>
        <label class="focus">Address</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Address"
          required
        ></input>
        <button class="btn info">SUBMIT</button>
      </form>
    </Container>
  )
}

export default FormPage
