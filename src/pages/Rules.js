import React, { useState } from 'react';
import './Rules.css'; // Optional external styling if you want to separate
import '@fontsource/patrick-hand'; // Ensure the PatrickHand font is loaded

const Rules = () => {
  const [agreed, setAgreed] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const handleCheckbox = () => setAgreed(!agreed);

  const handleButtonClick = () => {
    if (agreed) {
      setMessageVisible(true);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'PatrickHand', lineHeight: '1.8' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
        💌 Addy Core Rules – Read This or You Owe Me 10 Pushups and 50 Pounds
      </h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>This Ain’t a Clinic, Babe</strong><br />No effort = no abs. This program won’t crawl out of your phone and work out for you 🏋🏽‍♀️</li>
        <li><strong>If You Ghost the Plan, Don’t Blame the Results</strong><br />One skipped day becomes three. Three becomes “I’ll start Monday.” Nah, you won’t.</li>
        <li><strong>Calories Don’t Count Themselves</strong><br />Be real with your food logs. That “tiny bite” of cake still counts. Your body knows. I know. God knows. 🍰</li>
        <li><strong>Glow Up Energy Only</strong><br />If you’re here to compare, complain, or cheat — exit stage left. This space is for growth, not gossip ✨</li>
        <li><strong>Hydrate or You’re Just Faking Fitness</strong><br />You can’t run on iced coffee alone (trust me, I tried). Drink. Your. Water. 💧</li>
        <li><strong>Built This Site with Zero Sleep and 100% Sass</strong><br />This site was handcrafted by a guy who hasn’t slept more than 4 hours a night while building it — with coffee in his veins and final-final.js in his tabs. Respect the code. Respect the crusty eyes.</li>
        <li><strong>📝 The 20-Page Abs Plan She Ghosted</strong><br />I made her a 20-page abs transformation manual – full of step-by-step workouts, motivation boosters, daily checklists, even a tick-off calendar. Plot twist: she couldn’t do a full push-up, skipped the plan in a week, and ghosted the diet like it was an ex. So if you’re here to follow her fitness path… just know, that path is mostly “I’ll start tomorrow.”</li>
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <label>
          <input type="checkbox" checked={agreed} onChange={handleCheckbox} />
          <span style={{ marginLeft: '0.5rem' }}>I agree to all the above terms and will not ghost the grind</span>
        </label>
      </div>

      {/* Show the button if user agrees */}
      {agreed && (
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '10px 20px',
              fontSize: '1.2rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            You're all set. Time to crush it!
          </button>
        </div>
      )}

      {/* Show the confirmation message after button click */}
      {messageVisible && (
        <div style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#28a745' }}>
          You’ve accepted the terms. No turning back now—let’s crush it!
        </div>
      )}
    </div>
  );
};

export default Rules;
