import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon, Form, Input } from 'semantic-ui-react'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
//import { useForm } from "react-hook-form";


// import { useDispatch, useSelector } from 'react-redux';
// import { Link, us/eNavigate } from 'react-router-dom';

export default function Login() {

   const schema = yup.object({
      Username: yup.string().required(" שדה חובה"),
      Password: yup.string().matches(/^[0-9]{4}$/, 'סיסמא חייבת להכיל 4 ספרות').required(" שדה חובה"),
   }).required()
   // const dispatch = useDispatch();
   const navigate = useNavigate()
   //   // const user = useSelector(state => state?.user);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   })

   // const { register, handleSubmit, formState: { errors } } = useForm({
   //    resolver: yupResolver(schema)
   //   });

   const onSubmit = (data) => {
      console.log(data);

      axios.post("http://localhost:8080/api/user/login", {
         Username: data.Username,
         Password: data.Password
      })
         .then(x => {
            // dispatch({ type: "SET_USER", payload: x.data })
            console.log(x.data);
            navigate(`/homepage`)
         })
         .catch(err => {
            console.log(err);
            console.log(err.response.data);

         })
   }
   return <div style={{ wTzth: '60%', position: "absolute", left: "35%" }}>
      <h1>welcome!!</h1>
      <h2>לגישה לאתר עליך להתחבר לחשבון שלך</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("Username")} placeholder="userName" />
         <p>{errors.Username?.message}</p>

         <input {...register("Password")} placeholder="password" />
         <p>{errors.Password?.message}</p>
         {/* <Form onSubmit={handleSubmit(onSubmit)} >

         <input placeholder="שם משתמש"
            {...register("name", { required: true, maxLength: 2, minLength: 12 })} />
         <p>{errors.userName?.message}</p>

         <input placeholder="סיסמא" type="password"
            {...register("password", {minLength: 4, maxLength: 8  })} />
         <p>{errors.password?.message}</p> */}

         {/* //<button type="submit" >Login   </button> */}
         {/* <Link to={'/homepage'}> לעמוד הבית</Link> */}
         <br />
         <br />
         <label>עדיין אין לך חשבון?</label>
         <Link to={'/signup'}> צור עכשיו</Link>
         <br />
         <br />
         <Input type="submit" />
      </Form>
   </div>;
}


