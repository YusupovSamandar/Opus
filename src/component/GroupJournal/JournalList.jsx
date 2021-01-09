import React, { useContext } from "react";
// Table package
import MaterialTable from 'material-table';


function BasicSearch(props) {

    return (
        <div className="hovered-styled-row">
            <MaterialTable className='styled'
                title="‍"
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
                // actions={[
                //     {
                //         icon: "add",
                //         tooltip: 'Save User',
                //     }
                // ]}
            />
        </div>
    )
}
export default BasicSearch;