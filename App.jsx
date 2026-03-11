import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/success" element={<Confirmation />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;