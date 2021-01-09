import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { loadData, selectedTeacher } from '../../actions';
import Grid from '@material-ui/core/Grid';
import JournalList from './JournalList';
import JournalWindows from './JournalWindows';

function TabPanel(props) {

  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    maxHeight: '500px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

const VerticalTabs = () => {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data: teachers } = await axios.get("http://localhost:4000/teachers");
    const { data: students } = await axios.get("http://localhost:4000/students");
    dispatch(loadData(teachers, students));
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const teachers = useSelector(state => state.teachers);
  const students = useSelector(state => state.students);
  const groupStudents = useSelector(state => state.groupStudents);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleClick(obj) {
    dispatch(selectedTeacher(obj))
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1300px" }}>
      <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
         <JournalList />
        </Grid>
        <Grid style={{ paddingTop: "5px" }} item xs={8} sm={8}>
         <JournalWindows />
        </Grid>
        </Grid>

      </div>
    </Container>
  );
}

export default VerticalTabs


