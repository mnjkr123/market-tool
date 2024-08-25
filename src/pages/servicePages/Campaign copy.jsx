import React, { useState } from 'react';
import '../../assets/css/campaign.css';


function Campaign() {
  const [formInput, setFormInput] = useState('');
  const [ageOption, setAgeOption] = useState('Kid');
  const [taskTypeOption, setTaskTypeOption] = useState('Write a sales copy');
  const [industry, setIndustry] = useState('Technology');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: formInput, ageOption, taskTypeOption, industry }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Campaign">
      <header>
        <img src="/marketing-image.jpg" alt="Marketing Tool" className="Campaign-header-image" />
      </header>
      <form onSubmit={handleSubmit} className="Campaign-form">
        <textarea
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
          placeholder="Enter text"
          rows="10"
          cols="50"
          className="Campaign-textarea"
        />
        <div className="selectors-container">
          <div className="select-container">
            <label className="Campaign-label">Action:</label>
            <select
              value={taskTypeOption}
              onChange={(e) => setTaskTypeOption(e.target.value)}
              className="Campaign-select"
            >
              <option>Write a sales copy</option>
              <option>Create a tweet</option>
              <option>Write a product description</option>
              <option>Email campaign</option>
              <option>Social media ad</option>
              <option>Blog post</option>
              <option>Landing page</option>
              <option>Video script</option>
              <option>Infographic</option>
              <option>Case study</option>
              <option>White paper</option>
              <option>Press release</option>
              <option>Website copy</option>
              <option>Product review</option>
              <option>Sales proposal</option>
              <option>Brochure and flyer</option>
              <option>Webinar and workshop</option>
              <option>Customer testimonial</option>
              <option>Interactive content</option>
              <option>Promotional offer</option>
            </select>
          </div>
          <div className="select-container">
            <label className="Campaign-label">Age Group:</label>
            <select
              value={ageOption}
              onChange={(e) => setAgeOption(e.target.value)}
              className="Campaign-select"
            >
              <option>Kid</option>
              <option>Adult</option>
              <option>Senior Citizen</option>
            </select>
          </div>
          <div className="select-container">
            <label className="Campaign-label">Industry:</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="Campaign-select"
            >
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Retail</option>
              {/* Add other options here */}
            </select>
          </div>
        </div>
        <button type="submit" className="Campaign-button">Generate</button>
      </form>
      <div className="response-box">
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Campaign;

