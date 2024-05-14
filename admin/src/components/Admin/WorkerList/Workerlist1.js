import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './worklist.css';

function createData(no, lastname, firstname, rd, phone, mail, address, sincedate, status) {
    return {
        no,
        lastname,
        firstname,
        rd,
        phone,
        mail,
        address,
        sincedate,
        status
    };
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'no',
        numeric: false,
        disablePadding: true,
        label: '№',
    },
    {
        id: 'lastname',
        numeric: false,
        disablePadding: true,
        label: 'Овог',
    },
    {
        id: 'firstname',
        numeric: false,
        disablePadding: true,
        label: 'Нэр',
    },
    {
        id: 'rd',
        numeric: true,
        disablePadding: false,
        label: 'РД',
    },
    {
        id: 'phone',
        numeric: true,
        disablePadding: false,
        label: 'Утас',
    },
    {
        id: 'mail',
        numeric: true,
        disablePadding: false,
        label: 'И-мэйл',
    },
    {
        id: 'address',
        numeric: true,
        disablePadding: false,
        label: 'Гэрийн хаяг',
    },
    {
        id: 'sincedate',
        numeric: true,
        disablePadding: false,
        label: 'Ажилд орсон огноо',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Төлөв',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function Workerlist1() {
    const [workers, setWorkers] = useState([]);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('no');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    useEffect(() => {
        axios.get("http://localhost:5000/api/worker")
            .then(res => {
                console.log(res.data);
                setWorkers(res.data);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    const rows = workers.map((item, index) => createData(index + 1, item.deliver_ovog, item.deliver_name, item.deliver_rd, item.deliver_phone, item.deliver_email, item.deliver_address, item.deliver_date, item.deliver_type));

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.no);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className='workerList_frame'>

            <h2>Хүргэлтийн ажилтан</h2>

            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        const statusColor = row.status === 'Идэвхтэй' ? 'green' : row.status === 'Идэвхгүй' ? 'red' : 'inherit';

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.no)}
                                                tabIndex={-1}
                                                key={row.no}

                                            >
                                                <TableCell component="th" id={labelId} scope="row" padding="none">
                                                    {row.no}
                                                </TableCell>
                                                <TableCell align="left">{row.lastname}</TableCell>
                                                <TableCell align="left">{row.firstname}</TableCell>
                                                <TableCell align="right">{row.rd}</TableCell>
                                                <TableCell align="right">{row.phone}</TableCell>
                                                <TableCell align="right">{row.mail}</TableCell>
                                                <TableCell align="right">{row.address}</TableCell>
                                                <TableCell align="right">{row.sincedate}</TableCell>
                                                <TableCell align="right" style={{ backgroundColor: statusColor }}>{row.status}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={10} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>

            </Box>
            <div className="footer_button">
                <Link to="/addworker">
                    <button className="worker_add_btn">Ажилтан нэмэх</button>
                </Link>
            </div>
        </div>
    );
}
