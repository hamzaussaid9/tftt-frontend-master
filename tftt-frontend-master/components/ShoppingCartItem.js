import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function ShoppingCartItem({ item, setproduct }) {
    //console.log(item)

    const handleQuantityChange = (e, id) => {
        const updatedQuantity = parseInt(e.target.value);
        if (updatedQuantity > 0) {
            setproduct((prevState) =>
                prevState.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: updatedQuantity };
                    }
                    return item;
                })
            );
        } else {
            setproduct((prevState) => prevState.filter((item) => item.id !== id));
        }
    };



    return (

        <tr key={item.id} className="text-gray-700">

            <td className="py-4 border-b border-custom-gray">
                <div className="relative">

                    <Link href="http://127.0.0.1:8000/api/products/1/" >
                        <Image
                            className=''
                            src={item.i}
                            alt="Tri Tip"
                            width="64"
                            height="64"
                        />
                    </Link>

                    <span className="absolute h-5 w-5 left-12 bottom-14 flex items-center justify-center
                 text-sm bg-white border border-black px-1 py-0.5 rounded-full bg-opacity-95">{item.quantity}</span>

                </div>

            </td>

            <td className="py-4 border-b border-custom-gray"><Link href="http://127.0.0.1:8000/api/products/1/" >{item.name}</Link></td>
            <td className="py-4 border-b border-custom-gray">${item.price.toFixed(2)}</td>
            <td className="py-4 border-b border-custom-gray">

                <select className="form-select rounded bg-white text-gray-700 shadow border-black border"
                    value={item.quantity}
                    onChange={e => handleQuantityChange(e, item.id)}
                >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="btn bg-custom-blue text-xs ml-4 hover:bg-custom-whiteblue text-white font-bold py-1 px-1 rounded-full"
                    onClick={() => handleQuantityChange({ target: { value: 0 } }, item.id)}
                >
                    Remove
                </button>
            </td>
            <td className="py-4 border-b border-custom-gray">${(item.price * item.quantity).toFixed(2)}</td>

        </tr>

    )
}
