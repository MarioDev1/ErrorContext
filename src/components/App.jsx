import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import { DarkModeProvider } from '../context/DarkModeContext';
import Navbar from './content/Navbar';
import Carrito from './content/Carrito';
import ItemListContainer from './content/ItemListContainer';
import About from './content/About';
import Contacto from './content/Contacto';
import ItemDetailContainer from './content/ItemDetailContainer';
import Footer from './content/Footer'
import Categoria from './content/Categoria';
const App = () => {

    return (
        <>
        <DarkModeProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/producto/:id" element={<ItemDetailContainer/>} />
                <Route path="/categoria/:id" element={<Categoria/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacto" element={<Contacto/>} />
                <Route path="/carrito" element={<Carrito/>} />
            </Routes>
            <Footer/>
            </BrowserRouter>
          </DarkModeProvider>
        </>
    );
}

export default App;
