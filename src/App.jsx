import './App.css';
import HeaderComponent from './components/Header/Header';
import FooterComponent from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';
import ContactPage from './components/Contact/Contact';
import ProductsPage from './components/Products/Products';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsCategory from './components/Category/Category';
import { CartProvider } from './context/cartContext';




function App() {
    return (
        <CartProvider>
             
            <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path='/products' element={<ProductsPage />} />
                        <Route path='/category/:categoryId' element={<ProductsCategory />} />
                        <Route path='/products/:productId' element={<ItemDetail />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path="*" element={<h1>Página no encontrada</h1>} /> {/*Para manejar errores*/}
                        
                    </Routes>
                    <FooterComponent />
            </BrowserRouter>
              
        </CartProvider>
    );
}

export default App;
