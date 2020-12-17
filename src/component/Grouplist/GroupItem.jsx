import 'date-fns';
import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import ChangePopup from './ChangePopup';
import DeletePopup from './DeletePopup';


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
        width: 120,
    },
}));

function Params() {
    const classes = useStyles();
    return (<Grid style={{ alignItems: "baseline", display: "flex", marginTop: "5px" }}>
        <ChangePopup />
        <DeletePopup />
        {/* <Button style={{ marginLeft: "30px" }} variant="contained" color="primary" >
            O'zgartirish
                    </Button>
                    <Button style={{ marginLeft: "30px" }} variant="contained" color="primary" >
            O'chirish
                    </Button> */}
    </Grid >)
}


export default function MaterialUIPickers(props) {
    // The first commit of Material-UI
    return (
          <MaterialTable style={{ width: '1000px' }}  position="absolute"
                title={Params()}
                columns={[
                    { title: 'Familiya', field: 'surName' },
                    { title: 'Ism', field: 'name' },
                    { title: 'Telefon raqami', field: 'phoneNumber' },
                    { title: 'Uy telefon raqami', field: 'extraPhoneNumber' },
                ]}
                data={props.students.map(student => ({
                  surname: student.surName, name: student.name, phoneNumber: student.phoneNumber, extraPhoneNumber: student.extraPhoneNumber
                }))}
             
                options={{
                    exportButton: true,
                    headerStyle: {
                        backgroundColor: '#f1f1f1',
                        color: '#000'
                    }
                }}
            />
    );
}
