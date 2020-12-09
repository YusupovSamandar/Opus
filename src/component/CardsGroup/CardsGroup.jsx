import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./CardsGroup.css";
import img from "./profile.png";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',

        width: '250px'
    },
}));

export default function Card(props) {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={3} lg={3} xl={3} md={4} sm={6} >
            <Link to="/cardsgroup/grouplist">

            <Paper id="cardGroup" style={{ borderBottom: "2px solid blue ", padding: "20px 10px", marginTop: "10px", boxShadow: "5px 10px 10px #bbbfca" }} className={classes.paper}>
                <p style={{ fontWeight: "bold" }}>{props.description}</p>
                <hr style={{ margin: "5px" }}></hr>
                <img style={{ width: "50px", }} className="card-img" src={img} alt="" />
                <p style={{ fontWeight: "bold", paddingBottom: "7px" }}>{props.name} </p>
                <p>{props.day}</p>
            </Paper>
            </Link>
        </Grid>
    );
}
