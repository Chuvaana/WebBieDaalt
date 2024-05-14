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
import { useNavigate } from 'react-router-dom';
import ProductCard from "./OrderProductCard";


import './orderlist.css';

function createData(no, code, date, status) {
    const formattedDate = new Date(date);
    const formattedDateString = `${formattedDate.getFullYear()}-${(formattedDate.getMonth() + 1).toString().padStart(2, '0')}-${formattedDate.getDate().toString().padStart(2, '0')} ${formattedDate.getHours().toString().padStart(2, '0')}:${formattedDate.getMinutes().toString().padStart(2, '0')}`;

    return {
        no,
        code,
        date: formattedDateString,
        status,
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
        id: 'code',
        numeric: false,
        disablePadding: true,
        label: 'Код',
    },
    {
        id: 'date',
        numeric: true,
        disablePadding: false,
        label: 'Хугацаа',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'Төлөв',
    }
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
                        padding="normal" // Change padding to "normal" for left padding
                        sx={{ fontWeight: 'bold' }} // Make the table header bold
                        key={headCell.id}
                        align='center'
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

export default function OrderList1() {
    const [ringItems, setRingItems] = useState([]);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('no');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/order/getOrder")
            .then(res => {
                setRingItems(res.data);
            })
            .catch(err => console.error("Error fetching data:", err));

        const user = localStorage.getItem('user');
        if (!user) navigate("/login");
    }, [navigate]);

    const rows = ringItems.map((item, index) =>
        createData(index + 1, item._id.substring(20, 24), item.createdAt, item.delivery_status)
    );
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

    const handleClick = (event, row) => {
        const selectedItem = ringItems.find(item => item._id.substring(20, 24) === row.code);
        setSelectedItem(selectedItem);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Хүргэгдсэн':
                return '#64ED61';
            case 'Хүргэлтэнд гарсан':
                return '#FECE53';
            case 'Баталгаажсан':
                return '#0095E9';
            default:
                return 'black'; // Default color if status doesn't match any condition
        }
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className='orderlist'>
            <div className='orderlist_slide'>
                <div className="header_medeell">
                    <h1 className="baraa_garchig">Захиалгын жагсаалт</h1>

                </div>
                <div className='orderlist_slide_body'>
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

                                                return (
                                                    <TableRow

                                                        hover
                                                        onClick={(event) => handleClick(event, row)}
                                                        tabIndex={-1}
                                                        padding="normal"
                                                        sx={{ paddingLeft: '16px' }}
                                                        key={row.no}
                                                    >
                                                        <TableCell align='center' component="th" id={labelId} scope="row" padding="none">
                                                            {row.no}
                                                        </TableCell>
                                                        <TableCell align="center">{row.code}</TableCell>
                                                        <TableCell align="center">{row.date}</TableCell>
                                                        <TableCell align="center" style={{ backgroundColor: getStatusColor(row.status) }}>
                                                            {row.status}
                                                        </TableCell>

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
                </div>
            </div>
            <div className="order_data">
                {selectedItem ? (
                    <ProductCard item={selectedItem} />
                ) : (
                    <p>Захиалгын дэлгэрэнгүй хараахан сонгогдоогүй байна.</p>
                )}
            </div>
        </div>
    );
}
