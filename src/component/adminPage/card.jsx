import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./card.css"
import { Link } from 'react-router-dom';


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
        <Grid item xs={12} sm={3}>
            <Paper id="admin-card" style={{ borderTop: "2px solid " + props.color, padding: "10px 0px" }} className={classes.paper}>
                <img style={{ width: "80px" }} className="admin-img" src={props.img} alt="" />
                <p className='fonthover' style={{ fontSize: "1.2rem", color: "grey", margin: "5px 0" }}>{props.description}</p>
            </Paper>
        </Grid>
    );
}
