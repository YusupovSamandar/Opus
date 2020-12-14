import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';


<MaterialTable
    // other props
    options={{
        exportButton: true
    }}
/>



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 140,
    },
}));

function Params() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (<Grid style={{ alignItems: "baseline", display: "flex", marginBottom: "30px" }}>
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
        <FormControl className={classes.formControl}>
            <Select

                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="">
                    <em>Barchasi</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>

        </FormControl>
        <Button style={{ marginLeft: "30px" }} variant="contained" color="primary" >
            Saralash
                    </Button>
    </Grid >)
}


export default function MaterialUIPickers() {
    // The first commit of Material-UI



    return (
        <Container maxWidth="lg" style={{ marginTop: "150px", padding: "30px", maxWidth: "1080px", backgroundColor: "#fff" }}>
            <MaterialTable
                title={Params()}
                columns={[
                    { title: 'No.', field: 'No' },
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Phone Number', field: 'Phone Number' },
                    { title: 'Group', field: 'Group' },
                    { title: 'Teacher', field: 'Group' },
                    { title: 'Kelgan', field: 'Kelgan' },
                    {
                        title: 'Ketgan',
                        field: 'Ketgan',

                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                options={{
                    exportButton: true,
                    headerStyle: {
                        backgroundColor: '#f1f1f1',
                        color: '#000'
                    }
                }}
            />










        </Container>
    );
}
