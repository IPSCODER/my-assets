import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [visible,setVisble] = useState(false)

  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Bread', category: 'Bakery' },
    { id: 4, name: 'Mango', category: 'Fruit' }
  ]);

  const incrementCount = () => {
    // Using functional update to ensure correct state transition
    setCount(prevCount => prevCount + 1);
  };

  const ids = (id) =>{
    console.log(id,"ids");
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  const removeEvent = (id) =>{
    if (id !== 2) {
      const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    console.log(items);
    }
  }

  // const incrementCountMultipleTimes = () => {
  //   const secondItems = [...items]
  //   // Example of updating state step by step
  //   for (let i = 0; i < items.length; i++) {
  //     // Use setTimeout or some delay mechanism if needed
  //     setTimeout(() => {
  //       ids(i + 1);
  //       setCount(prevCount => prevCount + 1);
  //     }, i * 1000); // Change time interval as per requirement
  //   }
  // };


  return (
    <div>
      <p>Count: {count}</p>
      <hr/>
      {items.map((item)=>(
        <React.Fragment key={item.id}>
        <h1 >{item.name}:{item.category}</h1>
        <button onClick={() => setVisble(true)} >Remove Upper</button>
        {visible && <button onClick={removeEvent(item.id)} className='invisible fixed -top-50 w-0 h-0' >Remove</button>}
        </React.Fragment>
      ))}
      <hr/>
      <button onClick={incrementCount}>Increment</button>
      <hr/>
      {/* <button onClick={incrementCountMultipleTimes}>Increment Multiple Times</button> */}
    </div>
  );
}

export default Counter;
