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
            <Link to={props.link}>
                <Paper id="hover-paper" style={{ borderBottom: "1px solid blue", padding: "40px 0" }} className={classes.paper}>
                    <img style={{ width: "80px", }} className="card-img" src={props.img} alt="" />
                    <p style={{ fontWeight: "", color: 'black', paddingTop: "10px", fontSize: '20px', }}>{props.description}</p>
                </Paper>
            </Link>
        </Grid>
    );
}
