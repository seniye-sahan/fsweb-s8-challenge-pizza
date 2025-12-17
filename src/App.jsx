import { useState } from 'react'
import './App.css'
import OrderForm from './components/OrderForm'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)
 const [page, setPage] = useState("home");
  return (
    <>

      {page === "home" && <Home setPage={setPage} />}
      {page === "order" && <OrderForm setPage={setPage} />}
    </>
  )
}

export default App
