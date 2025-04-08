import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";

import { Routes, Route } from "react-router";
import Wishlist from "./routes/Wishlist";
import Cart from "./routes/Cart";
import History from "./routes/History";

const App = () => {
    const PageRoutes = (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/history" element={<History />} />
        </Routes>
    );

    return (
        <div className="container mx-auto shadow-2xl min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>

            {/* Items to Show */}
            <main className="flex-1">{PageRoutes}</main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default App;
