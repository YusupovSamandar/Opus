// Icons
import Card from "./CardsGroup";
// Packages
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from "axios";


// Card packages
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },


    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function CardGroup2() {
    const classes = useStyles();

    const [cards, setCards] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const { data } = await axios.get('http://localhost:3000/Student-details');
        setCards(data);
    }

    return (<Container maxWidth="sm" style={{ marginTop: "100px", maxWidth: "1118px" }}>
        <div className={classes.root}>

            <Grid container spacing={0} >
                {
                    cards.map((card, index) => (
                        <Card style={{ marginTop: "10px" }} color={card.border} description={card.course} name={card.group} day={card.daysOfWeek} />))
                }
            </Grid>
        </div>
    </Container>
    )
}
export default CardGroup2