import React from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from 'react'
import { register} from '../services/firebase'
import "../css/Login.css"


const defaultFormFields ={
    email:"",
    passWord:""
}

function Register (){

    const [formFields , setFormFields]= useState(defaultFormFields);//estado para manejar los valores del formulario 
    const {email, passWord} = formFields //traigo del estado las key values email y password 
    const navigate = useNavigate();
    const resetFormFields = ()=>{setFormFields(defaultFormFields)} //reset del formulario


    const submitHandler =(e)=>{
        e.preventDefault();
        try {
            const userCredentials = register(email,passWord);  //en el submit del form envio a firebase el email y el password

            if (userCredentials){ //si las credenciales son validas limpio el formulario e ingreso al sitio
                resetFormFields()
                navigate("/listado")
            }

        } catch (error) {
            console.log("error de autenticacion de firebase register.js",error)
        }
    };


    const handleChange = (e)=>{
        e.preventDefault() //evito que se recargue el sitio 
        const {name,value} = e.target; 
        setFormFields({...formFields, [name]:value});

    }



    return(
        <>
         
    <div className="center-login">
        <div className="login">
        
            <div>
                <h2>Crea tu usario!</h2>
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



export default Register