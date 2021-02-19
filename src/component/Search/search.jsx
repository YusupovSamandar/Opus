import React, { useContext } from "react";
import "./search.css";
// Table package
import MaterialTable from 'material-table';
import { useDispatch } from 'react-redux';
import { TempStudentContext } from "./../Student-datail-context";
import { revealFeesPage } from "./../../actions";
import RestoreIcon from '@material-ui/icons/Restore';


function BasicSearch(props) {
    const dispatch = useDispatch();
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
                        tooltip: 'add user',
                        onClick: (event, rowData) => {
                            SetTempStudent(rowData);
                            dispatch(revealFeesPage(false));
                        }
                    },
                    {
                        icon: "edit",
                        tooltip: 'Change User',
                        onClick: (event, rowData) => {

                        }
                    }
                ]}
            />
        </div>
    )
}
export default BasicSearch;