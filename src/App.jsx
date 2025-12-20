import { useState } from 'react'
import './App.css'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import OrderSuccess from './components/OrderSuccess'

function App() {
  const [count, setCount] = useState(0)
 const [page, setPage] = useState("home");
  return (
    <>
        {page === "home" && <Home setPage={setPage} />}
      {page === "order" && <OrderForm setPage={setPage} />}
      {page === "success" && <OrderSuccess />}
      
    </>
  )
}

export default App
