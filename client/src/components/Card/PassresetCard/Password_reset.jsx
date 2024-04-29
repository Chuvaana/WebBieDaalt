import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginCard.css";


const Password_reset = () => {
    const [phoneNumber, setphoneNumber] = useState()
    const [code, setCode] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(code == "0000"){
            axios.post('http://localhost:5000/api/user/recovery', { phoneNumber })
            .then(result => {
                if (result.data == "Success") {
                    alert("Success");
                    navigate('/account/changepass');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err))
        }
    };

    return (
        <form className="login-form-all" onSubmit={handleSubmit}>
            <div className="login-form">
                <div className="login-header">
                    <h1>Нууц үг сэргээх</h1>
                </div>
                <div className="input-all">
                    <input type="number" className="phone-number" placeholder="Утасны дугаар" onChange={(e) => setphoneNumber(e.target.value)} required></input><br />
                    <input type="text" className="phone-code" placeholder="Баталгаажуулах код"  onChange={(e) => setCode(e.target.value)} required></input>
                </div>
                <div className="btn-all">
                    <button type="submit" className="login-btn">Баталгаажуулах код илгээх</button><br />
                </div>
            </div>
        </form>)
};


export default Password_reset;