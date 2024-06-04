import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { getRolesOfWorker } from '../Services/RoleService';
import { useEffect } from 'react';
import { deleterole } from '../Services/WorkerService';


const RolesTable = () => {
    const columns = [
        { field: 'id', headerName: 'Identity', width: 100 },
        { field: 'name', headerName: 'Name', width: 100 },
        { field: 'isManagerial', headerName: 'Is Managerial ', width: 120 },
        {
            field: 'Delete', headerName: 'Delete', width: 70,
            disableClickEventBubbling: true, // Prevent row click on icon clicks
            renderCell: (params) => {
                const onDelete = () => {
                    dispatch(deleterole(worker,params.row))
                    console.log('Delete roleToworker:', params.row);
                };

                return (
                    <DeleteIcon onClick={onDelete} />
                );
            },
        },
    ];

    const dispatch = useDispatch()

    const worker = useSelector(state => state.workers.worker);

    useEffect(() => {
        dispatch(getRolesOfWorker(worker?.id)); 
    }, [dispatch])
    const rolesToWorker = useSelector(state => state.roles.currentRoles);

    const rows = rolesToWorker

    return (
        <div style={{ height: 400, width: '50%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default RolesTable;
