
import axios from "axios";
import { useState,useEffect } from "react";

import Item from "./Item";



function Results  (){
    let query = new URLSearchParams(window.location.search);
    let result = query.get('keyword');

    const [movieResults , setMovieResults] = useState([])
    
    useEffect(() => {
        let endPoint = `https://api.themoviedb.org/3/search/movie?api_key=a54b1d56e3ff8f84a03499261c54ac77&language=en-US&query=${result}&page=1&include_adult=false`
        axios.get(endPoint)
        .then((res)=>{
            const data = res.data.results;
            console.log(data)
            setMovieResults(data)

        }).catch((error)=>{
            console.log(error)
        }

        )
           
    },[result]);
    

    

    return(
        <>
        <h1>Resultados para : <em>{result}</em> </h1>
        <div className="container">
            <div className="row">
            { movieResults.length > 0 && movieResults.map((movie)=>{
                    return(
                        
                        <Item {...movie} key={movie.id}/>

                    )
            })}
            </div>
        </div>    
        </>
    )
}

export default Results;