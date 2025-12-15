import { useState } from 'react'
import './App.css'
import OrderForm from './components/OrderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <OrderForm/>
    </>
  )
}

export default App
