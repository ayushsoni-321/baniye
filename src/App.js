import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;