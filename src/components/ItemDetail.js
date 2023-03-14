import { Navigate,useParams } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import AuthContext from "../context/auth-context";
import "../css/itemDetail.css"

function ItemDetail (){
    const [movieData , setMovieData] = useState(null);
    let {id}= useParams()

   const {currentUser} = useContext(AuthContext);
  
    
    useEffect(()=>{
        let endPoint =  `https://api.themoviedb.org/3/movie/${id}?api_key=a54b1d56e3ff8f84a03499261c54ac77&language=en-ES`
      
       axios.get(endPoint).then(
        res=>{
            const data = res.data;
         
            setMovieData(data)
            
        }
       ).catch((error)=>{
        console.log(error)
       }
       );
    },[setMovieData])

    
    return(
        <>
        {!currentUser && <Navigate to="/"/>}
        {movieData ? (
            <>
            <div className=" itemDetail-container">

                <div className="row">

                    <div className="img-detail-container col-md-4">
                        
                        <img className="img-detail " src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}/>
        
                    </div>
                    
                    <div className="col-md-5 content-detail-container" >
                        <div className="content-detail-container">

                        <h1 > {movieData.title}</h1>
                        <p>{movieData.overview}</p>
                        <h5>{movieData.release_date}</h5>
                        <h5>{movieData.vote_average}</h5>
                        <ul>
                            { movieData.genres.map((genre)=>{
                                return(
                                    <li key={genre.id}>{genre.name}</li>
                                )
                                })}
                        </ul>
                        </div>
                    </div>
                
                </div>

            </div>
           
            </>
        ):(<h1>Loading...</h1>)}
        
        </>
    )
};

export default ItemDetail;