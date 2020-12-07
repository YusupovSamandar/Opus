import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Payments from "./Payments";


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

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1300px" }}>
    <div className={classes.root}>
      {/* <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        style = {{padding: '14px'}}
      >
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="To'lovlar bo'yicha" {...a11yProps(0)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Qarzdorlik" {...a11yProps(1)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Shartnomalar" {...a11yProps(2)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Reklama" {...a11yProps(3)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Arxiv" {...a11yProps(4)} />
      </Tabs> */}
    <TabPanel value={value} index={0} style={{width: '1300px'}}>
      <Payments />
    </TabPanel>
    <TabPanel value={value} index={1} style={{width: '1040px'}}>
      <Payments />   
    </TabPanel>
    <TabPanel value={value} index={2} style={{width: '1040px'}}>
      <Payments />
    </TabPanel>
    <TabPanel value={value} index={3} style={{width: '1040px'}}>
      <Payments />
    </TabPanel>
    <TabPanel value={value} index={4} style={{width: '1040px'}}>
      <Payments />
    </TabPanel>
    <TabPanel value={value} index={5} style={{width: '1040px'}}>
      <Payments />
    </TabPanel>
    </div>
    </Container>
  );
}
