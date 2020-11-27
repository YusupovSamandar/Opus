import React from "react";
import Params from "./../../component/teachers-search-params/params";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Table from "./../../component/group-detail/group-detail";

function TeacherFees() {
    return (
        <div style={{ width: "100%", margin: "100px 0 0 100px", color: "teal" }}>
            <h3>To'lovlar</h3>
            <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1300px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Params />
                    </Grid>
                    <Grid item xs={9}>
                        <Table />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default TeacherFees;