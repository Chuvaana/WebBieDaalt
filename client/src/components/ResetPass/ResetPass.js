import PassReset from '../Card/PassresetCard/Password_reset';
import './Login.css';
import side from '../../asset/img/sideimage.png';

const Resetpass = () => {
    return (
        <div className="login__auth__container">
            <img src={side}></img>
            <div className="login__auth">
                <PassReset />
            </div>
        </div>
    );
}

export default Resetpass;