import React, { Component } from 'react'  
import TableContainer from '@material-ui/core/TableContainer';    
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import jsPDF from 'jspdf';  
import Button from '@material-ui/core/Button';  
import html2canvas from 'html2canvas';  
import MaterialTable from "material-table";

export class MatTable extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
      ProductData: []  
    }  
  }  
  printDocument() {  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
  }  

  componentDidMount() {  
    axios.get('http://localhost:51760/Api/Emp/employee').then(response => {  
      console.log(response.data);  
      this.setState({  
        ProductData: response.data  
      });  
    });  
  }  
  render() {  
    console.log(this.state.ProductData);  
    return (  
      <div>  
        <TableContainer id="pdfdiv" className="txt" component={Paper}>  
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
          <Button onClick={this.printDocument} variant="contained" color="primary">  
            Pdf  
                                </Button>  
                                
        </TableContainer>  

      </div>  

    );  
  }  
}  

export default MatTable  