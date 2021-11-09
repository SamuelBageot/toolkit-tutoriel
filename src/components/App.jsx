import { Routes, Route, Navigate } from 'react-router-dom';
import Product from './Products/Product/Product';
import Products from './Products/Products';
import Profile from './Profile/Profile';

const App = () => {

    const user = false;

    return (
        <Routes>
            <Route path="/" element={<Products />} exact />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
            <Route path="/:productId" element={<Product />} />
        </Routes>
    )
};

export default App;