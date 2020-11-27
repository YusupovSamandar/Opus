import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Date from "./date";
import './table.css';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        width: '103%'
    },

    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

function CustomizedTable(props) {
    const { classes } = props;

    return (
        <Grid container spacing={3}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableBody >
                        <TableRow >
                            <TableCell size="small">
                                <FormControl className={classes.formControl}>
                                    <InputLabel style={{ fontSize: "15px" }} htmlFor="grouped-native-select">Course</InputLabel>
                                    <Select native defaultValue="" id="grouped-native-select">
                                        <option aria-label="None" value="" />
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                        <option value={3}>Option 3</option>
                                        <option value={4}>Option 4</option>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell>
                                <FormControl className={classes.formControl}>
                                    <InputLabel style={{ fontSize: "15px" }} htmlFor="grouped-native-select">Teacher</InputLabel>
                                    <Select native defaultValue="" id="grouped-native-select">
                                        <option aria-label="None" value="" />
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                        <option value={3}>Option 3</option>
                                        <option value={4}>Option 4</option>
                                    </Select>
                                </FormControl>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontSize: "15px" }}>
                                Date of starting course
                        <Date />
                            </TableCell>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField style={{ fontSize: "15px" }} id="standard-basic" label="Name of the group" />
                                </form>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField style={{ fontSize: "15px" }} id="outlined-basic" label="Total amount to pay" variant="filled" />
                                </form>
                            </TableCell>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Number of lessons" variant="standard" />
                                </form>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button style={{ marginTop: "20px", float: "right" }}
                    variant="contained"
                    color="primary"
                    size="small"
                    float="right"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
      </Button>
            </Paper>
        </Grid>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);