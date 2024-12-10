import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Initial state
const initialState = {
    items: [],
    total: 0
};

// Cart reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if item already exists in cart
            const existingItemIndex = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (existingItemIndex > -1) {
                // If item exists, increase quantity
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };

                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + action.payload.price
                };
            } else {
                // If new item, add to cart
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    total: state.total + action.payload.price
                };
            }

        case REMOVE_FROM_CART:
            const itemToRemove = state.items.find(item => item.id === action.payload);
            const filteredItems = state.items.filter(item => item.id !== action.payload);

            return {
                ...state,
                items: filteredItems,
                total: state.total - (itemToRemove.price * itemToRemove.quantity)
            };

        case UPDATE_QUANTITY:
            const updatedCartItems = state.items.map(item => 
                item.id === action.payload.id 
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );

            const newTotal = updatedCartItems.reduce(
                (total, item) => total + (item.price * item.quantity), 
                0
            );

            return {
                ...state,
                items: updatedCartItems,
                total: newTotal
            };

        case CLEAR_CART:
            return initialState;

        default:
            return state;
    }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Action creators
    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: REMOVE_FROM_CART, payload: productId });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ 
            type: UPDATE_QUANTITY, 
            payload: { id: productId, quantity: Math.max(1, quantity) } 
        });
    };

    return (
        <CartContext.Provider 
            value={{ 
                cart: state.items, 
                total: state.total, 
                addToCart, 
                removeFromCart, 
                clearCart, 
                updateQuantity 
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook for using cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};