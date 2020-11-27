import React, { useContext } from "react";
import "./search.css";
// Table package
import MaterialTable from 'material-table';
import { TempStudentContext } from "./../Student-datail-context";

function BasicSearch(props) {
    const [tempStudent, SetTempStudent] = useContext(TempStudentContext);

    return (
        <div className="hovered-styled-row">
            <MaterialTable className='styled'
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
                            SetTempStudent(rowData);
                        }
                    }
                ]}
            />
        </div>
    )
}
export default BasicSearch;