import React from 'react';
import { useCart } from '../../context/cartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

const CartComponent = () => {
    const { 
        cart, 
        total, 
        removeFromCart, 
        clearCart, 
        updateQuantity 
    } = useCart();

    if (cart.length === 0) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                <p>Start adding some awesome bass guitars!</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
            
            {cart.map((item) => (
                <div 
                    key={item.id} 
                    className="flex items-center justify-between border-b py-4"
                >
                    <div className="flex items-center space-x-4">
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded"
                        />
                        <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600">${item.price.toLocaleString()}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded">
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                </div>
            ))}
            
            <div className="mt-6 flex justify-between items-center">
                <button 
                    onClick={clearCart}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Clear Cart
                </button>
                
                <div className="text-right">
                    <p className="text-xl font-bold">
                        Total: ${total.toLocaleString()}
                    </p>
                    <button 
                        className="mt-2 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;