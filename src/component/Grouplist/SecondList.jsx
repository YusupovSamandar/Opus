import React from "react";
import MaterialTable from 'material-table';


function BasicSearch() {

    return (
        <div className="hovered-styled-row">
            <MaterialTable className='styled'
                title=""
                columns={[
                    { title: 'Guruhlar', field: 'firstName' },
                ]}
                data={[
                    { name: '2', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: '3', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                options={{
                    pageSize: 10,
                    search: true
                }}
            />
        </div>
    )
}
export default BasicSearch;