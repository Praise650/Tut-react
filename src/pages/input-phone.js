import React, { useState } from 'react'
import NavIconButton from '../components/nav-icon-button';
import ArrowRight from "../images/next.svg";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

import '../csss/input-phone.css';
import glass from '../csss/transparent-glass.module.css';

function InputPhoneNumber() {
    const [value, setValue] = useState();
    return (
        <div className='input-phone'>
            <div className={glass.wrapper}>
                <div className='input-container'>
                    <h1>Welcome to <br />RCF FUTA Database</h1>
                    <span className='input-instruction'>Input your number and get verified</span>
                    <div className='phone-input-deco-wrapper'>
                        <PhoneInput
                            // className='input-phone-number'
                            defaultCountry="NG"
                            // inputComponent={()=><span>081 XXX XXXX</span>}
                            // international= {true}
                            // initialValueFormat='0814 XXX XXX'
                            internationalIcon={true}
                            value={value}
                            onChange={setValue} />
                    </div>
                    <span className='input-instruction'>We will send you a verification code to your phone</span>
                    <div className='nav-btn'>
                        <NavIconButton icon={ArrowRight} route={'/input-otp'} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InputPhoneNumber;