import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Singleproduct from "./pages/Singleproduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route excat path="/" Component={Home} />
          <Route path="/women" Component={Women} />
          <Route path="/man" Component={Men} />
          <Route path="/products/:productId" Component={Singleproduct} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
