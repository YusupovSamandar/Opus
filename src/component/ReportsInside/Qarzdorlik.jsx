import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import { ExportReactCSV } from './ExportReactCSV'

<MaterialTable
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
        width: 120,
    },
}));

function Params() {
    const classes = useStyles();
    return (<Grid style={{ alignItems: "baseline", display: "flex", marginBottom: "0px" }}>
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                style={{ width: '150px' }}
            />
        </form>
        <Button style={{ marginLeft: "30px" }} variant="contained" color="primary" >Saralash</Button>
    </Grid >)
}

export default function MaterialUIPickers() {
    const [datas] = React.useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    ]);

    return (
        <Container maxWidth="lg" style={{ marginTop: "150px", padding: "30px", maxWidth: "1050px", backgroundColor: "#fff" }}>
            <MaterialTable
                title={Params()}
                columns={[
                    { title: 'No.', field: 'No' },
                    { title: 'Teacher', field: 'name' },
                    { title: 'Group', field: 'surname' },
                    { title: 'Student', field: 'Phone Number' },
                    { title: 'The day of payment', field: 'Group' },
                    { title: 'Sum', field: 'Group' },
                ]}
                data={datas}
                options={{
                    exportButton: true,
                    headerStyle: {
                        backgroundColor: '#f1f1f1',
                        color: '#000'
                    }
                }}
            />
            <ExportReactCSV csvData={datas} fileName="student.xls" />
        </Container>
    );
}
