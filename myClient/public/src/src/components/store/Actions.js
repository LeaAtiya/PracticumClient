import axios from "axios";
import { useSelector } from "react-redux";

export const SET_USER = "SET_USER";
export const RELOAD = "RELOAD";
export const ADD_RECIPE = "ADD_RECIPE";
export const SET_RECIPES = "SET_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const ADD_CATEGORY = "ADD_CATEGORY";

// export const getRecipe=()=>{
//     return despatch=>{
//         dispatch({type:"RELOAD"})
//         axios.get("")
//     }
// }
//const re=useSelector(state=>state.user);

export const setUser = () => {
    return dispatch => {
        dispatch({ type: "RELOAD" })
        axios.post('http://localhost:8080/api/user/login').then((res) => {
            dispatch({ type: 'SET_USER', pylaod: res.data })
            navigate("/home");
        })
    }
}