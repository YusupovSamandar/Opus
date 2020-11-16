// Components
import Card from "./card";
// Icons
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// Packages
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Card packages
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Custom css
//Breadcumb
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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

function AdminCard() {
    const classes = useStyles();
    return (<Container maxWidth="lg" style={{ marginTop: "120px", maxWidth: "1600px" }}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
                Material-UI
  </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                Core
  </Link>
            <Typography color="textPrimary">Admin Panel</Typography>
        </Breadcrumbs>
        <div className={classes.root}>
            <Grid container spacing={3}>
                {
                    [{ text: "Staff", img: "https://www.flaticon.com/svg/static/icons/svg/1358/1358682.svg" },
                    { text: "Add a new employee", img: "https://www.flaticon.com/svg/static/icons/svg/3579/3579045.svg" },
                    { text: "Edit Courses", img: "https://www.flaticon.com/svg/static/icons/svg/2946/2946209.svg" },
                    { text: "Recvisits", img: "https://www.flaticon.com/svg/static/icons/svg/825/825571.svg" }].map((admin, index) => (
                        <Card img={admin.img} description={admin.text} />
                    ))
                }
            </Grid>
        </div>
    </Container>)
}

export default AdminCard


