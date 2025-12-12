import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1)
  }
  return <>
    <div className="container">
      <button style={{
        background: "red"
      }} onClick={handleDecrement}>decrement</button>
      <span>{count}</span>
      <button style={{
        background: "green"
      }} onClick={handleIncrement}>increment</button>
    </div>
  </>
}