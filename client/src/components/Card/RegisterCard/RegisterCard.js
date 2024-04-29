import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import "./RegisterCard.css";
// import logo from '../../assets/3maral.jpg';

const RegisterCard = () => {
    const [name, setName] = useState()
    const [phoneNumber, setphoneNumber] = useState()
    const [password, setPassword] = useState()
    const [con_password, setPasswordRepeat] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("register");
        if (password === con_password) {
            axios.post('http://localhost:5000/api/user/register', { name, phoneNumber, password })
                .then(result => {
                    console.log(result)
                    navigate('api/user/login')
                })
                .catch(err => console.log(err))
        } else {
            alert("nuuts ug taarhgvi bn");
        }
    };
    return <form className="login-form-all" onSubmit={handleSubmit}>
        <div className="login-form">
            <div className="login-header">
                <h1>Бүртгүүлэх</h1>
            </div>
            <div className="input-all">
                <input type="text" className="name" pattern="[a-zA-Z]*" placeholder="Нэр" required onChange={(e) => setName(e.target.value)}></input><br />
                <input type="number" className="phone-number" pattern="[8-9]{1}[0-9]{7}" placeholder="Утасны дугаар" required onChange={(e) => setphoneNumber(e.target.value)}></input><br />
                <input type="password" className="password" placeholder="Нууц үг" minLength={8} required onChange={(e) => setPassword(e.target.value)}></input><br />
                <input type="password" className="password-confirm" placeholder="Нууц үг давтах" minLength={8} required onChange={(e) => setPasswordRepeat(e.target.value)}></input>
            </div>
            <div className="btn-all">
                <button type="submit" className="re-register-btn">Бүртгүүлэх</button><br />
                <Link to="/account/login" className="re-login-btn" >
                    Нэвтрэх
                </Link>
            </div>
        </div>
    </form>;
};


export default RegisterCard;