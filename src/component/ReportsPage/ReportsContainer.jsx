// Icons
import Report from "./Reports"
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
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
function ReportsContainer() {
    const classes = useStyles();

    return (<Container maxWidth="sm" style={{ marginTop: "100px", maxWidth: "1000px" }}>
        <div className={classes.root}>

            <Grid container spacing={20} >
                {
                    [ {name: "Qarzdorlik", link: '/reports/reportsinside', border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/3399/3399165.svg" },
                    { name: "Shartnomalar", link: '/reports/reportsinside', border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/748/748504.svg" },
                    { name: "Reklama", link: '/reports/reportsinside', border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/3800/3800402.svg" },
                    { name: "Payments", link: '/reports/reportsinside', border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135706.svg" },
                    { name: "Archive", link: '/reports/reportsinside', border: "#0779e4", img: "https://www.flaticon.com/svg/static/icons/svg/716/716820.svg" }
                   ].map((card, index) => (
                        <Report style={{ marginTop: "10px" }} color={card.border} link={card.link} img={card.img} description={card.text} name={card.name} day1={card.day1} day2={card.day2} day3={card.day3} />))
                }
            </Grid>
        </div>
    </Container>
    )
}
export default  ReportsContainer