import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import "./group-detail.css";

const columns = [
    { id: 'name', label: 'ID', minWidth: 10 },
    { id: 'code', label: 'FIO', minWidth: 170 },
    {
        id: 'population',
        label: "To'lov",
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Telefon',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    }
];

function createData(name, code, population, size) {
    return { name, code, population, size };
}

const rows = [
    createData(1, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(2, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(3, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(4, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(5, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(6, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(7, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(8, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(9, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(10, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(11, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(12, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(13, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(14, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028"),
    createData(15, "Yusupov Samandar Yunusali ug'li", 140000, "+99899938028")
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer id="own-scroll-x" className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, backgroundColor: "#009D77" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
