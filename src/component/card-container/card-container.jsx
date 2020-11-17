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
        <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "" }}>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {

                        [{
                            text: "Registration", link: '/register', img: "https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg",
                        },
                        { text: "Attendance", link: '/register', img: "https://www.flaticon.com/svg/static/icons/svg/3125/3125856.svg" },
                        { text: "Groups", link: '/cardsgroup', img: "https://www.flaticon.com/svg/static/icons/svg/3588/3588693.svg" },
                        { text: "Reports", link: '/register', img: "https://www.flaticon.com/svg/static/icons/svg/1055/1055644.svg" },
                        { text: "Fees", link: '/detail', img: "https://www.flaticon.com/premium-icon/icons/svg/2117/2117281.svg" },
                        { text: "Add to group", link: '/add', img: "https://www.flaticon.com/svg/static/icons/svg/3658/3658947.svg" },
                        { text: "Teacher", link: '/teachers', img: "https://www.flaticon.com/svg/static/icons/svg/906/906175.svg" },
                        { text: "Exam   ", link: '/register', img: "https://www.flaticon.com/svg/static/icons/svg/3430/3430082.svg" },
                        { text: "Agreements", link: '/register', img: "https://www.flaticon.com/svg/static/icons/svg/1006/1006555.svg" }].map((card, index) => (
                            <Card className='card-paper' key={index} color={card.border} link={card.link} img={card.img} description={card.text} />
                        ))
                    }
                </Grid>
            </div>
        </Container>
    );

}

export default cardContainer;