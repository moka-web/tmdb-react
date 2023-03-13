import { useEffect, useState } from "react";
import "../css/carousel.css"



function MyCarousel ({firstResults}){
   
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage , SetSelectedImage] = useState([])


    const selectNewImage = (index, images ,next ) =>{
        const condition = next == true ? selectedIndex < firstResults.length -1 : selectedIndex > 0;
        const nextIndex =  next == true ? condition ? selectedIndex + 1 : 0 : condition ? selectedIndex - 1 : firstResults.length -1;
        SetSelectedImage(firstResults[nextIndex]);
        setSelectedIndex(nextIndex); 
    }

    const previous = ()=>{
        selectNewImage(selectedIndex , firstResults , false)
    }

    const next = ()=>{
        selectNewImage(selectedIndex , firstResults , true)
    }


    
    useEffect(() => {
       SetSelectedImage(firstResults[0])
       
    }, [firstResults]);

    // style={ {backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedImage.backdrop_path})` , backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"}}

    return(
        <>
       
            { selectedImage && (
                <div className="mycarousel-container" >

                <button className="carousel-button-left" onClick={previous}>{"<"}</button>
                
     
                <img className="carouselImg" src={ selectedImage && new URL(`https://image.tmdb.org/t/p/w500/${selectedImage.backdrop_path}`)  } alt="image Not Found" ></img>
                
              

                <div className="carouselInfo-container">
                    <h2>{  selectedImage.original_title}</h2>
                    <p>{ selectedImage.overview}</p>
                    <span> ⭐{ selectedImage.vote_average}</span>
                    <br></br>
                    <span> 📮{ selectedImage.vote_count} votos</span>


                    {/* { selectedImage.genres.map((genre)=>{
                    return(
                        <>
                        <li key={genre.id}>{genre.name}</li>
                        </>
                        
                    )
                    })} */}

                </div>
                <span className="estreno-icon">🟢{selectedImage.release_date}</span>
                
                <button  className="carousel-button-right" onClick={next}>{">"}</button>

                
                </div>
            )
            
            }
            

       
            

        </>
    )
}


export default MyCarousel


