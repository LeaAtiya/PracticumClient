import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'semantic-ui-react'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addRole } from '../Services/RoleService';
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select,Button,TextField } from '@mui/material';


const schema = yup
    .object({
        name: yup.string().required("Name is required"),
        isManagerial: yup.boolean().required("Choose managerial or not is required"),
    })
    .required();

const AddRole = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }, control
    } = useForm({
        resolver: yupResolver(schema),

    })
    const dispatch = useDispatch();
    const navigate = new useNavigate();

    const onSubmit = (data) => {
        dispatch(addRole(data))
    }
    return <>
        <Form onSubmit={handleSubmit(onSubmit)} className='spaceTop'>
            <TextField {...register("name")} label="Name" />
            <FormHelperText sx={{ color: 'error.main' }}>
                {errors.name?.message}
            </FormHelperText>

            <Box sx={{ minWidth: 200 }}>
                <FormControl sx={{ minWidth: 220 }}>
                    <InputLabel id="gender"> Managerial</InputLabel>
                    <Select
                        labelId="isManagerial"
                        id="isManagerial"
                        label="isManagerial"
                        {...register("isManagerial")}

                    >
                        <MenuItem value={true}>Managerial</MenuItem>
                        <MenuItem value={false}>NoN-Managerial</MenuItem>


                    </Select>
                    <FormHelperText sx={{ color: 'error.main' }}>
                        {errors.isManagerial?.message}
                    </FormHelperText>
                </FormControl>
            </Box>
            <Button size="small" color="primary" type="submit">
                SAVE
            </Button>

        </Form >
    </>
}
export default AddRole;