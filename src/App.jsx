import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthModal from "./Componets/AuthModal/AuthModal";
import { Footer } from "./Componets/Footer/Footer";
import { Hero } from "./Componets/Hero/Hero";
import { Navbar } from "./Componets/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ProductDteil from "./Pages/Deteil/ProductDteil";
import CheckoutPage from "./Pages/Checkoutpage/Checkoutpage";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";
import InfoPage from "./Pages/InfoPage/InfoPage";
import ComparePage from "./Pages/ComparePage/ComparePage";
import Wishlist from "./Pages/Wishlist/Wishlist";
import SingUp from "./Pages/Home/Register/SingUp/SingUp";
import Login from "./Pages/Home/Register/Login/Login";
import { useEffect, useState } from "react";
import { getProducts } from "./Sevices/App";
import { Toaster } from "sonner";
import Cart from "./Pages/Cart/Cart";
function App() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading]=useState(true)
  const [searchResults, setSearchResults] = useState([]);
const [wishlist, setWishlist] = useState([]);
const [cart,setCart]=useState([])

const [compare,setCompare]=useState([])

const toggleCompare  = ((product)=>{
  const isCompared = compare.some((item)=>item.id === product.id)

  if (isCompared) {
    setCompare(compare.filter((item)=>item.id !== product.id))
    
  } else{
    setCompare([...compare,product])
  }

})
const addToCart =((product)=>{
const exists = cart.some((item)=>item.id === product.id)  
if (exists) {
  setCart(
    cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )

  );
}else{
  setCart([...cart ,{...product ,quantity: 1}])
}
})
const toggleWishlist = (product) => {
  const exists = wishlist.some((item) => item.id === product.id);

  if (exists) {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  } else {
    setWishlist([...wishlist, product]);
  }
};
  const filterData = (text) => {
    const filtered = products.results.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(filtered);
  };
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false)
    });

  }, []);
  return (
    <>
    <Toaster position="top-center"  expand={false} richColors duration={2000}/>
      <Navbar filterData={filterData}  />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home   toggleWishlist={toggleWishlist}  wishlist={wishlist} addToCart={addToCart} toggleCompare={toggleCompare}/>
            </>
          }
        />
        <Route path="/Checkout" element={<CheckoutPage  cart={cart} loading={loading}/>} />
        <Route path="/category/:id" element={<ProductsPage  toggleWishlist={toggleWishlist} toggleCompare={toggleCompare} wishlist={wishlist}  addToCart={addToCart} />} />
        <Route path="/Deteil/:id" element={<ProductDteil />} />
        <Route
          path="/search"
          element={<SearchResultsPage searchResults={searchResults} toggleCompare={toggleCompare}  toggleWishlist={toggleWishlist} wishlist={wishlist} addToCart={addToCart}  />}
        />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/ComparePage" element={<ComparePage compere={compare} products={products } toggleCompare={toggleCompare} wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart}/>} />
        <Route path="/Wishlist" element={<Wishlist products={products } toggleCompare={toggleCompare} loading={loading} toggleWishlist={toggleWishlist}  wishlist={wishlist} addToCart={addToCart}/>}  />
        <Route path="/SingUp" element={<SingUp />} />

        <Route path="/Login" element={<Login />} />
<Route path="/Cart" element={<Cart cart={cart} wishlist={wishlist} toggleCompare={toggleCompare}  toggleWishlist={toggleWishlist} addToCart={addToCart} />} />      </Routes>
      <AuthModal />
      <Footer />
    </>
  );
}

export default App;