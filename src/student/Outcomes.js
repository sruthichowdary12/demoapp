import React from 'react';
import './flashcard.css'
export default function Outcomes() {
  // Sample course outcomes
  const courseOutcomes = ['CO1', 'CO2', 'CO3', 'CO4'];

  return (
    <div>
      <h2>Course Outcomes</h2>
      <div className="flashcards-container">
        {/* Map over course outcomes and render each as a flashcard */}
        {courseOutcomes.map((co, index) => (
          <div key={index} className="flashcard">
            {/* Render course outcome */}
            <h3>{co}</h3>
            {/* You can add more details or styling here */}
          </div>
        ))}
      </div>
    </div>
  );
}
