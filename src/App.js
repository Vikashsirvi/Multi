import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductsDetails";
import Welcome from "./Pages/Welcome";
function App() {
  return (
    <div>
      <MainHeader />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//our-domain.com/ => Component Welcome
//our-domain.com/products => Component Products
