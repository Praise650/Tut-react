import '../scripts/script'

import '../csss/input-otp.css';

function OTPInputField(){
    return <div className='otp-field'>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required/>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required/>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required/>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required/>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required/>
                        <input type='number' class='code' placeholder="0" min={0} max={9} required/>
    </div>
}

export default OTPInputField;