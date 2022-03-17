import React, { useState } from 'react';
import Item from "./Item";

function ShoppingList({ items }) {
  const [foods, setFoods] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleFilterChange(event) {
    console.log(event.target.value)
  }
  
  const foodsToDisplay = foods.filter((food) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return food.name
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
