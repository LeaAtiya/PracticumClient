import axios from "axios";
import * as actionType from "../Store/Actions";
import Swal from 'sweetalert2';

const apiUrl = `https://localhost:7211/Factory/Roles`;
export const getRoles = () => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.get(`${apiUrl}`)
            .then(response => {
                dispatch({ type: actionType.SET_ROLES, payload: response.data });
            })
            .catch(error => {
                console.log("error:", error);
            });
    };
};
export const getRolesOfWorker = (id) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.get(`${apiUrl}/${id}`)
            .then(response => {
                dispatch({ type: actionType.SET_CURRENT_ROLES, payload: response.data });
            })
            .catch(error => {
                console.log("error:", error);
            });
    };
};
export const addRole = (role) => {
    return dispatch => { // Return a function that takes dispatch as an argument
        axios.post(`${apiUrl}`,role)
            .then(response => {
                dispatch({ type: actionType.ADD_ROLE, payload: response.data });
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