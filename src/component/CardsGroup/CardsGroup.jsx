import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./CardsGroup.css"

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

            <Paper id="cardGroup" style={{ borderBottom: "2px solid " + props.color, padding: "20px 10px", marginTop: "10px", boxShadow: "5px 10px 10px #bbbfca" }} className={classes.paper}>
                <p style={{ fontWeight: "bold" }}>{props.description}</p>
                <hr style={{ margin: "5px" }}></hr>
                <img style={{ width: "50px", }} className="card-img" src={props.img} alt="" />
                <p style={{ fontWeight: "bold", paddingBottom: "7px" }}>{props.name} </p>
                <Grid container spacing={3}>
                    <Grid item xs={4} >
                        <span style={{ color: "#898b8a" }}>{props.day1}</span>
                    </Grid>
                    <Grid item xs={4} >
                        <span style={{ color: "#898b8a" }}>{props.day2}</span>
                    </Grid>
                    <Grid item xs={4} >
                        <span style={{ color: "#898b8a" }}>{props.day3}</span>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
