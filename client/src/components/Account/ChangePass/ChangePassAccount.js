import Account from '../Account';
// import './ManageAccount.css'

import { Button, Form, Input, message, Alert, ConfigProvider } from 'antd';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const ChangePassAccount = () => {

    const [form] = Form.useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        message.success('Амжилттай солигдлоо');
    };



    const handleSaveClick = () => {
        form.validateFields().then(values => {
            const { oldpassword, newpassword } = values;
            axios.post('http://localhost:5000/api/user/updatePass', { phoneNumber, oldpassword, newpassword })
                .then(result => {
                    if (result.data === 'Password changed successfully') {
                        success();
                        navigate('/account/me');
                    } else {
                        message.error(result.data);
                        // setError(result.data);
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError("An error occurred. Please try again later.");
                });
        }).catch(errorInfo => {
            console.log('Validation failed:', errorInfo);
        });
    };


    const userString = localStorage.getItem('user');
    let userObject;
    try {
        userObject = JSON.parse(userString);
    } catch (error) {
        console.error('Error parsing user data:', error);
        userObject = {}; // Set an empty object as default
    }

    const phoneNumber = userObject && userObject.phoneNumber ? userObject.phoneNumber : '';

    return (
        <Account>
            <div className="manage__account__container">
                <div className="edit__account__container">
                    <div className="edit__account">
                        <div className="edit__account__header">Нууц үгээ солих</div>
                        <div className="edit__account__form__container">
                            <div className="edit__account__form">
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Input: {
                                                colorPrimary: '#f5f5f5',
                                                algorithm: true, // Enable algorithm
                                            },
                                            InputNumber: {
                                                colorPrimary: '#f5f5f5',
                                                algorithm: true, // Enable algorithm
                                            }
                                        },
                                    }}
                                >
                                    <Form
                                        form={form}
                                        onFinish={handleSaveClick}
                                        style={{ maxWidth: 600 }}
                                        layout="vertical"
                                    >
                                        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '1rem' }} />}
                                        <Form.Item
                                            label="Хуучин нууц үг"
                                            name="oldpassword"
                                            // onChange={(e) => setOldpass(e.target.value)}
                                            rules={[{ required: true, message: 'Хуучин нууц үгээ оруулна уу!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item
                                            label="Шинэ нууц үг"
                                            name="newpassword"
                                            // onChange={(e) => setNewpass(e.target.value)}
                                            rules={[{ required: true, message: 'Шинэ нууц үгээ оруулна уу!' }]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <Form.Item
                                            label="Нууц үгээ давтна уу"
                                            name="confirmPassword"
                                            dependencies={['newpassword']}
                                            rules={[
                                                { required: true, message: 'Нууц үгээ давтна уу!' },
                                                ({ getFieldValue }) => ({
                                                    validator(_, value) {
                                                        if (!value || getFieldValue('newpassword') === value) {
                                                            return Promise.resolve();
                                                        }
                                                        return Promise.reject(new Error('Нууц үгээ зөв давтана уу!'));
                                                    },
                                                }),
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <div className="save__changes__button__container">

                                            <Button onClick={() => navigate('/account/me')} style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }}>
                                                Цуцлах
                                            </Button>
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
                                                <Button style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }} type='primary' onClick={handleSaveClick}>Хадгалах</Button>
                                            </ConfigProvider>

                                        </div>
                                    </Form>
                                </ConfigProvider>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="separator__line"></div>
                <div className="delete_account__container">
                    <div className="delete__account">
                        <div className="delete__account__header">
                            Delete account
                        </div>
                        <div className="delete__account__prompt">Do you want to cancel subscription?</div>
                        <div className="delete__account__button__container">
                            <button className="delete__account__button" >Delete Account</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </Account>
    );
}

export default ChangePassAccount;