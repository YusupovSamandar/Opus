import MaterialTable from 'material-table';
import React from 'react'

export default function Table() {
    return (
        <div className='table'>
            <MaterialTable
                title="Adverts"
                columns={[
                    { title: '#', field: 'id' },
                    { title: 'Nomi', field: 'nomi' },
                    { title: 'Soni', field: 'soni' },
                ]}
                data={[
                ]}
                options={{
                    sorting: true,
                    search: false,
                    exportButton: true

                }}
            />
        </div>
    )
}
