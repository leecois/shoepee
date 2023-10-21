import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsData } from "../Product/ProductsData";
import { resetCart, addToCart, increaseQuantity, decreaseQuantity, deleteItem } from "./cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    const products = productsData;
    const [totalAmt, setTotalAmt] = useState(0);
    const [shippingCharge, setShippingCharge] = useState(0);
    const [shippingOption, setShippingOption] = useState(0); // Giá trị mặc định


    useEffect(() => {
        let price = 0;
        products.forEach((item) => {
            price += item.price * 1;
        });
        setTotalAmt(price);
    }, [products]);


    useEffect(() => {
        if (shippingOption === 0) {
            setShippingCharge(0);
        } else if (shippingOption === 1) {
            setShippingCharge(10);
        } else if (shippingOption === 2) {
            setShippingCharge(100);
        }
    }, [shippingOption])

    const handleShippingOptionChange = (event) => {
        const newShippingOption = parseInt(event.target.value); // Chuyển đổi giá trị thành số nguyên
        setShippingOption(newShippingOption);
    };

    if (products.length === 0) {
        return <div className=' h-[55vh] flex justify-center items-center text-4xl '>Cart is Empty</div>
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="flex my-10 rounded-md bg-[#f1f2f3]">
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl font-bold">SHOPPING CART</h1>
                        <h2 className="font-semibold text-2xl">{products.length} Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Brand</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Size</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                    </div>
                    {
                        products?.map(cart => {
                            return (
                                <div className="flex items-center hover:bg-[#f1f2f3] -mx-8 px-6 py-5">
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={cart.imageUrl} alt={cart.name} />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-xl">{cart.name}</span>
                                            <div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => dispatch(deleteItem(cart.id))}>REMOVE</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <div className="mx-2  text-center w-8" >{cart.brand} </div>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">{cart.size}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">{cart.price}$</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">{cart.price}$</span>
                                </div>
                            )
                        })
                    }
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">ORDER SUMMARY</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase"> {products.length} Items</span>
                        <span className="font-semibold text-sm">{totalAmt}$</span>
                    </div>
                    <div>

                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select
                            value={shippingOption}
                            onChange={handleShippingOptionChange}
                            className="block p-2 text-gray-600 w-full text-sm">
                            <option value={0}>Select Shipping Option</option>
                            <option value={1}>Standard shipping - $10.00</option>
                            <option value={2}>Express shipping - $100.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-black px-5 py-2 text-bold text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-light justify-between py-3 text-sm uppercase">
                            <span>Shipping Charge</span>
                            <span>${shippingCharge}</span>
                        </div>
                        <div className="flex font-semibold justify-between py-3 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${(totalAmt + shippingCharge)}</span>
                        </div>
                        <button className=" bg-[#c9192e] font-semibold  py-3 text-sm text-white uppercase w-full">Checkout ({products.length})</button>
                        <Link to={'/'} className="flex font-semibold text-indigo-600 text-sm mt-10 justify-center">
                            <svg className=" fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;