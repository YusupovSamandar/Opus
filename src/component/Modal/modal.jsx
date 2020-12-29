import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./modal.css";
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

export default function TransitionsModal() {
    const [temp, setTemp] = useContext(TempStudentContext);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [currency, setCurrency] = React.useState('2004');
    const [yearval, setYearval] = React.useState('October');
    const [isNaxt, setIsNaxt] = React.useState('Naxt pul orqali');
    const [qatnashdi, setQatnashdi] = React.useState(12)
    const [payment, setPayment] = React.useState(160000);
    const [all, setAll] = React.useState(temp);
    useEffect(() => {
        setAll((prev) => {
            let prevFee = prev.fees;
            return {
                ...prev,
                fees: {
                    ...prevFee,
                    yil: currency,
                    oy: yearval,
                    date: selectedDate.toDateString(),
                    tolanganSumma: payment,
                    qatnashdi: qatnashdi,
                    qoldiq: 12 - qatnashdi
                }
            }
        });
    }, [currency, payment, qatnashdi, selectedDate, yearval]);
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const handleChange3 = (event) => {
        setIsNaxt(event.target.value);
    };
    const handleChange2 = (event) => {
        setYearval(event.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePayment = (event) => {
        let paymentForDays = Math.floor((160000 / 12) * event.target.value);
        setQatnashdi(event.target.value);
        setPayment(paymentForDays);
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
                                <Paper className="detail">
                                    <h2>O'quvchi: <u>{temp.firstName} {temp.lastName}</u></h2>
                                    <h2>Yo'nalishi: <u>English</u></h2>
                                    <h2>Kurs nomi: <u>{temp.course}</u></h2>
                                    <h2>Guruh: <u>415</u></h2>
                                    <h2>Olik Darslar Soni: <u>12</u></h2>
                                    <h2>Oylik to'lov summasi: <u>160 000</u></h2>
                                    <h2>Imtiyoz mavjud: <u>150 000, 00</u></h2>
                                </Paper>
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
                                    <Input placeholder="12" style={{ textAlign: "right", direction: "rtl" }} onChange={handlePayment} value={qatnashdi} inputProps={{ 'aria-label': 'description' }} />
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