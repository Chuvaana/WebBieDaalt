import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { message } from 'antd'

import "./LoginCard.css";

const LoginCard = () => {

    const [deliver_username, setphoneNumber] = useState()
    const [deliver_password, setPassword] = useState()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/worker/login', { deliver_username, deliver_password })
            .then(result => {
                console.log(result.data);
                if (result.data === "No record exist" || result.data === 'the password is incorrect Or You have not Admin right') { 
                    message.error("Нууц үг эсвэл нэр буруу байна",);
                }
                else {
                    message.success("Амжилттай нэвтэрлээ");
                    localStorage.setItem("user", JSON.stringify(result.data));
                    console.log(result.data);
                    navigate('/');
                }
            })
            .catch(err => console.log(err))
    };



    return (
        <form className="login-form-all" onSubmit={handleSubmit}>
            <div className="login-form">
                <div className="login-header">
                    <h1>Нэвтрэх</h1>
                </div>
                <div className="input-all">
                    <input type="text" className="phone-number" placeholder="Нэвтрэх нэр" onChange={(e) => setphoneNumber(e.target.value)} required></input><br />
                    <input type="password" className="password" placeholder="Нууц үг" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className="btn-all">
                    {/* <a href="/account/password_reset"> Нууц үгээ мартсан</a><br /> */}
                    <button type="submit" className="login-btn">Нэвтрэх</button><br />
                    {/* <Link to="/register" className="register-btn">
                        Бүртгүүлэх
                    </Link> */}

                </div>
            </div>
        </form>
    );
};


export default LoginCard;