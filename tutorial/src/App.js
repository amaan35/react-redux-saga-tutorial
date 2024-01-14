import './App.css';
import { addToCart } from './redux/action'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const product = {
    name: 'android phone',
    type: 'mobile',
    price: '10000'
  }
  return (
    <div className="App">
      <h1>App component</h1>
      <button onClick={()=>dispatch(addToCart(product))}>add to cart</button>      
    </div>
  );
}

export default App;
