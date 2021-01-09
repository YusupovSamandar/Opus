import React from "react";
// Table package
import MaterialTable from 'material-table';


function BasicSearch(props) {

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