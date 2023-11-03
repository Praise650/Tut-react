import React, { useState } from 'react';


import '../csss/input-otp.css';

function OTPInputField({ code, setCode }) {

    return <div className='otp-field'>
        {code.map((digit, index) => (
            <input
                key={index}
                type="text"
                inputMode='numeric'
                value={digit}
                autoComplete='one-time-code'
                pattern='\d{1}'
                placeholder={[index]}
                maxLength={1}
                className='code'
                min={0}
                max={9}
                // onChange={(event) => handleInput(index, event)}
                // // onFocus={() => handleFocus(index)}
                // onFocus={(e => e.target.select())}
                // onBlur={() => handleDelete(index)}
                // autoFocus={index === focusedInputIndex}
                required
            />))}
    </div>
}

export default OTPInputField;