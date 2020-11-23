import React from "react";
import ReactToPrint from "react-to-print";
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';  

class ComponentToPrint extends React.Component {
  render() {
    return (
    <MaterialTable
      title="Groups"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Phone number',
          field: 'phoneNumber',
        },
        { title: 'Address', field: 'address'},
      ]}
      data={[
        { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4'},
        { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990,  phoneNumber: +998997777777, address: 'Bozorboshi 5'},
      ]}
      options={{
        rowStyle: {
          backgroundColor: '#EEE',
        }
      }}
    />
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <Button variant="contained" color="primary">Print</Button>}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export default Example;
