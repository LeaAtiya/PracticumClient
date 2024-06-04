import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Paper, Button, Card, CardContent, Grid, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { setToShow } from '../Services/WorkerService';
import { useNavigate } from 'react-router-dom';

const WorkerDetails = () => {
    const worker = useSelector(state => state.workers.worker);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClose = () => {
        dispatch(setToShow(false))
        navigate("/workers")
    }
    const toShow = useSelector(state => state.workers.toShow)
    return <>
        <Dialog open={toShow} onClose={handleClose}>
            <DialogTitle>Worker Details</DialogTitle>
            <DialogContent>
                <Paper style={{ padding: 20 }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>First Name:</strong> {worker.firstName}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>Last Name:</strong> {worker.lastName}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>Gender:</strong> {worker.gender == 0 ? 'Male' : 'Female'}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>ID:</strong> {worker.id}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>TZ:</strong> {worker.tz}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>Birth Date:</strong> {new Date(worker.birthDate).toLocaleDateString()}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="body1"><strong>Start Job Date:</strong> {new Date(worker.startJob).toLocaleDateString()}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </>
};

export default WorkerDetails;
