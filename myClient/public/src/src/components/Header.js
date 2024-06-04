import React from "react";
import { Input, Menu, Segment,MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Recipes from "./Recipes";
export default function Header({page}){
    // console.log(page);
      return (
        <div>
         <Link to={'/homepage'}> דף הבית | </Link>
         <Link to={'/recipes'}> מתכונים  | </Link>
         <Link to={'/login'}> החלף משתמש</Link>
       

        </div>
        //   <Menu pointing secondary>
        //       <Link to="/homepage">
        //           <MenuItem
        //               name='דף הבית'
        //               active={page === 'דף הבית'}
        //           />
        //       </Link>
             
        //       <Link to="/userrecipes">
        //           <MenuItem
        //               name='המתכונים שלי'
        //               active={page === 'המתכונים שלי'}
        //           />
        //       </Link>
        //       <Link to="/allRecipes">
        //           <MenuItem
        //               name='מתכונים'
        //               active={page === 'מתכונים'}
        //           />
        //       </Link>
        //       <Link to="/buy">
        //           <MenuItem
        //               name='רשימת קניות'
        //               active={page == 'רשימת קניות'}
        //           />
        //       </Link>
        //       <Link to="/addRecipe">
        //           <MenuItem
        //               name='הוספת מתכון'
        //               active={page === 'הוספת מתכון'}
        //           />
        //       </Link>
        //       <Link to="/addCategory">
        //           <MenuItem
        //               name='הוספת קטגוריה'
        //               active={page === 'הוספת קטגוריה'}
        //           />
        //       </Link>
        //       <Link to="/">
        //           <Menu.Menu position='left'>
        //               <MenuItem
        //                   name='החלף משתמש'
        //               />
        //           </Menu.Menu>
        //       </Link>
        //   </Menu>
  
      );
  }
  
 