import React from "react";
import "./search.css";
// Table package
import MaterialTable from 'material-table';

function BasicSearch(props) {

    return (
        <MaterialTable
            title="Students"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' }
            ]}
            data={props.data}
            options={{
                search: true
            }}
            actions={[
                {
                    icon: "add",
                    tooltip: 'Save User',
                    onClick: (event, rowData) => {
                        // console.log(rowData);
                    }
                }
            ]}
        />
    )
}
export default BasicSearch;