import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./Grouplist.css";
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { loadData } from '../../actions';
import CombineList from './CombineList';
import StudentsList from './StudentsList';
import Grid from '@material-ui/core/Grid';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItems = async () => {
    const { data: teachers } = await axios.get("http://localhost:4000/teachers");
    const { data: students } = await axios.get("http://localhost:4000/students");
    dispatch(loadData(teachers, students));
  }

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1300px" }}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <CombineList />
          </Grid>
          <Grid style={{ paddingTop: "80px" }} item xs={8} sm={8}>
            <StudentsList />
          </Grid>
        </Grid>

      </div>
    </Container>
  );
}

export default VerticalTabs


