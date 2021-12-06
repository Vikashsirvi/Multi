import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </div>
  );
}

export default App;

//our-domain.com/ => Component Welcome
//our-domain.com/products => Component Products
