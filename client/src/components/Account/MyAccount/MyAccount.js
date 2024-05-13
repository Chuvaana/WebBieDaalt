import Account from '../Account';
import './MyAccount.css';
import { Link } from 'react-router-dom'
import { Button, Form, Input, Select, Space, InputNumber, Radio, ConfigProvider } from 'antd';
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
    const userString = localStorage.getItem('user');
    let userObject;
    try {
        userObject = JSON.parse(userString);
    } catch (error) {
        console.error('Error parsing user data:', error);
        userObject = {}; // Set an empty object as default
    }
    const navigate = useNavigate();
    const handleViewAllItems = async () => {
        navigate('/account/manage');

    };
    const handleChangePass = async () => {
        navigate('/account/change_pass');

    };

    // Access user properties safely
    const userName = userObject && userObject.name ? userObject.name : '';
    const userPhoneNumber = userObject && userObject.phoneNumber ? userObject.phoneNumber : '';

    return (
        <Account>
            <div className="account__details__container">
                <div className="account__details">
                    <div className="account__holder__name">
                        <div className='account_user_name'>Нэр</div>
                        <div className='account_user'>{userName}</div>
                    </div>
                    <div className="account__holder__name">
                        <div className='account_user_name'>Утасны дугаар</div>
                        <div className='account_user'>{userPhoneNumber}</div>
                    </div>
                </div>
                <div className='account_buttons'>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorPrimary: '#DB4444',
                                    algorithm: true, // Enable algorithm
                                }
                            },
                        }}
                    >
                        <div className="manage__account__action">
                            <Button style={{ width:'100%', height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleViewAllItems}>Бүртгэлээ засварлах</Button>

                        </div>
                        <div className="manage__account__action">
                            {/* <Link to="/account/change_pass">Нууц үгээ солих</Link> */}
                            <Button style={{width:'100%', height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleChangePass}>Нууц үгээ солих</Button>
                        </div>
                    </ConfigProvider>
                </div>
            </div>
        </Account>
    );
}

export default MyAccount;