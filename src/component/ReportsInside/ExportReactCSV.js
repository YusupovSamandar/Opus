import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';

export const ExportReactCSV = ({ csvData, fileName }) => {
    return (
        <Button style={{ marginRight: "10px", float: "right", height: "35px", padding: "10px" }} variant="contained" color="primary">
            <CSVLink data={csvData} filename={fileName}>Export to Excell</CSVLink>
        </Button>

        // <button>
        //     <CSVLink data={csvData} filename={fileName}>Export</CSVLink>
        // </button>
    )
}