import React from "react";
import MaterialTable from "material-table";
import './add.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function HandlingSelectionChanges() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Student-details')
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <MaterialTable style={{ width: "65%", display: "inline-block" }}
            title="Add to group"
            columns={[
                { title: 'First Name', field: 'First name' },
                { title: 'Surname', field: 'Last name' },
                { title: 'Phone number', field: 'Phone number' },
                { title: 'Course', field: 'Course' },
                { title: 'Comment', field: 'comment' }
            ]}
            data={
                post
            }
            options={{
                selection: true,
                selectionProps: { color: 'primary' }
            }}
        />
    )
}
export default HandlingSelectionChanges;