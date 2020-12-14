import MaterialTable from 'material-table';
import React from 'react'

export default function Table() {
    return (
        <div className='table'>
            <MaterialTable
                title="Basic Search Preview"
                columns={[
                    { title: '#', field: 'id' },
                    { title: 'Oylar', field: 'oylar' },
                    { title: 'Kutuvchilar', field: 'kutuvchilar', type: 'numeric' },
                    { title: 'Tuzulgan shartnomalar', field: 'contracts', type: 'numeric' },
                    { title: 'Tugatilgan shartnomalar', field: 'kutuvchilar', type: 'numeric' },
                    { title: 'Jami shartnomalar', field: 'kutuvchilar', type: 'numeric' },


                ]}
                data={[
                    { id: '1', oylar: 'Yanvar', kutuvchilar: 0, birthCity: 63 },
                    { id: '2', oylar: 'Fevral', kutuvchilar: 0, birthCity: 34 },
                    { id: '1', oylar: 'Yanvar', kutuvchilar: 0, birthCity: 63 },
                    { id: '2', oylar: 'Fevral', kutuvchilar: 0, birthCity: 34 },
                    { id: '1', oylar: 'Yanvar', kutuvchilar: 0, birthCity: 63 },
                    { id: '2', oylar: 'Fevral', kutuvchilar: 0, birthCity: 34 },
                    { id: '1', oylar: 'Yanvar', kutuvchilar: 0, birthCity: 63 },
                    { id: '2', oylar: 'Fevral', kutuvchilar: 0, birthCity: 34 },
                    { id: '1', oylar: 'Yanvar', kutuvchilar: 0, birthCity: 63 },
                    { id: '2', oylar: 'Fevral', kutuvchilar: 0, birthCity: 34 },
                ]}
                options={{
                    sorting: true,
                    search: false
                }}
            />
        </div>
    )
}
