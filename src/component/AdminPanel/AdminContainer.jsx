// Icons
import Admin from "./Admin"
// Packages
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
        c      flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
function AdminContainer() {
    const classes = useStyles();

    return (<Container maxWidth="sm" style={{ marginTop: "100px", maxWidth: "1000px" }}>
        <div className={classes.root}>

            <Grid container spacing={20} >
                {
                    [{ name: "Staff", border: "#0779e4", link: '/teachers', img: "https://www.flaticon.com/svg/static/icons/svg/2795/2795229.svg" },
                    { name: "Add a New Employee", border: "#0779e4", link: '/addnewemployee', img: "https://www.flaticon.com/svg/static/icons/svg/1256/1256628.svg" },
                    { name: "Rekvizits", border: "#0779e4", link: '/rekvizits', img: "https://www.flaticon.com/svg/static/icons/svg/2897/2897980.svg" }
                    ].map((card, index) => (
                        <Admin style={{ marginTop: "10px" }} color={card.border} link={card.link} img={card.img} description={card.text} name={card.name} day1={card.day1} day2={card.day2} day3={card.day3} />))
                }
            </Grid>
        </div>
    </Container>
    )
}
export default AdminContainer