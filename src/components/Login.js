
import React, { useContext } from 'react'
import { useNavigate,  Link } from "react-router-dom";
import {  useState } from 'react'
import AuthContext from '../context/auth-context';
import { signInUser } from '../services/firebase'

import "../css/Login.css"



const defaultFormFields ={
    email:"",
    passWord:""
}//valores por de defecto del formulario 

function Login(){

    const { currentUser } = useContext(AuthContext);
  
    const [formFields , setFormFields]= useState(defaultFormFields);//estado para manejar los valores del formulario 

    const {email, passWord} = formFields //traigo del estado las key values email y password 

    const navigate = useNavigate();


    const resetFormFields = ()=>{setFormFields(defaultFormFields)} //reset del formulario
    
    const submitHandler =(e)=>{
        e.preventDefault();
        try {
            const userCredentials = signInUser(email,passWord);  //en el submit del form envio a firebase el email y el password

            if (userCredentials){ //si las credenciales son validas limpio el formulario e ingreso al sitio
                resetFormFields()
                navigate("/listado")
            }

        } catch (error) {
            console.log("error de autenticacion de firebase linea 35 login.js",error)
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
                    <h5 className='registerH5'>no tienes cuenta?</h5>
                    <Link className='register-link' to="/registro">registrate!</Link>
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