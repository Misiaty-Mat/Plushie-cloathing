import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { 
    CheckoutItemContainer, 
    ImageContainer, 
    Image, 
    Property, 
    PropertyValue, 
    Quantity, 
    ArrowContainer, 
    RemoveButton 
} from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
    const { clearFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

    const { name, imageUrl, price, quantity } = cartItem

    const clearFromCartHandler = () => clearFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Property>{name}</Property>
            <Quantity>
                <ArrowContainer onClick={removeItemHandler}>
                    &#10094;
                </ArrowContainer>
                <PropertyValue>{quantity}</PropertyValue>
                <ArrowContainer onClick={addItemHandler}>
                    &#10095;
                </ArrowContainer>
            </Quantity>
            <Property>{price}</Property>
            <RemoveButton onClick={clearFromCartHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem