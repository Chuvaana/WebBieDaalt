import React from "react";
import "./LoginCard.css";


const Login = () => {
   return <div className="login-form-all">
       <div className="login-form">
           <div className="login-header">
               <h1>Нууц үг солих</h1>
           </div>
           <div className="input-all">
               <input type="text" className="password" placeholder="Шинэ нууц үг "></input><br />
               <input type="text" className="confirm-password" placeholder="Шинэ нууц үг давтах"></input>
           </div>
           <div className="btn-all">
               <button className="save-pass-btn">Хадгалах</button><br />
           </div>
       </div>
   </div>;
};


export default Login;