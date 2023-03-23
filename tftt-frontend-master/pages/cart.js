import React, { useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import tt9 from '../public/assets/tt9.jpg'
import tt8 from '../public/assets/tt8.jpg'
import tt7 from '../public/assets/tt7.jpg'
import tt6 from '../public/assets/tt6.jpg'
import tt5 from '../public/assets/tt5.jpg'
import tt4 from '../public/assets/tt4.jpg'
import tt3 from '../public/assets/tt3.jpg'
import tt2 from '../public/assets/tt2.jpg'
import tt1 from '../public/assets/santatritip.jpg'
import FeaturedItemsList from '../components/FeaturedItemsList'
import data from '../public/testData/test_products'


export default function Cart() {

    const addProduct = (product) => {
        const existingProduct = products.find(p => p.id === product.id);
        if (existingProduct) {
            window.alert(`${product.name} is already in the cart!`);
        } else {
            window.alert(`${product.name} has been added to the cart.`);
            setproduct([...products, { ...product, quantity: 1 }]);
        }
    };



    const [products, setproduct] = useState([
        { id: 1, name: 'Product 1', i: tt1, price: 10.00, quantity: 2 },
        { id: 2, name: 'Product 2', i: tt2, price: 30.00, quantity: 1 },
        { id: 4, name: 'Product 4', i: tt4, price: 40.00, quantity: 1 },
        { id: 5, name: 'Product 5', i: tt5, price: 50.00, quantity: 1 }
    ]);

    const [fi, setFi] = useState([
        {
            id: 1,
            name: 'Product 1',
            image_url: tt1,
            price: 10.00,
            quantity: 2
        },
        {
            id: 2,
            name: 'Product 2',
            image_url: tt2,
            price: 30.00,
            quantity: 1
        },
        {
            id: 3,
            name: 'Product 3',
            image_url: tt3,
            price: 30.00,
            quantity: 1
        },
        {
            id: 4,
            name: 'Product 4',
            image_url: tt4,
            price: 40.00,
            quantity: 1
        },
        {
            id: 5,
            name: 'Product 5',
            image_url: tt5,
            price: 50.00,
            quantity: 1
        }

    ]);


    return (


        <div className="container mx-auto">

            <ShoppingCart products={products} setproduct={setproduct} />

            <FeaturedItemsList products={fi} addProduct={addProduct} />

        </div>
    )

}
