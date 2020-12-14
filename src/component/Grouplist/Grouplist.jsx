import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "./Grouplist.css";
import Container from '@material-ui/core/Container';
import AllButtons from "./AllButtons";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

import { loadData, selectedTeacher } from '../../actions';

function TabPanel(props) {
  // const loadData = useSelector(state => state.)
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
  // const [teacher, setTeacher] = useState([]);
  // const [group, setGroup] = useState([]);

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
        <Tabs
          id="own-scroll-x"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          style={{ padding: '14px' }}
        >{
            teachers.map((obj, index) => (
              <Tab style={{
                boxShadow: '0 2px 10px',
                margin: '10px 0'
              }} onClick={() => { handleClick(obj) }} label={obj.title + ' - ' + obj.group} {...a11yProps({ index })} />
            ))
          }
        </Tabs>

        <TabPanel style={{ width: '700px' }}>
          <AllButtons students={groupStudents} />
        </TabPanel>

      </div>
    </Container>
  );
}

// const mapStateToProps = state => {
//   return {
//     teachers: state.teachers,
//     students: state.students
//   }
// }



export default VerticalTabs
