import './App.css';
import * as React from 'react';
import { getPizzas } from './modules/pizza/actions';
import { useDispatch } from 'react-redux';
import { getOrder } from './modules/order/actions';
import OrderPage from './modules/order/components';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getPizzas(dispatch);
    getOrder(dispatch);
  }, [dispatch]);

  return (
    <OrderPage />
  )
}

export default App;
