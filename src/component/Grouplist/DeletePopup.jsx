import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';



const groupCourse = [
    "1-bosqich",
    "2-bosqich"
];

const groupTeacher = [
    "Ashurova Malika",
    "Yusupov Samandar"
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50ch',
            display: 'flex',
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
        padding: theme.spacing(2),
    },
}));


export default function TransitionsModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [isNaxt, setIsNaxt] = React.useState('Bosqich');
    const [isTeacher, setTeacher] = React.useState('Teacher');

    const handleChange3 = (event) => {
        setIsNaxt(event.target.value);
    };
    const handleChange = (event) => {
        setTeacher(event.target.value);
    };


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <Button style={{ marginRight: "20px", backgroundColor: "#ffffff", color: 'grey', }} onClick={handleOpen} variant="contained" color="primary">
                <DeleteIcon />
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
                    <Paper style={{ textAlign: "center", padding: "0 20px", width: "500px" }} className={classes.paper}>
                        <Button onClick={handleClose} style={{ minWidth: "42px", padding: "6px 0", position: "absolute", top: "20%", right: "30%" }} variant="contained"><ClearIcon /></Button>
                        <h1 style={{ color: "White", backgroundColor: " #3f51b5" }}>Guruh ma'lumotlatini o'chirish</h1>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField required id="standard-required" label="Guruh nomi" />
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Kursi"
                                value={isNaxt}
                                onChange={handleChange3}
                                helperText="Iltimos kursni tanlang"
                            >
                                {groupCourse.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="O'qituvchi"
                                value={isTeacher}
                                onChange={handleChange}
                                helperText="Iltimos o'qituvchini tanlang"
                            >
                                {groupTeacher.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button style={{ margin: "10px", backgroundColor: '#3f51b5', color: "white" }} onClick={handleOpen} variant="contained" >
                                Saqlash
                                    </Button>
                            <Button style={{ margin: "10px", backgroundColor: '#3f51b5', color: "white" }} onClick={handleOpen} variant="contained" >
                                Bekor qilish
                                    </Button>
                        </form>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    );
}