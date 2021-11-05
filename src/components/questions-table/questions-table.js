import React from "react";
import './questions-table.scss';
import Pagination from "../pagination";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useHistory} from "react-router-dom";
import {fetchDataPromise} from "../../actions/utills/fetch-data";

const BasicTable = ({rows, remove}) =>  {
    const history = useHistory();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="left" colSpan='4'>Created Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({ id, title, created_at: createdAt }) => {
                        return (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {title}
                                </TableCell  >
                                <TableCell align="left">{createdAt}</TableCell>
                                <TableCell align="right" style={{width: '125px', }} >
                                    <div onClick={() => history.push(`/questions/${id}`)}
                                         style={{textAlign: 'center' }}
                                         className='btn btn-green btn--text-white'>Read</div>
                                </TableCell>
                           {/*     <TableCell align="right" style={{width: '125px', }}>
                                    <div style={{textAlign: 'center' }} className='btn  btn-blue btn--text-white'>Edit</div>
                                </TableCell>*/}
                                <TableCell align="right" style={{width: '125px', }}>
                                    <div onClick={() => remove(id)}
                                        style={{backgroundColor: 'tomato', textAlign: 'center' }}
                                        className='btn btn--text-white'>Remove</div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const QuestionsTable = ({ questions, ...props  }) => {
    const remove = (id) => {
        fetchDataPromise({
            service: props.usofService.removePost,
            data: id,
        }).then(() => {
            props.setRefresh(id);
        });
    };

    return (
        <div className='my-questions'>
            <div className='my-questions-inner'>
                <BasicTable rows={questions} remove={remove} />
            </div>
            <Pagination {...props} />
        </div>
    );
};

export default QuestionsTable;
