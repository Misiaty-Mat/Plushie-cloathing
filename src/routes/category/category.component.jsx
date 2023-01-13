import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoryMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoryMap[category]);

    useEffect(() => {
        setProducts(categoryMap[category]);
    }, [category, categoryMap])

    return (
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryContainer>
                { products &&
                    products.map((product) => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;