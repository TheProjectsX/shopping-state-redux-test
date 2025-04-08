import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove_product } from "../store/features/wishlist/wishlistSlice";
import { add_product as add_curt_product } from "../store/features/cart/cartSlice";

const Wishlist = () => {
    const wishlistData = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    const handleRemoveFromList = (product) => {
        const payload = { id: product.id };
        dispatch(remove_product(payload));
    };

    const handleAddToCart = (product) => {
        const payload = { id: product.id };
        dispatch(remove_product(payload));
        dispatch(add_curt_product(product));
    };

    if (wishlistData.length === 0) {
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                No Item on Wishlist
            </h3>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-2 px-4">
            {wishlistData.map((product) => {
                return (
                    <div
                        key={product.id}
                        className="rounded-t-2xl shadow overflow-hidden"
                    >
                        <div className="hover:scale-110 transition-transform mb-3 h-70 flex justify-center items-center">
                            <img
                                src={product.image}
                                alt="Product Image"
                                className="max-w-50 h-full"
                            />
                        </div>

                        <div className="px-4">
                            <h3 className="text-lg font-semibold line-clamp-1">
                                {product.title}
                            </h3>
                            <p className="mb-2">
                                Price:{" "}
                                <span className="italic">${product.price}</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span>{product.rating.rate}</span>
                                <span>-</span>
                                <span>{product.rating.count}</span>
                            </p>

                            <div className="border-t-2 h-0 my-4 border-dashed"></div>

                            <div className="flex items-center justify-around mb-5">
                                <button
                                    className={`bg-blue-300 font-semibold rounded-lg px-4 py-2 ${
                                        false
                                            ? "cursor-not-allowed"
                                            : "cursor-pointer hover:bg-blue-400"
                                    }`}
                                    onClick={() =>
                                        handleRemoveFromList(product)
                                    }
                                >
                                    Remove
                                </button>
                                <button
                                    className={`bg-blue-300 font-semibold rounded-lg px-4 py-2 ${
                                        false
                                            ? "cursor-not-allowed"
                                            : "cursor-pointer hover:bg-blue-400"
                                    }`}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Wishlist;
