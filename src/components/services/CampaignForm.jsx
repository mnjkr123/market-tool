import React, { useState } from 'react';
import '../../assets/css/campaign.css'; // Ensure correct path
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';

const CampaignForm = () => {
    const [formInput, setFormInput] = useState('');
    const [ageOption, setAgeOption] = useState('Children');
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
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="campaign" title1="Enhance Your Marketing" title2="With Our Campaign Tool" />
            <div className="container campaign-form-container">
                <h1 style={{ fontWeight: 'bold', fontSize: '1.5em', backgroundColor: 'blue', color: 'white', textAlign: 'center', padding: '10px' }}>Marketing Tool</h1>

                <form onSubmit={handleSubmit} className="campaign-form">
                    <textarea
                        value={formInput}
                        onChange={(e) => setFormInput(e.target.value)}
                        placeholder="Enter text"
                        rows="3"
                        cols="50"
                        className="campaign-textarea"
                    />
                    <div className="selectors-container">
                        <div className="select-container">
                            <label className="campaign-label">Action:</label>
                            <select
                                value={taskTypeOption}
                                onChange={(e) => setTaskTypeOption(e.target.value)}
                                className="campaign-select"
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
                            <label className="campaign-label">Age Group:</label>
                            <select
                                value={ageOption}
                                onChange={(e) => setAgeOption(e.target.value)}
                                className="campaign-select"
                            >
                                <option>Children</option>
                                <option>Teenagers</option>
                                <option>Young Adults</option>
                                <option>Middle-Aged Adults</option>
                                <option>Seniors</option>
                            </select>
                        </div>
                        <div className="select-container">
                            <label className="campaign-label">Industry:</label>
                            <select
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                className="campaign-select"
                            >
                                <option>Technology</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                                <option>Education</option>
                                <option>Retail</option>
                                <option>Real Estate</option>
                                <option>Manufacturing</option>
                                <option>Automotive</option>
                                <option>Telecommunications</option>
                                <option>Travel and Hospitality</option>
                                <option>Food and Beverage</option>
                                <option>Entertainment</option>
                                <option>Pharmaceuticals</option>
                                <option>Construction</option>
                                <option>Energy</option>
                                <option>Aerospace</option>
                                <option>Logistics</option>
                                <option>Media</option>
                                <option>Professional Services</option>
                                <option>Utilities</option>
                                <option>Consumer Goods</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="campaign-button">Generate</button>
                </form>
                <div className="campaign-response-box">
                    <h2 className="campaign-response-title">Response:</h2>
                    <p className="campaign-response-text">{response}</p>
                </div>
            </div>
            <FooterV1 />
        </>
    );
};

export default CampaignForm;


