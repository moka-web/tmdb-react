import { Navigate,useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

function ItemDetail (){
    const [movieData , setMovieData] = useState(null);
    let token= sessionStorage.getItem("token")
    let {id}= useParams()

   
    
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
    },[id])

    
    return(
        <>
        {!token && <Navigate to="/"/>}
        {movieData ? (
            <>
            <div className="container">
                <div className="row">
                <img alt="" className="img-fluid col-md-4" src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}/>
                <div className="col-md-8">
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
           
            </>
        ):(<h1>Loading...</h1>)}
        
        </>
    )
};

export default ItemDetail;