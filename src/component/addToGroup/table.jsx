import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Date from "./date";
import './table.css';
import Grid from '@material-ui/core/Grid';
import SelectMultiple from './select-item';
import { chosenStudent } from "./../Student-datail-context";
import { StudentContext } from "./../Student-datail-context";

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
    const [setAllStudents] = useContext(StudentContext)[1];
    const [chosen, setChosen] = useContext(chosenStudent);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [course, setCourse] = React.useState();
    const [teacher, setTeacher] = React.useState();
    const [group, setGroup] = React.useState();
    const [pay, setPay] = React.useState();
    const [setReset] = React.useState(false)[1];
    const [lessons, setLessons] = React.useState();
    const [days, setDays] = React.useState();
    const [hour, setHour] = React.useState();
    const [all, setAll] = React.useState({
        course: course,
        teacher: teacher,
        date: selectedDate,
        group: group,
        pay: pay,
        lessons: lessons,
        days: days,
        hour: hour
    });
    useEffect(() => {
        setAll({
            course: course,
            teacher: teacher,
            date: selectedDate,
            group: group,
            pay: pay,
            lessons: lessons,
            days: days,
            hour: hour
        });
    }, [course, teacher, group, pay, lessons, days, hour, selectedDate]);
    const handleCourse = (event) => {
        setCourse(event.target.value);
    };
    const handleTeacher = (event) => {
        setTeacher(event.target.value);
    };
    const handleLessons = (event) => {
        setLessons(event.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleGroup = (event) => {
        setGroup(event.target.value);
    };
    const handlePay = (event) => {
        setPay(event.target.value);
    };
    const handleHour = (event) => {
        setHour(event.target.value);
    };
    const handleDays = (event) => {
        setDays(event.target.value);
    };
    const courseName = [
        {
            value: 'IELTS',
            label: 'IELTS',
        },
        {
            value: '1-bosqich',
            label: '1-bosqich',
        },
        {
            value: '2-bosqich',
            label: '2-bosqich',
        },
        {
            value: '3-bosqich',
            label: '3-bosqich',
        },
    ];
    const teacherlist = [
        {
            value: 'Malika',
            label: 'Malika',
        },
        {
            value: 'Shohida',
            label: 'Shohida',
        },
        {
            value: 'Azizbek',
            label: 'Azizbek',
        },
        {
            value: 'Hurshida',
            label: 'Hurshida',
        },
    ];

    const save = () => {
        setChosen((prev) => { return { ...prev, all } });

        setAllStudents((prev) => {
            return [...prev, chosen];
        });
        setReset(true);
    }

    return (
        <Grid container spacing={3}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableBody >
                        <TableRow >
                            <TableCell size="small">
                                <TextField
                                    id="course"
                                    select
                                    label="Course"
                                    value={course}
                                    onChange={handleCourse}
                                >
                                    {courseName.map((option) => (
                                        <MenuItem value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    id="course"
                                    select
                                    label="Teacher"
                                    value={teacher}
                                    onChange={handleTeacher}
                                >
                                    {teacherlist.map((option) => (
                                        <MenuItem value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontSize: "15px" }}>
                                Date of starting course
                        <Date value={selectedDate}
                                    onChange={handleDateChange} />
                            </TableCell>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField value={group} onChange={handleGroup} style={{ fontSize: "15px" }} id="standard-basic" label="Name of the group" />
                                </form>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField value={pay} onChange={handlePay} style={{ fontSize: "15px" }} id="outlined-basic" label="Total amount to pay" variant="filled" />
                                </form>
                            </TableCell>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField value={lessons} onChange={handleLessons} id="outlined-basic" label="Number of lessons" variant="standard" />
                                </form>
                            </TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontSize: "15px" }}>
                                Days of the course
                                <SelectMultiple value={days}
                                    onChange={handleDays} />
                            </TableCell>
                            <TableCell>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField value={hour} onChange={handleHour} style={{ fontSize: "15px" }} id="standard-basic" label="Hour" />
                                </form>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button style={{ marginTop: "20px", float: "right", backgroundColor: '#009D77', color: "white" }} onClick={save} variant="contained" color="primary">
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