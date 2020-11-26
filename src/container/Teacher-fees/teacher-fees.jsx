import React from "react";
import Params from "./../../component/teachers-search-params/params";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function TeacherFees() {
    return (
        <Container maxWidth="lg" style={{ marginTop: "100px", maxWidth: "1300px" }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Params />
                </Grid>
            </Grid>
        </Container>
    )
}

export default TeacherFees;