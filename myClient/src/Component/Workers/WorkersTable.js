import * as React from 'react';
import { DataGrid, GridColDef, GridActionsCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { AddRoleToWorker, changeWorker, getWorkers, putStatusWorker, setToShow } from '../Services/WorkerService';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import * as XLSX from 'xlsx';
import { Button } from '@mui/material';
import { useEffect } from 'react';



const WorkersTable = () => {
  const columns = [
    { field: 'tz', headerName: 'Identity', width: 100 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'Delete', headerName: 'Delete', width: 90,
      disableClickEventBubbling: true, // Prevent row click on icon clicks
      renderCell: (params) => {
        const onDelete = () => {
          dispatch(putStatusWorker(params.row))
        };

        return (
          <DeleteIcon onClick={onDelete} />
        );
      },
    },
    {
      field: 'Edit', headerName: 'Edit', width: 90,
      disableClickEventBubbling: true, // Prevent row click on icon clicks
      renderCell: (params) => {
        const onEdit = () => {
          dispatch(changeWorker(params.row))
          navigate("/editWorker")
        };


        return (
          <EditIcon onClick={onEdit} />
        );
      },
    },
    {
      field: 'AddRole', headerName: 'Add Role', width: 90,
      disableClickEventBubbling: true, // Prevent row click on icon clicks
      renderCell: (params) => {

        const onAddRole = () => {
          dispatch(changeWorker(params.row))
          navigate("/addRoleToWorker", { state: { open: true } })

        };


        return (
          <LibraryAddIcon onClick={onAddRole} />
        );
      },
    },
    {
      field: 'ShowDetails',
      headerName: 'Show Details',
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onShowDetails = () => {
          dispatch(changeWorker(params.row));
          dispatch(setToShow(true))
          navigate("/workerDetails");
        };

        return (
          <RemoveRedEyeIcon onClick={onShowDetails} />
        );
      },
    }
  ];


  const exportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    // Convert the rows array into a worksheet
    const ws = XLSX.utils.json_to_sheet(rows);
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Workers");
    // Save the workbook as an Excel file
    XLSX.writeFile(wb, "workers.xlsx");
  };


  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getWorkers()); // Dispatch the getWorkers action when component mounts
  }, [dispatch]);
  const workers = useSelector(state => state.workers.workers);

  const rows = workers
    .map(worker => ({
      id: worker.id,
      tz: worker.tz,
      firstName: worker.firstName,
      lastName: worker.lastName,
      gender: worker.gender,
      startJob: worker.startJob,
      birthDate: worker.birthDate,
    }));

  return <>
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ marginBottom: '10px' }}>
        <Button onClick={exportToExcel}>Export to Excel</Button>
      </div>
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
  </>
};

export default WorkersTable;
