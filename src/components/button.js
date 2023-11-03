import { useNavigate } from "react-router-dom";
import glass from '../csss/transparent-glass.module.css'; 

function MyButton({btntitle,route, ...rest}) {

    let navigate = useNavigate();
    let title = 'Submit';
    const routeChange = () => {
        navigate(route??'/about');
    }
    return (
        <div>
            <button className={glass.button} onClick={routeChange}>
            {btntitle??title}
            </button>
        </div>
    );
}

export default MyButton;