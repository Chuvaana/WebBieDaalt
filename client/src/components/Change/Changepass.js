import ChangepassCard from '../Card/ChangepassCard/Password_change';
import './Login.css';
import side from '../../asset/img/sideimage.png';

const Changepass = () => {
    return (
        <div className="login__auth__container">
            <img src={side}></img>
            <div className="login__auth">
                <ChangepassCard />
            </div>
        </div>
    );
}

export default Changepass;