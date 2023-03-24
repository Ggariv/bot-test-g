import React, { useState } from 'react';
import CategoryBot from '../BotPart2';

function ConfigureBot({ onCancel, onSubmit }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [currentStep, setCurrentStep] = useState('configure');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (category && name) {
        onSubmit({ name, category });
      } else {
        alert("Please fill out both the category and name fields.");
      }
    };
  
    const handleNextClick = (event) => {
      event.preventDefault();
      if (category && name) {
        setCurrentStep('category');
      } else {
        alert("Please fill out both the category and name fields.");
      }
    };
  
    if (currentStep === 'configure') {
      return (
        <div className="configure-bot">
          <h2>Configure your bot</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">Messenger:</label>
            <select id="category" value={category} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="skype">Skype</option>
              <option value="wechat">WeChat</option>
              <option value="other">Other</option>
            </select>
  
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={name} onChange={handleNameChange} />
  
            <div className="button-row">
              <button onClick={onCancel}>Back</button>
              <button onClick={handleNextClick}>Next</button>
            </div>
          </form>
        </div>
      );
    } else if (currentStep === 'category') {
      return (
        <CategoryBot
          onBack={() => setCurrentStep('configure')}
          onSubmit={(data) => console.log(data)}
        />
      );
    }
  }
  
  export default ConfigureBot;