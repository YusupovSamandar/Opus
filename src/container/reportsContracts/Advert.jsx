import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./contracts.css"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Chart from "../../component/chart/chart";
import Table from "../../component/reportsContracts/table";

function Contracts() {
    return (
        <Container maxWidth="lg" style={{ padding: "50px", marginTop: "100px", backgroundColor: "white", maxWidth: "" }}>
            <div className='contracts'>
                <Grid container spacing={12}>
                    <Grid container item xs={6}>
                        <div className='select'>
                            <h1>Adverts</h1>

                        </div>
                        <Table />
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                        <Chart />
                    </Grid>
                </Grid>
            </div>

        </Container >

    )
}

export default Contracts
