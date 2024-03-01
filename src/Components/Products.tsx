import React from 'react';

export default function ShoppingList() {
    interface Product {
        title: string;
        isFruit: boolean;
        id: number;
    }
    
    const products: Product[] = [
        { title: 'cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];
    
    return (
        <ul>
            {
            products.map(product => (
                <li
                    key={product.id}
                    style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
                >
                    {product.title}
                </li>
            ))
            }
        </ul>
    );
}
