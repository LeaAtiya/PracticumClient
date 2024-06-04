import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from 'semantic-ui-react'
import { Button, FormHelperText, TextField, Select, FormControl, MenuItem, InputLabel, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { addWorker, editWorker } from "../Services/WorkerService";
import { getRoles } from "../Services/RoleService";
import AddRoleToWorker from "../Roles/AddRoleToWorker";
import RolesTable from "../Roles/RolesTable";

const schema = yup
    .object({
        tz: yup.string().matches(/^[0-9]{9}$/, 'ID must consist of 9 digits only').required("Field is required"),
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        startJob: yup.date().required("Start Job Date is required"),
        birthDate: yup.date().required("Birth Date is required"),
        gender: yup.number().required("Gender is required"),
    })
    .required();


const AddEditWorker = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getRoles()); // Dispatch the getWorkers action when component mounts
    }, [dispatch]);
    const worker = useSelector(state => state.workers.worker)
    const roles = useSelector(state => state.roles.roles)
    const [genderSelected, setGenderSelected] = useState(worker?.gender);

    useEffect(() => {
        setGenderSelected(worker?.gender);
    }, [worker]);

    const {
        register,
        handleSubmit,
        formState: { errors }, control, setValue
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ...worker,
        },
    })


    const onSubmit = (data) => {

        if (worker != null && worker != '') {
            dispatch(editWorker(data))
        }
        else {
            dispatch(addWorker(data))
            navigate("/homePage")
        }

    }
    return <>
        <h1>:Fill Details</h1>
        <div className="flex">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("tz")} label="Identity" />
                <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.tz?.message}
                </FormHelperText>

                <TextField {...register("firstName")} label="First Name" />
                <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.firstName?.message}
                </FormHelperText>

                <TextField {...register("lastName")} label="Last Name " />
                <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.lastName?.message}
                </FormHelperText>

                <FormControl>
                    <TextField
                        {...register('birthDate', { required: true })}
                        label="Birth Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={!!errors.birthDate}
                        sx={{ width: '220px' }}
                        value={worker ? new Date(worker.birthDate).toISOString().substring(0, 10) : null} // Set value based on worker data
                    />
                    <FormHelperText sx={{ color: 'error.main' }}>
                        {errors.birthDate?.message}
                    </FormHelperText>
                </FormControl>

                <br />

                <FormControl>
                    <TextField
                        {...register('startJob', { required: true })}
                        label="Start Job"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        error={!!errors.startJob}
                        sx={{ width: '220px' }}
                        value={worker ? new Date(worker.startJob).toISOString().substring(0, 10) : null} // Set value based on worker data
                    />

                    <FormHelperText sx={{ color: 'error.main' }}>
                        {errors.startJob?.message}
                    </FormHelperText>
                </FormControl>

                <Box sx={{ minWidth: 200 }}>
                    <FormControl sx={{ minWidth: 220 }}>
                        <InputLabel id="gender"> Gender</InputLabel>
                        <Select
                            labelId="gender"
                            id="gender"
                            label="Gender"
                            {...register("gender")}
                            value={genderSelected} // Use state variable to control the selected value
                            onChange={(e) => setGenderSelected(e.target.value)}
                        >
                            <MenuItem value={0}>Male</MenuItem>
                            <MenuItem value={1}>Female</MenuItem>

                        </Select>
                        <FormHelperText sx={{ color: 'error.main' }}>
                            {errors.gender?.message}
                        </FormHelperText>
                    </FormControl>
                </Box>

                <Button size="small" color="primary" type="submit">
                    SAVE
                </Button>
            </Form>
            {worker ?
                <>
                    <AddRoleToWorker />
                    <RolesTable />
                </>
                : null}
        </div>
        <Button size="small" color="primary" variant="contained" onClick={() => { navigate("/workers") }}>FINISH</Button>
    </>

}
export default AddEditWorker;