import { useState } from "react";
import { Form, Input, InputNumber, Button, ConfigProvider, message } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Account from '../Account';
import './ManageAccount.css';

const ManageAccount = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [form] = Form.useForm();
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSaveClick = async () => {
        try {
            await form.validateFields();
            console.log(name, phoneNumber);
            const result = await axios.patch('http://localhost:5000/api/user/updateUser', { name, phoneNumber });
            console.log(result.data);
            if (result.data === 'User data updated successfully') {
                message.success("Амжилттай хадгалагдлаа");
                navigate('/account/me');
            } else {
                alert(result.data);
            }
        } catch (errorInfo) {
            console.log('Validation failed:', errorInfo);
        }
    };

    return (
        <Account>
            <div className="manage__account__container">
                <div className="edit__account__container">
                    <div className="edit__account">
                        <div className="edit__account__header">Бүртгэлээ засварлах</div>
                        <div className="edit__account__form__container">
                            <div className="edit__account__form">
                                <ConfigProvider>
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        style={{ maxWidth: 600 }}
                                        onValuesChange={() => {
                                            form.validateFields()
                                                .then(() => { })
                                                .catch(() => { });
                                        }}
                                    >
                                        <div className="fname__input__container edit__input__container">
                                            <Form.Item
                                                name="name"
                                                label="Нэр"
                                                onChange={(e) => setName(e.target.value)}
                                                rules={[{ required: true, message: 'Нэрээ оруулна уу!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </div>
                                        <div className="lname__input__container edit__input__container">
                                            <Form.Item
                                                name="phoneNumber"
                                                label="Утасны дугаар"
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Утасны дугаараа оруулна уу!',
                                                    },
                                                    {
                                                        validator(rule, value = "") {
                                                            const isValid = /^[89]\d{7}$/.test(value);
                                                            if (!isValid) {
                                                                return Promise.reject("Утасны дугаараа шалгана уу!");
                                                            } else {
                                                                return Promise.resolve();
                                                            }
                                                        }
                                                    }
                                                ]}
                                            >
                                                <InputNumber style={{ width: '100%' }} />
                                            </Form.Item>
                                        </div>
                                        <div className="save__changes__button__container">

                                            <Button
                                                style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px', color: 'black' }}
                                                onClick={() => navigate('/account/me')}
                                            >
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
                                                <Button
                                                    style={{ height: '46px', paddingLeft: '20px', paddingRight: '20px', fontSize: '16px' }}
                                                    type='primary'
                                                    disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length}
                                                    onClick={handleSaveClick}
                                                >
                                                    Хадгалах
                                                </Button>
                                            </ConfigProvider>
                                        </div>
                                    </Form>
                                </ConfigProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Account>
    );
};

export default ManageAccount;
