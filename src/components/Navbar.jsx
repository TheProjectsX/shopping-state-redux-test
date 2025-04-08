import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const { cartData, wishlistData, historyData } = useSelector((state) => ({
        cartData: state.cart,
        wishlistData: state.wishlist,
        historyData: state.history,
    }));

    return (
        <nav className="shadow mb-5 rounded-b-2xl px-4 py-3 flex items-center justify-between gap-3">
            <Link
                className="font-semibold font-serif hover:text-amber-700"
                to="/"
            >
                FakeStore
            </Link>
            <ul className="flex items-center justify-center [&_.active]:underline">
                <li>
                    <NavLink
                        to="/wishlist"
                        className="px-2 hover:underline underline-offset-4 font-semibold"
                    >
                        Wishlist {wishlistData.length}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cart"
                        className="px-2 hover:underline underline-offset-4 font-semibold"
                    >
                        Cart {cartData.length}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/history"
                        className="px-2 hover:underline underline-offset-4 font-semibold"
                    >
                        History {historyData.length}
                    </NavLink>
                </li>
            </ul>
            <div>
                <figure className="overflow-hidden rounded-full w-10 h-10 border-2 p-0.5 hover:scale-110 transition-transform cursor-pointer">
                    <img
                        src="https://i.ibb.co.com/tQ1tBdV/dummy-profile-picture.jpg"
                        alt="Dummy Profile"
                        className="rounded-full"
                    />
                </figure>
            </div>
        </nav>
    );
};

export default Navbar;
