import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Icon, Form, Input, Message } from 'semantic-ui-react'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function SighUp() {

   const schema = yup.object({
      Username: yup.string().required(" שדה חובה"),
      Password: yup.string().matches(/^[0-9]{4}$/, 'סיסמא חייבת להכיל  4 ספרות').required(" שדה חובה"),
      Name: yup.string().required(" שדה חובה"),
      Phone: yup.string().matches(/^[0-9]{7,10}$/, 'טלפון חייב להכיל בין 7 ל-10 ספרות').required(" שדה חובה"),
      // Email: yup.string().email("כתובת המייל אינה תקינה").required(" שדה חובה"),
      Email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'יש להכניס כתובת מייל תקינה').required(" שדה חובה"),
      Tz: yup.string().matches(/^[0-9]{9}$/, 'תעודת זהות חייבת להכיל 9 ספרות בלבד').required(" שדה חובה"),
   }).required()
   //const dispatch = useDispatch();
   const navigate = useNavigate();
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

      axios.post("http://localhost:8080/api/user/sighin", {
         Username: data.Username,
         Password: data.Password,
         Name: data.Name,
         Phone: data.Phone,
         Email: data.Email,
         Tz: data.Tz
      })
         .then(x => {
            console.log(x.data)
          //  dispatch({ type: 'SET_USER', user: x.data })
            navigate("/homepage")
         })
         .catch(err => {
            console.log(err);
            console.log(err.response.data);
         })
   }
   return (
      <div style={{ wTzth: '60%', position: "absolute", left: "45%" }}>
         {/* <Message
            attached
            header='ברוכים הבאים לאתר מתכונים'
         /> */}
         <h1>welcome!!</h1>
         <h2>טופס הרשמה</h2>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Username")} placeholder="userName" />
            <p>{errors.Username?.message}</p>

            <input {...register("Password")} placeholder="password" />
            <p>{errors.Password?.message}</p>

            <input {...register("Name")} placeholder="name" />
            <p>{errors.Name?.message}</p>

            <input {...register("Phone")} placeholder="phone" />
            <p>{errors.Phone?.message}</p>

            <input {...register("Email")} placeholder="email" />
            <p>{errors.Email?.message}</p>

            <input {...register("Tz")} placeholder="Tzentity" />
            <p>{errors.Tz?.message}</p>



            <Input type="submit" />
         </Form>

      </div >

   );

}