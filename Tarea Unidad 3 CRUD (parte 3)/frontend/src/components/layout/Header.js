import React, {useState, useEffect} from 'react';
import '../../styles/components/Layout/Header.css';
import {NavLink} from "react-router-dom";

{/* <i className="fa fa-fw fa-user text-white fa-lg"></i> */}

const Header = (props) => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
    
      useEffect(() => {
    
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])
    

    return ( 
        
        <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12 bg-gris p-5 text-center">
                <nav class="menu">
                {(toggleMenu || screenWidth > 720) && (
                    <ul>
                        <li class="izquierda logo">
                            Red Informatica
                        </li>
                        <li><NavLink activeClassName='activo' exact to="/">Tienda</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/servicios">Servicios</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/impresiones">Impresiones</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/contacto">Contacto</NavLink></li>
                        <li><NavLink activeClassName='activo' exact to="/admin">Administracion</NavLink></li>
                        <li className = "derecha"><NavLink activeClassName='activo ' exact to="/admin"><i class="fa fa-fw fa-user fa-lg"></i> Iniciar Sesion</NavLink></li>
                        {/* <li class="derecha"><a href="#"><i class="fa fa-fw fa-user fa-lg"></i>Iniciar Sesion</a></li> */}
                        <li class="derecha"><i class="fa fa-fw fa-cart-plus fa-lg" ></i></li>
                    </ul>
                     )}

                     <button onClick={toggleNav} className="btnMenu"><i class="fa fa-bars"></i></button>
                </nav>
            </div>
        </div>      
    </div>     
    
    );
}

export default Header;
