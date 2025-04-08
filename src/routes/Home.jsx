import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/features/products/productsSlice";
import { add_product as add_cart_product } from "../store/features/cart/cartSlice";
import { add_product as add_wishlist_product } from "../store/features/wishlist/wishlistSlice";
import { add_item } from "../store/features/history/historySlice";

const Home = () => {
    const { productsData, wishlistData, cartData } = useSelector((state) => ({
        productsData: state.products,
        wishlistData: state.wishlist,
        cartData: state.cart,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        if (productsData.products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, productsData]);

    const handleAddToWishlist = (product) => {
        const history = {
            action: "Added to Wishlist",
            product: {
                id: product.id,
                title: product.title,
                image: product.image,
            },
            time: Date.now(),
        };

        dispatch(add_wishlist_product(product));
        dispatch(add_item(history));
    };
    const handleAddToCart = (product) => {
        const history = {
            action: "Added to Cart",
            product: {
                id: product.id,
                title: product.title,
                image: product.image,
            },
            time: Date.now(),
        };

        dispatch(add_cart_product(product));
        dispatch(add_item(history));
    };

    if (productsData.isLoading)
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                Data Loading.....
            </h3>
        );

    if (!productsData.isLoading && productsData.isError)
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                {productsData.error}
            </h3>
        );

    if (
        !productsData.isLoading &&
        !productsData.isError &&
        productsData.products.length === 0
    )
        return (
            <h3 className="text-center italic py-5 text-lg font-semibold">
                No Products to Show!
            </h3>
        );

    if (
        !productsData.isLoading &&
        !productsData.isError &&
        productsData.products.length > 0
    )
        return (
            <div className="grid grid-cols-3 gap-2 px-4">
                {productsData.products.map((product) => {
                    const addedToWishlist =
                        wishlistData.find((item) => item.id === product.id) !==
                        undefined;

                    const addedToCart =
                        cartData.find((item) => item.id === product.id) !==
                        undefined;

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
                                    <span className="italic">
                                        ${product.price}
                                    </span>
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
                                            addedToWishlist
                                                ? "cursor-not-allowed"
                                                : "cursor-pointer hover:bg-blue-400"
                                        }`}
                                        onClick={() =>
                                            handleAddToWishlist(product)
                                        }
                                        disabled={addedToWishlist}
                                        title={
                                            addedToWishlist
                                                ? "Already Added"
                                                : undefined
                                        }
                                    >
                                        Wishlist
                                    </button>
                                    <button
                                        className={`bg-blue-300 font-semibold rounded-lg px-4 py-2 ${
                                            addedToCart
                                                ? "cursor-not-allowed"
                                                : "cursor-pointer hover:bg-blue-400"
                                        }`}
                                        onClick={() => handleAddToCart(product)}
                                        disabled={addedToCart}
                                        title={
                                            addedToCart
                                                ? "Already Added"
                                                : undefined
                                        }
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

export default Home;
