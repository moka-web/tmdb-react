
import "../css/footer.css"
import instagram from "../assets/img/instagram.png"
import linkedin from "../assets/img/linkedin.png"
import github from "../assets/img/github.png"

function Footer (){
    return(
        <footer className="footer">
            <nav className="nav-footer">
                <ul>
                    <li>
                        <a href="instagram.com" rel="noopenernoreferrer"> <img className="size-social" style={{width:"2rem"}} src={instagram}></img></a>
                    </li>
                    <li>
                        <a href="instagram.com" rel="noopenernoreferrer"> <img className="size-social" style={{width:"2rem"}} src={linkedin}></img></a>
                    </li>
                    <li>
                        <a href="instagram.com" rel="noopenernoreferrer"><img  className="size-social" style={{width:"2rem"}}src={github}></img></a>
                    </li>
                  
                </ul>
            </nav>
            <div> 
                <h5>© Tomas juarez web developer </h5>
            </div>

        </footer>
    )
}

export default Footer;