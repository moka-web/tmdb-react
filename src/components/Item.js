import { Link } from "react-router-dom"
import "../css/Items.css"


function Item ({title,poster_path,overview,id,addRemFavs}){

    return(
    <div className="card col-md-3 movie-item" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${poster_path})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}} > 
        <img style={{display:"none"}} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..."/>
        <button name="btn" onClick={(e)=>addRemFavs(e)} data-movie-id={id} className="fav-btn">⭐</button>
        <div className="">
            <h2>{title}</h2>
            <p style={{display:"none"}} className="card-text">{overview.substring(0,100)}... </p>
            <Link to={`/detalle/${id}`}>view more...</Link>
        </div>

  </div>
  )

}

export default Item