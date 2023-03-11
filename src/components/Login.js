import axios from "axios";
import React from 'react'
// import swal from '@sweetalert/with-react';
import swal from "sweetalert";
import { useNavigate, Navigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from 'react'
import { signInUser } from '../services/firebase'
import "../css/Login.css"



const defaultFormFields ={
    email:"",
    passWord:""
}

function Login(){
    
    const [formFields , setFormFields]= useState(defaultFormFields);
    const {email, passWord} = formFields 
    const navigate = useNavigate();


    const resetFormFields = ()=>{setFormFields(defaultFormFields)}
    
    const submitHandler =(e)=>{
        e.preventDefault();
        try {
            const userCredentials = signInUser(email,passWord);
            if (userCredentials){
                resetFormFields()
                navigate("/listado")
            }

        } catch (error) {
            console.log("error de autenticacion de firebase linea 35 login.js",error)
        }
    };

    const handleChange = (e)=>{
        e.preventDefault()
        const {name,value} = e.target;
        setFormFields({...formFields, [name]:value});

    }



   

return(
    <>
   
    
    <div className="center-login">
        <div className="login">
        
            <div>

                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <input type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            required >  
                    </input>
                    <br/>
                    <input 
                            name='passWord'
                            value={passWord}
                            onChange={handleChange}
                            placeholder="Password"
                            required 
                    >
                    </input>
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



// const submitHandler = (e)=>{
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const regexEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
    

//     if (email === "" || password === "") {
//         swal(
//             <h2>los campos no pueden estar vacios</h2>
//         )
//         return;
//     }
//     if (email !== "" && !regexEmail.test(email)) {
//         console.log("debes escribir correctamente tu email")
//         return;
//     }
//     if (email !== "challenge@alkemy.org" || password !== "react") {
//         console.log("credenciales invalidas");
//         return;
//     }
    
//     axios.post("http://challenge-react.alkemy.org",{email,password})
//     .then( res=> {
//         const tokenRecibido = res.data.token;
//         sessionStorage.setItem('token',tokenRecibido);
//         navigate('/listado')

//     }).catch((error)=>{
//         console.log( `a ver toga : ${error.message} ` )
//     })

// }