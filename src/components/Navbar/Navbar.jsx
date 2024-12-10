import { Link } from 'react-router-dom';
import CartButton from '../CartButton/CartButton';


export default function Navbar() {
    

    return (
        <nav>
            <ul className="flex">
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(255,255,255)] transition duration-300 ease-linear hover:text-[rgb(255,92,92)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(255,255,255)] transition duration-300 ease-linear hover:text-[rgb(255,92,92)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/products">Shop</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(255,255,255)] transition duration-300 ease-linear hover:text-[rgb(255,92,92)] hover:outline-0 hover:no-underline hover:bg-none">
                    <a href="/category/Bajos V">Bajos V</a>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(255,255,255)] transition duration-300 ease-linear hover:text-[rgb(255,92,92)] hover:outline-0 hover:no-underline hover:bg-none">
                    <a href="/category/Bajos IV">Bajos IV</a>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(255,255,255)] transition duration-300 ease-linear hover:text-[rgb(255,92,92)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/about">About</Link>
                </li>
                <li className="mx-[15px] text-[14px] font-normal leading-[20px] uppercase text-[rgb(255,255,255)] transition duration-300 ease-linear hover:text-[rgb(255,92,92)] hover:outline-0 hover:no-underline hover:bg-none">
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <CartButton />

                </li>
                
            </ul>
        </nav>
    );
}