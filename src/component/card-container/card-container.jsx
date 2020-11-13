/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from "./../Card/card";
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
const cardContainer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1600px" }}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        [{ text: "Hello", border: "gold", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "red", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "blue", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "yellow", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "aqua", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "grey", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "teal", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "red", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }, { text: "Hello", border: "#333", img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" }].map((card, index) => (
                            <Card key={index} color={card.border} img={card.img} description={card.text} />
                        ))
                    }
                </Grid>
            </div>
        </Container>
    );

}

export default cardContainer;