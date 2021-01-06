import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./student-table.css";
import { TempStudentContext } from "./../Student-datail-context";
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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



const useStyles = makeStyles({
    table: {
        // minWidth: 700,
    },
});

export default function CustomizedTables() {
    function createData(guruh, kurs, fanOqitivchisi) {
        return { guruh, kurs, fanOqitivchisi };
    }
    const [tempStudent] = useContext(TempStudentContext)
    const rows = [
        createData(113, tempStudent.course, tempStudent.group)
    ];
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow className="styled-table-header-row">
                        <StyledTableCell align="center" style={{ padding: "15px 0" }}>Action</StyledTableCell>
                        <StyledTableCell align="center">Guruh</StyledTableCell>
                        <StyledTableCell align="center">Kurs</StyledTableCell>
                        <StyledTableCell align="center">Fan Oqitivchisi</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow style={{ backgroundColor: 'white' }} key={row.name}>
                            <StyledTableCell style={{ padding: "0" }} align="center">
                                <Button style={{ borderRadius: "100%", padding: "6px 14px", minWidth: "unset", height: "50px" }}>
                                    <ExpandMoreIcon />
                                </Button>
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.guruh}</StyledTableCell>
                            <StyledTableCell align="center">{row.kurs}</StyledTableCell>
                            <StyledTableCell align="center">{row.fanOqitivchisi}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
