import { useState } from 'react'
import './App.css'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import OrderSuccess from './components/OrderSuccess'
import OrderSuccess2 from './components/OrderSuccess2'
import Home2 from './components/Home2'
import OrderForm2 from './components/OrderForm2'

function App() {
  const [page, setPage] = useState("home");
  const [orderData, setOrderData] = useState(null);

  return (
    <>
  {page === "home" && <Home2 setPage={setPage} />}
{page === "order" && (
  <OrderForm2 setPage={setPage} setOrderData={setOrderData} />
)}
{page === "success" && <OrderSuccess2 order={orderData} />}

    </>
  );
}

export default App;

