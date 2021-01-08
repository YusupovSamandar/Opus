import React from "react";
import MaterialTable from "material-table";
import { useContext } from "react";
import { chosenStudent } from "./../Student-datail-context";

function AllStudents(props) {
    const SetChosenStudent = useContext(chosenStudent)[1];

    return (
        <MaterialTable style={{ marginBottom: "70px", width: "65%", display: "inline-block" }}
            title="Add to group"
            columns={[
                { title: 'First Name', field: 'firstName' },
                { title: 'Surname', field: 'lastName' },
                { title: 'Phone number', field: 'phoneNumber' },
                { title: 'Comment', field: 'comment' }
            ]}
            data={props.data}
            actions={[
                {
                    icon: "add",
                    tooltip: 'Save User',
                    onClick: (event, rowData) => {
                        SetChosenStudent(rowData);
                    }
                }
            ]}
        />
    )
}
export default AllStudents;