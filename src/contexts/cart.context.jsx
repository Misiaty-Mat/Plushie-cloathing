import { createContext, useState, useEffect } from "react";

const findItemInCart = (cartItems, itemToFind) => {
    return cartItems.find(item => item.id === itemToFind.id)
}

const addCartItem = (cartItems, productToAdd) => {
    const foundItem = findItemInCart(cartItems, productToAdd)
    if(foundItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return ([...cartItems, {...productToAdd,quantity: 1}])
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const foundItem = findItemInCart(cartItems, cartItemToRemove)

    if(!foundItem) return;

    if(foundItem.quantity === 1) {
        return (cartItems.filter((cartItem) => cartItem.id !== foundItem.id))
    }

    return cartItems.map(cartItem => cartItem.id === foundItem.id ?
        {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
}

const clearCartItem = (cartItems, cartItemsToClear) => {
    const foundItem = findItemInCart(cartItems, cartItemsToClear)

    if(!foundItem) return;

    return cartItems.filter((cartItem) => cartItem.id !== foundItem.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearFromCart: () => {},
    cartCount: 0,
    cartTotalPrice: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotalPrice(newTotalPrice)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearFromCart = (cartItemsToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemsToClear))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearFromCart, cartItems, cartCount, totalPrice};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}