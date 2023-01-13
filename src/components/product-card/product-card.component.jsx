import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { ProductCardContainer, Footer, Name, Price, Image, AddToCartButton } from './product-card.styles'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <AddToCartButton buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to cart</AddToCartButton>
        </ProductCardContainer>
    )
}

export default ProductCard;