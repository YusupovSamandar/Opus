import React from "react";
import MaterialTable from "material-table";
import './add.css';

function HandlingSelectionChanges() {
    return (
        <MaterialTable
            title="Add to group"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Date of registration', field: 'date' },
                { title: 'Phone number', field: 'number' },
                { title: 'Course', field: 'courseName' },
                { title: 'Comment', field: 'comment' }
            ]}
            data={[
                { name: 'Urinboyev Abdushukur', date: '10.10.2020', number: '90 - 633 - 55 - 99', courseName: '2-bosqich', comment: '' },
                { name: 'Urinboyev Abdushukur', date: '10.10.2020', number: '90 - 633 - 55 - 99', courseName: '2-bosqich', comment: '' },
            ]}
            options={{
                selection: true
            }}
            onSelectionChange={(rows) => alert('You selected ' + rows.length + ' rows')}
        />
    )
}
export default HandlingSelectionChanges;