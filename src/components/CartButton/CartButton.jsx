import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/cartContext';
import CartComponent from '../Cart/Cart';

const CartButton = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart } = useCart();

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="relative">
            <button 
                onClick={toggleCart}
                className="relative text-white hover:text-red-300"
            >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white 
                        rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                )}
            </button>

            {isCartOpen && (
                <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 overflow-y-auto">
                    <button 
                        onClick={toggleCart}
                        className="absolute top-4 left-4 text-gray-600 hover:text-gray-900"
                    >
                        ✕
                    </button>
                    <CartComponent />
                </div>
            )}
        </div>
    );
};

export default CartButton;