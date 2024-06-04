import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react';
import Header from './Header';
import img1 from '../images/img1.jpg';

export default function Entry() {

    return (
        <div className=' d' >
           <div className='background'>
            <h1>welcome!</h1>
            {/* <div >//style={{   background-image: url('../images/img1.jpg') }}> */}
            <Link to="login">
                <Button > התחברות </Button>
            </Link>
            <Link to="/signup">
                <Button >הרשמה </Button>
            </Link>
            </div>
        </div >
    );
}