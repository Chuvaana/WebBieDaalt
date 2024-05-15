import React from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
    Button,
    Form,
    Input,
    InputNumber,
    Radio,
    ConfigProvider,
    message,
} from "antd";
const { TextArea } = Input;

const Contact = () => {

  const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [addition, setAddition] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        try {
            if (!name || !email || !phoneNumber || !addition) {
                throw new Error("Please fill in all required fields.");
            }

            const formData = {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                addition: addition,
            };

            // Send form data to backend
            const response = await axios.post(
                "http://localhost:5000/api/contact/add_contact",
                formData
            );
            // Show success message
            message.success("Амжилттай илгээлээ.");
            navigate("/");
            
        } catch (error) {
            console.log(error.message);
            message.error("Failed to submit form. Please try again.");
        }
    };

    return <div className="contact-all">
        <div className="left_table">
            <div className="notice_phone">
                <div className="notice_phone_header">
                    <img src=""></img>
                    <h3>Бидэнтэй ярих</h3>
                </div>
                <div className="notice_phone_main">
                    <p>Ажлын 5 өдөр боломжтой</p>
                    <p>Утас: +986 8899 0909</p>
                </div>
            </div>
            <div className="notice_email">
                <div className="notice_email_header">
                    <img src=""></img>
                    <h3>Бидэн рүү бичих</h3>
                </div>
                <div className="notice_email_main">
                    <p>Манай маягтыг бөглөнө үү, бид тантай 24 цагийн дотор холбогдох болно.</p>
                    <p>Emails: jewelrymon@gmail.com</p>
                    <p>Emails: jewelrymon@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="right_table">
            <div className="right_table_upper">
                <Form
                    layout="vertical"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div>
                        {/* <input type="text" className="name" placeholder="Нэр"></input> */}
                        <Form.Item
                            name="name"
                            label="Нэр"
                            style={{ width: '90%' }}
                            rules={[{ required: true, message: "Нэрээ оруулна уу!" }]}
                        >
                            <Input onChange={(e) => setName(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div>
                        {/* <input type="text" className="email" placeholder="И-мэйл"></input> */}
                        <Form.Item
                            name="email"
                            label="И-мэйл"
                            style={{ width: '90%' }}
                            rules={[
                                {
                                    type: "email",
                                    message: "И-мэйл хаягаа оруулна уу!",
                                },
                                {
                                    required: true,
                                    message: "Үнэн зөв и-мэйл хаягаа оруулна уу!",
                                },
                            ]}
                        >
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                    </div>
                    <div>
                        {/* <input type="text" className="phone" placeholder="Утасны дугаар"></input> */}
                        <Form.Item
                            label="Утасны дугаар"
                            name="phoneNumber"
                            style={{ width: '90%' }}
                            rules={[
                                {
                                    required: true,
                                    message: "Утасны дугаараа оруулна уу!",
                                },
                                {
                                    pattern: /^[89]\d{7}$/,
                                    message: "Зөв утасны дугаараа оруулна уу!",
                                },
                            ]}
                        >
                            <InputNumber
                                style={{ width: "100%" }}
                                onChange={(value) => setPhoneNumber(value)}
                            />
                        </Form.Item>
                    </div>
                </Form>
            </div>
            <div className="right_table_lower" style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingLeft:'40px' }}>
                {/* <input type="text" className="message"></input> */}
                <Form
                    layout="vertical"

                >
                    <TextArea
                        name="addition"
                        label="Мэдээлэл"
                        showCount
                        maxLength={100}
                        onChange={(e) => setAddition(e.target.value)}
                        style={{
                            height: 120,
                            resize: 'none',
                            width: '90%'
                        }}
                    />
                </Form>

            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 90px' }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: "#DB4444",
                                algorithm: true,
                            }
                        },
                    }}
                >
                    <Button
                        style={{
                            height: "46px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            fontSize: "16px",
                        }}
                        type="primary"
                        onClick={handleSubmit}
                    >
                        Илгээх
                    </Button>
                </ConfigProvider>
            </div>
        </div>
    </div>;
};


export default Contact;