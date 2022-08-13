import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/home';
import SignIn from './routes/sign-in/signIn';

const Shop = () => {
  return <h1>Shop page here</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
