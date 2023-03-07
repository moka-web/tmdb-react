import swal from "sweetalert";
import {  useNavigate } from "react-router-dom";
import "../css/Header.css"

function SearchBar (){

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        const keyword = e.currentTarget.keyword.value.trim();
        
        if (keyword.length === 0) {
            swal(
                //investigate esto
               "tienes que escribir algo"
            )
        
        }else if (keyword.length < 4) {
            swal ("tienes que escribir al menos 4 caracteres! ")
            
        }else{
            e.currentTarget.keyword.value = "";
            navigate(`/resultados?keyword=${keyword}`)
           
            
        }
    }

    return(
        <>
        <form className="d-flex " onSubmit={submitHandler}>
        <input className="form-control me-2 searchbar-input" name="keyword" type="search" placeholder="Search" aria-label="Search"/>
        <button className="searchbar-btn " type="submit">🔍</button>
      </form>
        </>
    )
}


export default SearchBar;
