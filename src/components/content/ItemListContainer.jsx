import React, {useState, useEffect,useContext} from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
import { DarkModeContext } from '../../context/DarkModeContext';
import {Link} from 'react-router-dom'
//Home
const Home = () => {
    const [productos, setProductos] = useState([]);
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    

    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
            const cardProducto = productos.map(producto => 
                <div className="card cardProducto" key={producto.id}>
                    <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text"> Modelo: {producto.modelo}</p>
                            <p className="card-text">Marca: {producto.marca}</p>
                            <p className="card-text">Precio: {producto.precio}</p>
                            <p className="card-text">Stock: {producto.stock}</p>
                            <button className='btn btn-dark'><Link className='nav-link' to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                    </div>
                </div>)
            
            setProductos(cardProducto)
            })
    }, []);

    const cambiarEstado = () => {
        toggleDarkMode()
        console.log(darkMode)
    }
    return (
        <div className={darkMode ? 'darkMode row': 'row' }>
                <button onClick={()=> cambiarEstado()}>Dark Mode</button>
            {productos}     
        </div>      
        
    );
}

export default Home;
