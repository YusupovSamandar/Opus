import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import JournalWindows from "./JournalWindows";
import axios from "axios";



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
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  },
}));

export default function VerticalTabs() {
  const [teacher, setTeacher] = useState([]);
  const [group,setGroup] = useState([]);
 

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const { data } = await axios.get("http://localhost:3000/Student-details");
    setTeacher(data);
  }
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1300px" }}>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        style = {{padding: '14px'}}
      >
        {
            teacher.map((obj, index) => (
              <Tab style={{
                boxShadow: '0 2px 10px',
                margin: '10px 0'
              }} label={obj.Group} {...a11yProps({ index })} />
            ))
          }
      </Tabs>
      {group.map((obj,index)=>(
   
   <TabPanel value={value} index={index} style={{ width: '1040px' }}>
           <JournalWindows />
         </TabPanel>
       
 ))}
{/*       
    <TabPanel value={value} index={0} style={{width: '1040px'}}>
        <JournalWindows />
      </TabPanel>
      <TabPanel value={value} index={1} style={{width: '1040px'}}>
      <JournalWindows />
      </TabPanel>
      <TabPanel value={value} index={2} style={{width: '1040px'}}>
      <JournalWindows />
      </TabPanel>
      <TabPanel value={value} index={3} style={{width: '1040px'}}>
      <JournalWindows />
      </TabPanel>
      <TabPanel value={value} index={4} style={{width: '1040px'}}>
      <JournalWindows />
      </TabPanel>
      <TabPanel value={value} index={5} style={{width: '1040px'}}>
      <JournalWindows />
      </TabPanel>
      <TabPanel value={value} index={6} style={{width: '1040px'}}>
      <JournalWindows />
      </TabPanel> */}
    </div>
    </Container>
  );
}
