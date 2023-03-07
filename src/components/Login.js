import axios from "axios";
import React from 'react'
// import swal from '@sweetalert/with-react';
import swal from "sweetalert";
import { useNavigate, Navigate } from "react-router-dom";

import "../css/Login.css"

function Login(){
    
    const navigate = useNavigate();


    const submitHandler = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail =/^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@"]{2,})$/i;
       
        

        if (email === "" || password === "") {
            swal(
                <h2>los campos no pueden estar vacios</h2>
            )
            return;
        }
        if (email !== "" && !regexEmail.test(email)) {
            console.log("debes escribir correctamente tu email")
            return;
        }
        if (email !== "challenge@alkemy.org" || password !== "react") {
            console.log("credenciales invalidas");
            return;
        }
        
        axios.post("http://challenge-react.alkemy.org",{email,password})
        .then( res=> {
            const tokenRecibido = res.data.token;
            sessionStorage.setItem('token',tokenRecibido);
            navigate('/listado')

        })

    }

    let token= sessionStorage.getItem("token")

return(
    <>
    {token && <Navigate to="/listado" />}
    
    <div className="center-login">
        <div className="login">
        
            <div>

                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <input type="email" name="email" placeholder="email"></input>
                    <br/>
                    <input type="password" name="password" placeholder="password"></input>
                    <br/>
                    <button type="submit">ingresar! </button>
                </form>

            </div>
        </div>
    </div>
    
    </>
   
)


}

export default Login;