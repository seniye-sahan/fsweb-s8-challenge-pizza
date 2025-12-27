import { useState } from 'react'
import './App.css'
import OrderForm from './components/OrderForm'
import Home from './components/Home'
import OrderSuccess from './components/OrderSuccess'
import OrderSuccess2 from './components/OrderSuccess2'
import Home2 from './components/Home2'

function App() {
  const [count, setCount] = useState(0)
 const [page, setPage] = useState("home");
  return (
    <>
    <Home2/>
        {/*page === "home" && <Home setPage={setPage} />*/}
      {/*page === "order" && <OrderForm setPage={setPage} />*/}
      {/*page === "success" && <OrderSuccess />*/}
      
    </>
  )
}

export default App
