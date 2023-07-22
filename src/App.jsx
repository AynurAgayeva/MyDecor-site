import Home from "./components/Home";
import Shop from "./components/Shop";
import ImageCards from "./components/ImageCards";
import Logo from "./components/Logo";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Contact from './components/Contact'
import Cart from "./components/Cart";
import Posts from "./components/Posts";
// import Error from "./components/Error";
import {ProductProvider} from '../src/context/ProductContext';
import ProductDetails from '../src/components/ProductDetails'
import CheckOut from "./components/CheckOut";
import Review from "./components/Review";
import NotFoundPage from "./components/NotFoundPage";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import WishList from "./components/WishList";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <WishlistProvider>
          <CartProvider>
            <ProductProvider>
              <Home />
              <Routes>
                <Route path="/" element={<ImageCards />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                {/* <Route path="/shop/*" element={<Error />}></Route> */}
                <Route path="/product" element={<Product />}></Route>
                <Route
                  path="/product/:url"
                  element={<ProductDetails />}
                ></Route>
                <Route path="/loginform" element={<LoginForm />}></Route>
                <Route path="/wishlist" element={<WishList />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={<Cart />}></Route>

                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/checkout" element={<CheckOut />}></Route>
                <Route path="/review" element={<Review />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
       
              </Routes>

              <Logo />
              <Posts />
              <Footer />
            </ProductProvider>
          </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
