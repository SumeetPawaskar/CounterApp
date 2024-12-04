
import React, { useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);

  
  const increment = () => setCount(count + 1);

  
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      {/* Displaying the count value */}
      <h2>Count: {count}</h2>

      {/* Increment button */}
      <button onClick={increment}>Increment</button>

      {/* Decrement button */}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
