import Account from '../Account';
import './MyAccount.css';
import { Link } from 'react-router-dom'

const MyAccount = () => {
    return ( 
        <Account>
            <div className="account__details__container">
                <div className="account__details">
                    <div className="account__holder__name">Нэр</div>
                    <div className="account__holder__email">Утасны дугаар</div>
                    <div className="manage__account__action">
                        <Link to="/account/manage">Manage account</Link>   
                    </div>
                </div>
            </div>
        </Account>
     );
}
 
export default MyAccount;