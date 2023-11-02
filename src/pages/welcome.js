import churchlogo from '../images/church_logo.svg';
import phone from '../images/phone.svg';
import MyButton from '../components/button';
import '../csss/welcome.css';
import glass from '../csss/transparent-glass.module.css';

function Welcome() {
    return (
        <div className='welcome'>
            <img src={churchlogo} className="rcflogo" alt="logo" />
            <div className={glass.wrapper}>
                <div className='home-container'>
                    <img src={phone} className="phone" alt="logo" />
                    <h3>Welcome to <br/>RCF FUTA Database</h3>
                    <MyButton btntitle={'Register'} route={'/input-phone'} />
                </div>
            </div>
        </div>
    );
}

export default Welcome;