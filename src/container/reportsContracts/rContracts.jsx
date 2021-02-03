import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./contracts.css"
import Links from '../../component/links/Link'
import Button from '@material-ui/core/Button';
import Chart from "../../component/chart/chart";
import Table from "../../component/reportsContracts/table";

function Contracts() {
    return (
        <div style={{ width: '100%' }}>
            <Links link1='/' link2='/reports'
                text1='Home' text2='Reports ' text3='Contracts '
            />
            <Container maxWidth="lg" style={{ padding: "50px", marginTop: "100px", backgroundColor: "white", color: "black", maxWidth: "" }}>

                <div className='contracts'>
                    <Grid container spacing={12}>
                        <Grid container item xs={6}>
                            <div className='select'>
                                <select className="years" id="cars">
                                    <option >2020</option>
                                    <option >2021</option>
                                    <option >2022</option>
                                    <option >2023</option>
                                </select>
                                <Button className='filter' variant="contained" color="primary" style={{ marginLeft: "20px" }} >
                                    Saralash
                          </Button>
                            </div>
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

export default Contracts;
