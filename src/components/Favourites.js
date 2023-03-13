import { Navigate } from "react-router-dom";
import Item from "./Item";
import "../css/favList.css"

function Favourites ({addRemFavs,favourites}){
   
    return(
        <>
        <div className="fav-list">
       
            <h2>favoritos</h2>
            <div className="container">
                    <div className="row" >
                        {favourites.length > 0 ? favourites.map((movie,index)=>{
                            return(
                                <Item {...movie} addRemFavs={addRemFavs} key={movie.id}/>
                            )
                        }) 
                        : 
                        (<div className="no-favs"> 
                            <h1> No hay peliculas en favoritos! </h1>
                        </div>)}
                        
                    </div>
                </div>
        </div>
        </>
        
    )
}


export default Favourites;