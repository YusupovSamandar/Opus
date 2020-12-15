import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./contracts.css"
import Chart from "../../component/chart/chart";
import Table from "../../component/reportsContracts/table2";
import Links from "../../component/links/Link";

function Adverts() {
    return (
       <div style={{width:'100%'}}>
     <Links link1 = '/' link2 = '/reports'
      text1 = 'Home' text2 = 'Reports ' text3 = 'Reklama '
        />

        <Container maxWidth="lg" style={{ padding: "50px", marginTop: "100px", backgroundColor: "white", maxWidth: "" }}>
            <div className='contracts'>
                <Grid container spacing={12}>
                    <Grid container item xs={6}>
                        <div className='select'>
                            <h1>Adverts</h1>
                        </div>
                        <select className="years" id="cars">
                            <option >01.12.12</option>
                            <option>01.12.12</option>
                        </select>

                        <select className="years" id="cars">
                            <option >01.12.12</option>
                            <option >01.12.12</option>
                        </select>
                        <Table />
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                        <Chart />
                    </Grid>
                </Grid>
            </div>

        </Container >
       </div>
    )
}

export default Adverts
