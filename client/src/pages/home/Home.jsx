import React, { useState } from 'react';

const ObjectStateExample = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Carrot', category: 'Vegetable' },
    { id: 3, name: 'Bread', category: 'Bakery' }
  ]);

  const removeItem = (idToRemove) => {
    const updatedItems = items.filter(item => item.id !== idToRemove);
    setItems(updatedItems);
  };

  console.log(items);

  return (
    <div>
      <h2>List of Items</h2>
      <ul>
        {items.map(item => {
          if (item.id !== 2 ) {
            removeItem(item.id)
          }
          console.log(item);
        
    return <li key={item.id}>
            {item.name} - {item.category}
          </li>
})}
      </ul>
    </div>
  );
};

export default ObjectStateExample;
