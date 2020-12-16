import React from "react";
import MaterialTable from "material-table";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { addData } from '../../actions';

function HandlingSelectionChanges() {

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const { data: students } = await axios.get("http://localhost:4000/students");
        dispatch(addData(students));
    }
    const dispatch = useDispatch();
    const students = useSelector(state => state.students);


    return (
        <MaterialTable style={{ width: "65%", display: "inline-block" }}
            title="Add to group"
            columns={[
                { title: 'First Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Phone number', field: 'Phone number' },
                { title: 'Course', field: 'Course' },
                { title: 'Comment', field: 'comment' }
            ]}
            data={
                students.map(student => ({
                    name: student.name, surname: student.group
                }))
            }
            options={{
                selection: true,
                selectionProps: { color: 'primary' }
            }}
        />
    )
}
export default HandlingSelectionChanges;