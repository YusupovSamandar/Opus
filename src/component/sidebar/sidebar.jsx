// Icons
import Group from "./Icons/group-icon.png";
import Report from "./Icons/Report.png";
import AddGroup from "./Icons/add.svg";
import Agree from "./Icons/Agree.png";
import { Link } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
// Packages
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Language from './lang/Lang';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
// Custom css
import "./sidebar.css";

const drawerWidth = 240;

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
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
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

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div className="header-content-grid">
                        <Typography className="my-account" variant="h6" noWrap>
                            My Account
                        </Typography>
                        <div className="header-logo">
                            Logo
                        </div>
                        <div>
                            <div>
                                <Input />
                                <SearchIcon className="my-search" />
                            </div>
                        </div>
                    </div>
                    <Language />
                    <div className="devider"></div>
                    <div>Account and user</div>
                    <div className="devider"></div>
                    <h3 className="log-out">
                        <PowerSettingsNewIcon />
                    Logout
                    </h3>





                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton className="text-white-icon" onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Registration', 'Attendance / Fees'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <Link to="/register"> <img className="img-icon" src="https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/assignments.svg" alt="" /></Link> : <img className="img-icon" src="https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/attendance.svg" alt="" />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List>
                    {['Groups', 'Reports'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                              {index % 2 === 0 ?  <Link to="/cardsgroup"><img src={Group} alt="" /></Link>  : <img src={Report} alt="" />}
                            </ListItemIcon>
                            {index % 2 === 0 ?  <Link to="/cardsgroup"><ListItemText style={{color:"#fff"}} primary={text} /></Link>  : <ListItemText primary={text} />}
                        </ListItem>
                    ))}
                </List>
                <List>
                    {['Add to Group', 'Teachers'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <img src={AddGroup} alt="" /> : <img src="https://corecampus.s3.ap-south-1.amazonaws.com/images/module_images/attendance.svg" alt="" />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <List>
                    {['Amin Panel', 'LMS'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <img src="https://cdn3.iconfinder.com/data/icons/illustricon-tech-ii/512/calendar-512.png" alt="" /> : <img src={Agree} alt="" />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {props.component}
        </div>
    );
}
