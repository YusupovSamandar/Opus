import React from "react";
// Components
import Search from "./../../component/Search/search";
import Table from "./../../component/student-table/student-table";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./detail.css"

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
    const classes = useStyles();
    return (
        <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1600px" }}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4} sm={3}>
                        <Search />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Paper style={{ padding: "0 15px" }}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={4}>
                                    <Paper style={{ textAlign: "left", backgroundColor: "rgba(0, 0, 0, 0.04)" }} className={classes.paper}>
                                        <h1 style={{ color: "grey" }}>Urinboe Abdushukur →</h1>
                                        <h2>+998996035599</h2>
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
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </Container>
    );
}
