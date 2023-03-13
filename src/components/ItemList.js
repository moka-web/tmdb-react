import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import swal from "sweetalert";
import Item from "./Item";
import axios from "axios";
import "../css/ItemList.css"
import MyCarousel from "./Carousel";
import { useContext } from 'react'
import  AuthContext  from '../context/auth-context'


function ItemList ({addRemFavs}){
    const { currentUser, signOut } = useContext(AuthContext)

    let [movieList , setMovieList] = useState([]);
    let [firsResults, setFirstResults] = useState([]);
    

    useEffect(()=>{
        const endPoint ="https://api.themoviedb.org/3/discover/movie?api_key=a54b1d56e3ff8f84a03499261c54ac77";
        axios.get(endPoint)
        .then(res=>{
            const data = res.data;
            const results = data.results;
            const sliceResults=results.slice(0,3);

            //para enviar solo las imagenes 
            // let imgArray = []
            // sliceResults.map((object)=>{imgArray.push(object.poster_path)})
            
            setFirstResults(sliceResults)

            setMovieList(results)
           
        }).catch((error)=>{
            swal("OOPS! hubo un error , vuelve a intentar mas tarde!")
            console.log(error)
        })

    },[setMovieList])


   
    return (
        <>
            
            <div className=" Item-list ">
               
                <MyCarousel  firstResults={ firsResults}/>
                <div className="user_logOut">
                    <h5 className="user-email"> Hello {currentUser?.email} !</h5>
                    <button className="Logout-btn" onClick={signOut}>Sign Out</button>
                </div>

                <div className="container">
                    
                  
                    <div className="row" >

                    {
                        movieList.map((movie,index)=>{
                        return(
                            
                            <Item {...movie} addRemFavs={addRemFavs} key={movie.id}/>
                        )
                    })}

                    </div>    
                </div>    
                
               
            </div>
        </>
    )
}


export default ItemList;