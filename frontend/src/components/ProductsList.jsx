import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({ products, onEdit, onDelete }) => {
    if (!products || products.length === 0) {
        return <div className="empty">Товаров пока нет</div>;
    }

    return (
        <div className="list">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ProductsList;