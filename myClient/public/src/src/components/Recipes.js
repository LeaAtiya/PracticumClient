import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Recipe from "./Recipe"
import axios from 'axios'
import Categories from "./Categiries";
import Header from "./Header";

// export function Show(categoris) {
//     return <ul>
//     categoris.map(item =><li>item</li>)
//     </ul>
// }

export default function Recipes() {


    return <>
        <Header />
        <h1>כאן יוצגו המתכונים</h1>
        {<Categories />
        /* useEffect(() => {
        axios.get(`http://localhost:8080/api/category`)
            .then(c => {
                setCategoryList(c.data);
                console.log(JSON.stringify(categoryList));
            });
        axios.get(`http://localhost:8080/api/recipe`)
            .then(res => {
               // console.log(recipeId);
                setRecipe(re.data[recipeId]);
                console.log(recipe);
            })
    }, []) */}
    </>
}
