import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialTable from "material-table";
import "./Grouplist.css";
import Buttons from "./Buttons";
import Print from "./Print";
import Container from '@material-ui/core/Container';



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
    <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1600px" }}>
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
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group One" {...a11yProps(0)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group Two" {...a11yProps(1)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group Three" {...a11yProps(2)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group Four" {...a11yProps(3)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group Five" {...a11yProps(4)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group Six" {...a11yProps(5)} />
        <Tab style={{   boxShadow: '0 2px 10px',
    margin: '10px 0'}} label="Group Seven" {...a11yProps(6)} />
      </Tabs>
    <TabPanel value={value} index={0} style={{width: '1040px'}}>
        <Buttons />
        
      {/* <MaterialTable
      title="Group 1 
      Abdushukur Urinboyev"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Print />
      {/* <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
    
       
      <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    />
      </TabPanel>
    </div>
    </Container>
  );
}
