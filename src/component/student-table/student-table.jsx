import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./student-table.css";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(id, year, payment, participments, payedPayment, Imtiyoz, Qoldiq, Info) {
    return { id, year, payment, participments, payedPayment, Imtiyoz, Qoldiq, Info };
}

const rows = [
    createData(1, 3, 200.000, 4, 100, "Alo", 10, "lorem")
];

const useStyles = makeStyles({
    table: {
        // minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow className="styled-table-header-row">
                        <StyledTableCell>Sr.No.</StyledTableCell>
                        <StyledTableCell align="center">Yil</StyledTableCell>
                        <StyledTableCell align="center">Oy</StyledTableCell>
                        <StyledTableCell align="center">Oylik To'lov</StyledTableCell>
                        <StyledTableCell align="center">Qanashdi</StyledTableCell>
                        <StyledTableCell align="center">To'langan Summa</StyledTableCell>
                        <StyledTableCell align="center">Imtiyoz</StyledTableCell>
                        <StyledTableCell align="center">Qoldiq</StyledTableCell>
                        <StyledTableCell align="center">Info</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.id}</StyledTableCell>
                            <StyledTableCell align="center">{row.year}</StyledTableCell>
                            <StyledTableCell align="center">{row.payment}</StyledTableCell>
                            <StyledTableCell align="center">{row.participments}</StyledTableCell>
                            <StyledTableCell align="center">{row.payedPayment}</StyledTableCell>
                            <StyledTableCell align="center">{row.Imtiyoz}</StyledTableCell>
                            <StyledTableCell align="center">{row.Qoldiq}</StyledTableCell>
                            <StyledTableCell align="center">{row.Info}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
