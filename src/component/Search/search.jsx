import React from "react";
import "./search.css";
// Table package
import MaterialTable from 'material-table';

function BasicSearch() {
    return (
        <MaterialTable
            title="Students"
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' }
            ]}
            data={[
                { id: 1, name: 'Mehmet', surname: 'Baran' },
                { id: 2, name: 'Zerya Betül', surname: 'Baran' },
                { id: 3, name: 'Mehmet', surname: 'Baran' },
                { id: 4, name: 'Zerya Betül', surname: 'Baran' },
                { id: 5, name: 'Mehmet', surname: 'Baran' },
                { id: 6, name: 'Zerya Betül', surname: 'Baran' },
                { id: 7, name: 'Mehmet', surname: 'Baran' }
            ]}
            options={{
                search: true
            }}
        />
    )
}
export default BasicSearch;