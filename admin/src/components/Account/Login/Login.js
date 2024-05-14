import LoginCard from '../../Card/LoginCard/LoginCard';
import './Login.css';
import side from '../../../asset/img/sideimage.png';

const Login = () => {
    return (
        <div className="login__auth__container">
            <img src={side}></img>
            <div className="login__auth">
                <LoginCard />
            </div>
        </div>
    );
}

export default Login;