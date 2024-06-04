import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getRoles } from '../Services/RoleService';
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select,TextField,Button } from '@mui/material';
import { addRoleTo } from '../Services/WorkerService';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup
    .object({
        roleId: yup.string().required("Role is required"),
        startRole: yup.date().required("Start Role date is required"),
    })
    .required();
const AddRoleToWorker = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }, control
    } = useForm({
        resolver: yupResolver(schema),
       
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getRoles()); 
    }, [dispatch]);

    const worker = useSelector(state => state.workers.worker)
    const roles = useSelector(state => state.roles.roles)
    const onSubmit = (data) => {
        data.workerId = worker.id
        dispatch(addRoleTo(data))
    }
    return <>

        <Form onSubmit={handleSubmit(onSubmit)} className='spaceTop'>
            <Box sx={{ minWidth: 200 }}>
                <FormControl sx={{ minWidth: 220 }}>
                    <InputLabel id="role">Choose Role</InputLabel>
                    <Select
                        labelId="role"
                        id="role"
                        label="Role Name"
                        {...register(`roleId`)}
                    >
                        {roles.map((role) => (
                            <MenuItem key={role.id} value={role.id}>
                                {role.name} - {role.isManagerial ? 'Managerial' : 'Non-Managerial'}
                            </MenuItem>
                        ))}

                    </Select>
                    <FormHelperText sx={{ color: 'error.main' }}>
                        {errors.roleId?.message}
                    </FormHelperText>

                </FormControl>
            </Box>
            <br />

            <FormControl>
                <TextField
                    {...register(`startRole`)}
                    label="Start Role"
                    type="date"
                    InputProps={{
                        inputFormat: 'YYYY-MM-DD',
                    }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: '100%' }}
                />
                <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.startRole?.message}
                </FormHelperText>
            </FormControl>
            <br />

            <Button size="small" color="primary" type="submit">
                ADD
            </Button>

        </Form>
    </>
}
export default AddRoleToWorker;