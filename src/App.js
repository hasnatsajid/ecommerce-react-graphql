import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home';

const Shop = () => {
  return <h1>Shop page here</h1>;
};

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am navigaton</h1>
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
