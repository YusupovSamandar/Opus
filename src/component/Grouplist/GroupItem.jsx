import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import ChangePopup from './ChangePopup';
import DeletePopup from './DeletePopup';


<MaterialTable
    options={{
        exportButton: true
    }}
/>

function Params() {
    return (<Grid style={{ alignItems: "baseline", display: "flex", marginTop: "5px" }}>
        <ChangePopup />
        <DeletePopup />
    </Grid >)
}


export default function MaterialUIPickers(props) {
    return (
        <MaterialTable style={{ width: '1000px' }} position="absolute"
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
