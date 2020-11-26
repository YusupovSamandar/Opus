import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import './Rekvizit.css'

function Rekvizit() {
  return (
    <Container id="regs-cont" maxWidth="sm">
      <form>
        <h1 id="reg-header">REKVISITLAR</h1>
        <label class="focus">NTM nomi</label>
        <input
          id="reg-input"
          type="text"
          placeholder="NTM nomi"
          required
        ></input>
        <label class="focus">Bank nomi</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Bank nomi"
          required
        ></input>
        <label class="focus">MFO</label>
        <input id="reg-input" type="text" placeholder="MFO" required></input>
        <label class="focus">OKONX</label>
        <input id="reg-input" type="text" placeholder="OKONX" required></input>
        <label class="focus">ENN</label>
        <input id="reg-input" type="text" placeholder="ENN" required></input>
        <label class="focus">Xisob raqam</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Xisob Raqam"
          required
        ></input>
        <label class="focus">Address</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Address"
          required
        ></input>
        <label class="focus">Telefon Raqam</label>
        <input
          id="reg-input"
          type="text"
          placeholder="Telefon Raqam"
          required
        ></input>
        <br></br>
        <Button variant="contained" color="primary">
          SAVE
        </Button>
      </form>
    <br></br>
    </Container>
  )
}

export default Rekvizit
