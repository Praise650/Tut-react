import React, { useState } from 'react'
import MyButton from '../components/button';
import OTPInputField from '../components/otp-input-field';
import "react-phone-number-input/style.css";

import '../csss/input-phone.css';
import glass from '../csss/transparent-glass.module.css';

export default function InputOtp() {
    const [value, setValue] = useState();
    let phoneNumber = '+234 909 4610 006'
    return <>
        <div className='input-phone'>
            <div className={glass.wrapper}>
                <div className='input-container'>
                    <h1>Enter verification code</h1>
                    <span className='input-instruction'>Please type the verification code sent <br /> to <span>{phoneNumber}</span></span>
                    <OTPInputField />
                    {/* <div className='otp-field'>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required />
                        <input type='number' class='code' placeholder="0" min={0} max={9} required />
                        <input type='number' class='code' placeholder="0" min={0} max={9} required />
                        <input type='number' class='code' placeholder="0" min={0} max={9} required />
                        <input type='number' class='code' placeholder="0" min={0} max={9} required />
                        <input type='number' class='code' placeholder="0" min={0} max={9} required />
                    </div> */}
                    <div className='resend-code'>
                        <button>Resend code</button>
                    </div>
                    <MyButton btntitle={'Verify'} />
                </div>
            </div>
        </div>
    </>
}