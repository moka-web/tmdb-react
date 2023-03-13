import Login from "./components/Login";
import ItemList from "./components/ItemList";
import {Routes , Route,useNavigate} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import ItemDetail from "./components/ItemDetail"
import Results from "./components/Results";
import Register from "./components/Register";
import { useState,useEffect, useContext } from "react";
import  AuthContext  from './context/auth-context'

import "./css/bootstrap.css.map"
import "./css/bootstrap.css"
import "./css/app.css"

import Favourites from "./components/Favourites";

function App() {

  const [favourites, setFavourites] = useState([])
  const [isLoged , setIsloged]=useState(false)
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)

 

  useEffect(() => {
    if (currentUser) {
      navigate('/listado')
    }
  }, [currentUser])



  useEffect(() => {
      const favsInLocal = localStorage.getItem("favs");
    
      if (favsInLocal !== null) {
          const favsArray = JSON.parse(favsInLocal)
          setFavourites(favsArray);
          
      }

    
  },[]);


  const addRemFavs = e=>{
    const btn = e.currentTarget; //capturo el elemento
  
    const parent = btn.parentElement; // capturo el elemento padre
    const poster_path = parent.querySelector("img").getAttribute("src") //capturo la imagen
    const title = parent.querySelector("h2").innerText;
    const overview = parent.querySelector("p").innerText;
    const favs = localStorage.getItem("favs");
    let temporalFavsMovies;

    if (favs === null) {
      temporalFavsMovies = []
    }else{
      temporalFavsMovies = JSON.parse(favs)
    };

    const movieData = { 
      poster_path:poster_path ,
      title:title ,
      overview:overview,
      id:btn.dataset.movieId
    }

    if (!temporalFavsMovies.some(e=>e.id === movieData.id)) {
      temporalFavsMovies.push(movieData);
      localStorage.setItem("favs",JSON.stringify(temporalFavsMovies))
      setFavourites(temporalFavsMovies)
    }else{
      const removeFromFavs = temporalFavsMovies.filter(e=>e.id !== movieData.id);
      localStorage.setItem("favs",JSON.stringify(removeFromFavs))
      setFavourites(removeFromFavs)
      
    }

  }

  return (
  <div className="app">
   <Header favs={favourites}/>
   <Routes>
    <Route exact path="/" element={ currentUser? <ItemList addRemFavs={addRemFavs} /> : <Login/>} />
    <Route exact path="/registro" element={<Register/>} />
    <Route exact path="/listado" element={ currentUser ? <ItemList addRemFavs={addRemFavs} /> : <Login/>   }/>
    <Route exact path="/detalle/:id" element={<ItemDetail/>}/>
    <Route exact path="/resultados" element={currentUser?<Results/>:<Login/>}></Route>
    <Route exact path="/favs" element={currentUser?<Favourites favourites={favourites} addRemFavs={addRemFavs}/> :<Login/> }></Route>
   </Routes>
   <Footer/>  
  </div>

  );


}

export default App;
