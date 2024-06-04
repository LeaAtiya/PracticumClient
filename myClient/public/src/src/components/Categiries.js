import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Recipe from "./Recipe"
import axios from 'axios'
import { useState } from "react";

export default function Categories() {
    const {categories,SetCategories} = useState([]);
    let index = 0;
   
    useEffect = (() => {
        axios.get(`http://localhost:8080/api/category`).then(
            res => { res.data.map(item => categories[index++] = item) }

        );
    }
        , [])
 console.log(categories);

    return (<>
        <ul>
            {/* {categories.map(item => <li>{item}</li>)}
             */}
            {categories?.map((item, index) => <li key={index}>{item}</li>)}

        </ul>

    </>);
    // return (
    //     <>
    //         {categories.map(function (data) {
    //             return (
    //                 <ul>
    //                     <li>{data.Name}</li>

    //                 </ul>
    //             )
    //         })}
    //     </>

    // )
}
