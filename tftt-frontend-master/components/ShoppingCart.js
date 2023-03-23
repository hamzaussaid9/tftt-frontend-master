import React from 'react';
import Link from 'next/link'
import ShoppingCartItem from '../components/ShoppingCartItem'

const ShoppingCart = ({ products, setproduct }) => {


    products.sort((a, b) => a.id - b.id);



    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return (
        <div className="shopping-cart p-4 m-2">
            <div className="container mx-auto ">
                <header className="flex justify-between items-center py-4">
                    <h1 className="text-3xl font-medium">Shopping Cart</h1>
                    <Link href="../store" className="bg-custom-whiteblue text-white py-2 px-4 rounded" >
                        Continue Shopping
                    </Link>
                </header>

                <table className="w-full text-left table-collapse border-collapse">

                    <thead>

                        <tr className="text-sm font-medium uppercase tracking-wide text-custom-darkgray">
                            <th className="py-4 border-b-2 border-custom-gray">Image</th>
                            <th className="py-4 border-b-2 border-custom-gray">Product</th>
                            <th className="py-4 border-b-2 border-custom-gray">Price</th>
                            <th className="py-4 border-b-2 border-custom-gray">Quantity</th>
                            <th className="py-4 border-b-2 border-custom-gray">Total</th>
                        </tr>
                    </thead>

                    <tbody>

                        {products.map(scitem => (
                            <ShoppingCartItem key={scitem.id} item={scitem} setproduct={setproduct} />
                        ))}
                    </tbody>

                </table>

                {products.length === 0 ? (
                    <div>
                        <p className="text-center py-4 text-gray-600 text-4xl text-bold">Your cart is empty.</p>
                        <p className="text-center py-4 text-gray-600">Come back when you have an item in your cart!</p>
                    </div>
                ) : (
                    <div>
                        {/* your existing HTML */}
                    </div>
                )}
                <footer className="flex justify-end py-8">
                    <div className="flex-col">
                        <div className="flex justify-between align-baseline">
                            <h2>Total: </h2>
                            <h2 className="mr-4 text-right">${total.toFixed(2)}</h2>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <h2>Estimated Shipping: </h2>
                            <h2 className="mr-4 text-right">$5.00</h2>
                        </div>
                        <div className="flex justify-between align-baseline">
                            <h2>Estimated Taxes: </h2>
                            <h2 className="mr-4 text-right">$0.00</h2>
                        </div>

                        <div className="flex justify-between align-baseline font-bold text-xl mr-4 border-t-black border-t">
                            <h3>Grand Total:</h3>
                            <h3 className="text-right ml-4">${(total + 5).toFixed(2)}</h3>
                        </div>


                    </div>

                    <button className="bg-custom-navygreen  mt-4 h-12 text-white py-1 px-2 rounded">Checkout</button>
                </footer>
            </div>
        </div>
    );
};

export default ShoppingCart;
