import './App.css';
import Header from './Components/Header';
import Productspage from './Components/Productspage';
import CartPage from './Components/CartPage';
import Pagenotfound from './Components/Pagenotfound';
import { Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Productspage />}/>
        <Route path='/cart' element={<CartPage />} />
        <Route path="/404" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
