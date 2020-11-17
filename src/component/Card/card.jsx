import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import "./card.css"

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

export default function Card(props) {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={4}>
            <Link to="/detail">
                <Paper id="hover-paper" style={{ borderBottom: "1px solid red", padding: "40px 0" }} className={classes.paper}>
                    <img style={{ width: "50px", }} className="card-img" src={props.img} alt="" />
                    <p style={{ fontWeight: "bold", paddingBottom: "7px" }}>{props.description}</p>
                </Paper>
            </Link>
        </Grid>
    );
}
