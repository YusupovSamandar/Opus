import React from "react";
// Table package
import MaterialTable from 'material-table';


function BasicSearch() {

    return (
        <div className="hovered-styled-row">
            <MaterialTable className='styled'
                title="‍"
                columns={[
                    { title: 'Bosqichlar', field: 'firstName' },
                ]}
                data={[
                    { name: '1-bosqich' },
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