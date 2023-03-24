import React, { useState } from 'react';
import FinishBot from '../FinishBot';

function CategoryBot({ onBack }) {
  const [category, setCategory] = useState('');
  const [action, setAction] = useState('');
  const [showFinish, setShowFinish] = useState(false);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleNextClick = () => {
    if (category && action) {
      setShowFinish(true);
    } else {
      alert("Please fill out both the category and action fields.");
    }
  };

  if (showFinish) {
    return <FinishBot />;
  }

  return (
    <div className="category-bot">
      <h2>Configure your bot</h2>
      <form>
        <label htmlFor="category">Select category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="Refund">Refund</option>
          <option value="Product Details">Product Details</option>
          <option value="Customer Support">Customer Support</option>
        </select>

        <label htmlFor="action">Select action:</label>
        <select id="action" value={action} onChange={handleActionChange}>
          <option value="">Select an action</option>
          <option value="Message">Message</option>
          <option value="Message and action">Message and action</option>
          <option value="Message and prompt user for a reply">Message and prompt user for a reply</option>
        </select>

        <div className="button-row">
          <button onClick={onBack}>Back</button>
          <button type="button" onClick={handleNextClick}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default CategoryBot;

