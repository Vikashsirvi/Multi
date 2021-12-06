import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";
function App() {
  return (
    <div>
      <MainHeader />
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
