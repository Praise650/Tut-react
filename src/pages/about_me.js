import React from "react"
import MyButton from '../components/button';

function AboutMePage(){
    return (
        <div className='about'>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        <MyButton />
        </div>
    );
}

export default AboutMePage;