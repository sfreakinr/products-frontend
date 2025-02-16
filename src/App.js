import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import NavigationBar from "./components/Navbar";

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
}

export default App;
