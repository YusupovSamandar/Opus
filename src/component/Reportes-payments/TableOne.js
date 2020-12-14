import React from 'react';
import MaterialTable from 'material-table';


function BasicExport() {
      
  return (  
      <MaterialTable
        columns={[
          { title: '1', field: 'name' },
          { title: 'NameSurname', field: 'surname' },
          { title: 'Phone Number', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: '2', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: '3', surname: 'Baran', birthYear: 2017, birthCity: 34 },
        ]}        
        options={{
          exportButton: true,
          date: false
        }}
      />
    )
  }

  export default BasicExport 
  