import React, {useState, useEffect} from 'react';
import DetalleProducto from './DetalleProducto'
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';

import '../../styles/cardProducto.css'


//PRODUCTO
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    
    useEffect(() => { 
       consultarBDD('../json/productos.json').then(productos => {
        const producto1 = productos.find(productoArray => productoArray.id == id)
        setProducto(producto1)
       })
   
    }, [])

   
    return (
        
            <div className="card  cardProducto mb-3" style={{maxWidth: '540px'}}>
                <DetalleProducto producto={producto}/>
                
            </div>

       
    );
}

export default ItemDetailContainer;
