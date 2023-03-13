import {Link}  from "react-router-dom"
import SearchBar from "./SearchBar";
import "../css/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar,NavDropdown,Form,Button,Offcanvas} from 'react-bootstrap';
import logo from "../assets/img/logo.png"
import otroLogo from "../assets/img/pngegg.png"
import AuthContext from "../context/auth-context";
import { useContext } from "react";




function Header ({favs}){
  
    const {currentUser} = useContext(AuthContext)
   
    return(
        <header className="header">
        

            <Navbar   expand="md" className="mb-3 navbar">
                <Container fluid>
                    <Navbar.Brand href="#" ><img className="logo" src={otroLogo}></img></Navbar.Brand>
                    <Navbar.Toggle className="toggler" aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        <img className="logo-offcanvas" src={otroLogo}></img>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {currentUser&&
                        <>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        
                        <Link className="nav-link" to="/">home</Link>
                        <Link className="nav-link " to="/listado">listado</Link>
                        <Link className="nav-link" to="/favs">favoritos {favs.length >= 1 &&  <span> {favs.length}</span>} ⭐ </Link>

                        </Nav>

                    
                        <SearchBar></SearchBar>
                        </>
                    
                    }
                        

                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
   
     
            
        </header>
    )


}


export default Header;