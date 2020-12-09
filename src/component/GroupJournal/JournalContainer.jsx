import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import SaveIcon from '@material-ui/icons/Save';


export class MatTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ProductData: []
    }
  }
  // printDocument() {
  //   const input = document.getElementById('pdfdiv');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       var imgWidth = 200;
  //       var imgHeight = canvas.height * imgWidth / canvas.width;
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF('p', 'mm', 'a4')
  //       var position = 0;
  //       pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
  //       pdf.save("download.pdf");
  //     });
  // }

  componentDidMount() {
    this.fethData();
  }

  fethData = async () => {
    const { data } = await axios.get('http://localhost:3000/Student-details');
    this.setState({
      ProductData: data
    });
  }

  render() {
    return (
      // <div>  
      <div className="Excel">

        <table id="table-to-xls">
          <TableContainer id="pdfdiv" className="txt" component={Paper} style={{ width: '960px' }}>
            <MaterialTable
              title="Groups"
              columns={[
                { title: 'Name', field: 'First name' },
                { title: 'Surname', field: 'Last name' },
                { title: 'Birth Year', field: 'Date of birth' },
                {
                  title: 'Phone number',
                  field: 'phoneNumber',
                },
                { title: 'Address', field: 'address' },
              ]}
              data={this.state.ProductData

                //   [
                //   { name: 'Samandar', surname: 'Yusupov', birthYear: 2004, phoneNumber: +998999999999, address: 'Bozorboshi 4' },
                //   { name: 'Abdushukur', surname: 'Urinboyev', birthYear: 1990, phoneNumber: +998997777777, address: 'Bozorboshi 5' },
                // ]
              }
              options={{
                rowStyle: {
                  backgroundColor: '#EEE',
                }
              }}
            />
            {/* <Button onClick={this.printDocument} variant="contained" color="primary" >
              Pdf
                                  </Button> */}

            <Button style={{ marginRight: "10px", float: "left", height: "35px", padding: "10px" }} variant="contained" color="primary">
              <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Excel"
              />
            </Button>
            {/* <Button style={{ marginRight: "10px", float: "left", height: "35px", padding: "10px" }}
              variant="contained"
              color="primary"
              size="small"
              float="right"
              startIcon={<SaveIcon />}

            >
              Save
          </Button>
            <Button style={{ marginRight: "10px", float: "left", height: "35px", padding: "10px" }}
              variant="contained"
              color="primary"
              size="small"
              float="right"
              onClick={() => window.print()}
            >
              Print
          </Button> */}

          </TableContainer>
        </table>


      </div>

    );
  }
}

export default MatTable