import React, { useContext } from "react";
import "./search.css";
// Table package
import MaterialTable from 'material-table';
import { TempStudentContext } from "./../Student-datail-context";

function BasicSearch(props) {
    const SetTempStudent = useContext(TempStudentContext)[1];

    return (
        <div className="hovered-styled-row">
            <MaterialTable className='styled'
                title="👨‍🎓"
                columns={[
                    { title: 'Name', field: 'firstName' },
                    { title: 'Surname', field: 'lastName' }
                ]}
                data={props.data}
                options={{
                    pageSize: 10,
                    search: true
                }}
                actions={[
                    {
                        icon: "add",
                        tooltip: 'Save User',
                        onClick: (event, rowData) => {
                            SetTempStudent(rowData);
                        }
                    }
                ]}
            />
        </div>
    )
}
export default BasicSearch;