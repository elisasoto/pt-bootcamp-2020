import { useState } from 'react'
function Counter() {
  const [value, setValue] = useState(0)
  function substract() {
    setValue(value - 1)
  }

  const add = () => {
      setValue(value +1)
  }

  return (
    <div data-testid="counter">
      <h2>
        Counter: <span data-testid="counter-value">{value}</span>
      </h2>
      <div>
        <button data-testid="substract" onClick={substract}>Substract</button>
        <button data-testid="add"  onClick={add}>Add</button>
      </div>
    </div>
  );
}
export default Counter;