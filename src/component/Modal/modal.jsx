import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./modal.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import { TempStudentContext } from "./../Student-datail-context";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
const year = [
    {
        value: '2004',
        label: '2004',
    },
    {
        value: '2005',
        label: '2005',
    },
    {
        value: '2006',
        label: '2006',
    },
    {
        value: '2007',
        label: '2007',
    },
];
const month = [
    {
        value: 'October',
        label: 'October',
    },
    {
        value: 'November',
        label: 'November',
    },
    {
        value: 'December',
        label: 'December',
    },
    {
        value: 'January',
        label: 'January',
    },
];

const paymentType = [
    "Naxt pul orqali",
    "Plastik karta orqali"
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function createData(name, calories) {
    return { name, calories };
}

const rows = [
    createData("O`quvchi", 'Abdullayev Abdumalik'),
    createData('Yo`nalishi', 237),
    createData('Kurs Nomi', 262),
    createData('Guruh', 201),
    createData('Oylik darslar soni', 356),
    createData('Oylik to`lov summasi', '160 000'),
    createData('Imtiyoz Mavjud', '80 000.00')
];

export default function TransitionsModal() {
    const [temp, setTemp] = useContext(TempStudentContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [currency, setCurrency] = React.useState('2004');
    const [yearval, setYearval] = React.useState('October');
    const [isNaxt, setIsNaxt] = React.useState('Naxt pul orqali');
    const [payment, setPayment] = React.useState(160000);
    const [all, setAll] = React.useState(temp);
    const handleChange = (event) => {
        setCurrency(event.target.value);
        setAll((prev) => {
            let prevFee = prev.fees;
            return {
                ...prev,
                fees: {
                    ...prevFee,
                    yil: event.target.value
                }
            }
        });
    };
    const handleChange3 = (event) => {
        setIsNaxt(event.target.value);
    };
    const handleChange2 = (event) => {
        setYearval(event.target.value);
        setAll((prev) => {
            let prevFee = prev.fees;
            return {
                ...prev,
                fees: {
                    ...prevFee,
                    oy: event.target.value
                }
            }
        });
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setAll((prev) => {
            let prevFee = prev.fees;
            return {
                ...prev,
                fees: {
                    ...prevFee,
                    date: date.toDateString()
                }
            }
        });
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePayment = (event) => {
        let paymentForDays = Math.floor((160000 / 12) * event.target.value);
        setPayment(paymentForDays);
        setAll((prev) => {
            let prevFee = prev.fees;
            return {
                ...prev,
                fees: {
                    ...prevFee,
                    tolanganSumma: paymentForDays,
                    qatnashdi: event.target.value,
                    qoldiq: 12 - event.target.value
                }
            }
        });
    }
    const pay = () => {
        setOpen(false);
        setTemp(all);
    }

    return (
        <div>
            <Button style={{ marginRight: "20px", backgroundColor: '#009D77', color: "white" }} onClick={handleOpen} variant="contained" color="primary">
                To'lov
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                disableBackdropClick={true}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade style={{ outline: "none", border: "none" }} in={open}>
                    <Paper style={{ textAlign: "center", padding: "0 20px", width: "1000px" }} className={classes.paper}>
                        <Button onClick={handleClose} style={{ minWidth: "42px", padding: "6px 0", position: "absolute", top: "15%", right: "15%" }} variant="contained"><ClearIcon /></Button>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <h1 style={{ color: "White", backgroundColor: "#009D77" }}>Malumotlar</h1>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>
                                                    <TableCell align="right">{row.carbs}</TableCell>
                                                    <TableCell align="right">{row.protein}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid item xs={6}>
                                <h1 style={{ color: "White", backgroundColor: "#009D77" }}>To'lov</h1>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        label="To'lov Qilingan yil"
                                        value={currency}
                                        onChange={handleChange}
                                    >
                                        {year.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        label="To'lov Qilingan yil"
                                        value={yearval}
                                        onChange={handleChange2}
                                    >
                                        {month.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField><br /><br />
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        label="To'lov Qilingan yil"
                                        value={isNaxt}
                                        onChange={handleChange3}
                                    >
                                        {paymentType.map((option, index) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField required id="standard-required" label="To'langan Summa" value={isNaN(payment) ? "iltimos raqam kiriting" : payment} />
                                    <span style={{ marginRight: "80px" }}>Qatnashgan Darslar:</span>
                                    <Input placeholder="12" style={{ textAlign: "right", direction: "rtl" }} onChange={handlePayment} inputProps={{ 'aria-label': 'description' }} />
                                    <br /><br />
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                        <span>Qatnashgan Darslar:</span>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Date picker inline"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />

                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <Checkbox style={{ color: "#009D77" }} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> <span>Check Chiqarish</span>
                                    <br />
                                    <Button style={{ margin: "10px", backgroundColor: '#009D77', color: "white" }} onClick={pay} variant="contained" >
                                        To'lov Qilish
                                    </Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}