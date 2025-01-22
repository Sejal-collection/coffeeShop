// src/Pages/Feedback.js
import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [visitType, setVisitType] = useState('dine-in');
  const [followUp, setFollowUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the feedback data
    console.log({
      rating,
      comments,
      name,
      email,
      date,
      visitType,
    });
    // Clear form
    setRating(0);
    setComments('');
    setName('');
    setEmail('');
    setDate('');
    setVisitType('dine-in');
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="label">Rating: </label>
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} max={5} min={1} />
        </div>
        <div className="form-field">
          <label className="label">Comments: </label>
          <textarea className="textarea" value={comments} onChange={(e) => setComments(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="label">Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="label">Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="label">Date of Visit: </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-field">
          <label className="label">Visit Type: </label>
          <select value={visitType} onChange={(e) => setVisitType(e.target.value)}>
            <option value="dine-in">Dine-In</option>
            <option value="take-out">Take-Out</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
        <button className="btn" type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
