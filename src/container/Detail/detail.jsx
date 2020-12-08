import React, { useContext } from "react";
// Components
import Search from "./../../component/Search/search";
import Table from "./../../component/student-table/student-table";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import axios from "axios";
import "./detail.css";
import { StudentContext } from "./../../component/Student-datail-context";
import Popup from "./../../component/Modal/modal";
import { TempStudentContext } from "./../../component/Student-datail-context";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    // Data
    const [value] = useContext(StudentContext);
    const [tempStudent] = useContext(TempStudentContext);

    // useEffect(() => {
    //     fetchItems();
    // }, []);

    // const [students, setStudents] = useState([]);

    // const fetchItems = async () => {
    //     const { data } = await axios.get("http://localhost:3000/students");
    //     setStudents(data);
    // }


    const classes = useStyles();

    return (
        <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1600px" }}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid style={{ paddingTop: "0px" }} item xs={4} sm={3}>
                        <Search data={value} />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Paper style={{ padding: "0 15px" }}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={4}>
                                    <Paper style={{ textAlign: "left", backgroundColor: "#fff" }} className={classes.paper}>
                                        <p style={{ color: "#000", fontSize: '1.8rem' }}>{tempStudent.surname} {tempStudent.name}</p>
                                        <p style={{ color: "#212121", fontSize: '1.2rem' }}>{tempStudent.phone}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Table />
                                </Grid>

                            </Grid>
                        </Paper>
                        <br />
                        <br />
                        <Paper style={{ padding: "20px 10px" }}>
                            <Grid item xs={5} sm={12}>
                                <Table />
                            </Grid>
                            <br />
                            <br />
                            <div style={{ textAlign: "right" }}>
                                <Popup />
                            </div>

                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </Container>
    );
}
