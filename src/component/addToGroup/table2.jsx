import React from 'react';
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
import "./table2.css";
import Date from "./date";


const styles = theme => ({
    root: {
        width: '100%',
        marginLeft: '10px'
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
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableBody>
                    <TableRow >
                        <TableCell size="small">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="grouped-native-select">Course</InputLabel>
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
                        <TableCell>
                            Date of starting course
                            <Date />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Name of the group" />
                            </form>
                        </TableCell>
                    </TableRow>
                </TableBody>
                <div float="left">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        float="right"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
      </Button>
                </div>
            </Table>
        </Paper>
    );
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);