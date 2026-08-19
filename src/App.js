import Navigation from "./routes/navigation/navigation.compnet";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.componet";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
