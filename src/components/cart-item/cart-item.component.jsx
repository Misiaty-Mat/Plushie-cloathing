import { CartItemContainer, ItemDetails, Property } from './cart-item.styles'

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name} />
            <ItemDetails>
                <Property>{name}</Property>
                <Property>{quantity} x ${price}</Property>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem