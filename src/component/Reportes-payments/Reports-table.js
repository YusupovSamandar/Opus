import React from 'react'
import Container from '@material-ui/core/Container'
import './Style1.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import OnlyTable from './OnlyTable'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '15px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 218,
  },
}))

function ReportsTable() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <div class="reports-div">
        <div class="pickTime">
          <Grid container spacing={4}>
            <div class="formDiv1">
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Dan"
                  type="date"
                  defaultValue="mm-dd-yy"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            <div class="formDiv2">
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="gacha"
                  type="date"
                  defaultValue="mm-dd-yy"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            <Grid item sm={2}>
              <div class="button-div">
                <Button variant="contained" color="primary">
                  SARALASH
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>

        <div class="onlyTable">
          <OnlyTable />
        </div>
      </div>
    </Container>
  )
}

export default ReportsTable
