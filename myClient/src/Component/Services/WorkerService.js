import axios from "axios";
import * as actionType from "../Store/Actions";
import Swal from 'sweetalert2';
import { getRolesOfWorker } from "./RoleService";



const apiUrl = `https://localhost:7211/Factory/Workers`;
export const getWorkers = () => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.get(`${apiUrl}`)
            .then(response => {
                dispatch({ type: actionType.SET_WORKERS, payload: response.data });
            })
            .catch(error => {
                console.log("error:", error);
            });
    };
};
export const addWorker = (worker) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.post(`${apiUrl}`, worker)
            .then(response => {
                dispatch({ type: actionType.ADD_WORKER, payload: response.data });
                Swal.fire({
                    title: "Succees",
                    text: "Worker added succeesfully!!!",
                    icon: "success"
                });
                dispatch(getWorkers())
            })
            .catch(error => {
                Swal.fire({
                    title: "oooooooooooops...",
                    text: "Something occuure!  \nPay attention! BirthDate must be before Start job date... Try again ",
                    icon: "error"
                });
            });
    };
};
export const editWorker = (worker) => {
    console.log("edit")
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.put(`${apiUrl}/${worker.id}`,worker)
            .then(response => {
                dispatch({ type: actionType.EDIT_WORKER, payload: response.data });
                Swal.fire({
                    title: "Succees",
                    text: "Worker updated succeesfully!!!",
                    icon: "success"
                });
             
            })
            .catch(error => {
                Swal.fire({
                    title: "oooooooooooops...",
                    text: "Something occuure! Check validation of dates... ",
                    icon: "error"
                });
            });
    };
};
export const putStatusWorker = (worker) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.put(`${apiUrl}/${worker.id}/status`, worker)
            .then(response => {
               dispatch(getWorkers())
            })
            .catch(error => {
                console.log("error:", error);
            });
    };
};
export const cleanWorker = () => {
    return dispatch => { // Return a function that takes dispatch as an argument
        dispatch({ type: actionType.SET_WORKER, payload: "" });

    };
};
export const changeWorker = (worker) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        dispatch({ type: actionType.SET_WORKER, payload: worker });
    
    };
};
export const addRoleTo = (data) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.post(`${apiUrl}/${data.workerId}`, data)
            .then(response => {
                dispatch(getRolesOfWorker(data.workerId))
                Swal.fire({
                    title: "Succees",
                    text: "Role added succeesfully!!!",
                    icon: "success"
                });
            })
            .catch(error => {
                Swal.fire({
                    title: "oooooooooooops...",
                    text: error.response.data,
                    icon: "error"
                });
            });
    };
};
export const deleterole = (worker,role) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.delete(`${apiUrl}/${worker.id}/${role.id}`)
            .then(response => {
                dispatch(getRolesOfWorker(worker.id))
            })
            .catch(error => {
                console.log("error:", error);
            });
    };
};
export const setToShow = (flag) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        dispatch({ type: actionType.SET_TO_SHOW, payload: flag });

    };
};