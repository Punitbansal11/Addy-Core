// src/pages/DietPlan.js
import React from "react";
import "../styles/DietPlan.css";

const DietPlan = () => {
  return (
    <div className="diet-plan-container">
      <h1 className="diet-heading">🥗 The Addy Core Fuel Plan</h1>

      <section className="meal-section">
        <h2>🥣 BREAKFAST <span className="kcal">(~350–400 kcal)</span></h2>
        <ul>
          <li>🥑 <strong>Avocado Toast</strong> (1 slice bread + ½ avocado + spices) → <em>~180 kcal</em></li>
          <li>🫐 <strong>Oats with Berries</strong> (40g oats + ¼ cup mixed berries + 1 tsp honey) → <em>~200 kcal</em></li>
        </ul>
        <p className="tip">✅ Clean carbs, healthy fats, fiber + antioxidants. A perfect ab-fuel breakfast.</p>
      </section>

      <section className="meal-section">
        <h2>🕘 MID-MORNING SNACK <span className="kcal">(~150–200 kcal)</span></h2>
        <ul>
          <li>🥜 <strong>Peanut Butter Toast</strong> → ~180 kcal</li>
          <li>🍫 <strong>Protein Yogurt + Dark Chocolate</strong> → ~160–170 kcal</li>
          <li>🍅 <strong>Hummus Toast with Sun-Dried Tomatoes</strong> → ~150 kcal</li>
          <li>🍵 <strong>Matcha + Berries</strong> → ~100–140 kcal</li>
        </ul>
      </section>

      <section className="meal-section">
        <h2>🍛 LUNCH <span className="kcal">(~400–500 kcal)</span></h2>
        <ul>
          <li>🍚 Rajma (Haldiram) + Rice (½ cup) → ~450 kcal</li>
          <li>🍛 Choley (Haldiram) + Rice (½ cup) → ~450 kcal</li>
          <li>🥣 Khichdi (moong dal + rice + veggies) → ~400 kcal</li>
          <li>🥗 Beetroot Avocado Salad + 1 toast → ~380 kcal</li>
          <li>🍝 Spaghetti + tomato-garlic-onion sauce + broccoli → ~450 kcal</li>
        </ul>
        <p className="tip">✅ Use light oil or spray. Flavor with herbs/spices.</p>
      </section>

      <section className="meal-section">
        <h2>💪 PRE-WORKOUT <span className="kcal">(~100–180 kcal)</span></h2>
        <ul>
          <li>🍌 ½ Banana + 1 tbsp Peanut Butter → ~160 kcal</li>
          <li>🍓 Berries + Peanut Butter (if banana unavailable) → ~130 kcal</li>
          <li>🍵 Matcha Energy Drink → ~100–120 kcal</li>
          <li>🥑 Toast + ½ Avocado or Hummus + SDT → ~150 kcal</li>
        </ul>
      </section>

      <section className="meal-section">
        <h2>🌙 DINNER <span className="kcal">(~400–500 kcal)</span></h2>
        <ul>
          <li>🍛 Rajma or Choley + ½ cup rice → ~450 kcal</li>
          <li>🍝 Spaghetti + garlic-tomato sauce + broccoli → ~450 kcal</li>
          <li>🥣 Moong Dal + Beetroot Salad → ~380–400 kcal</li>
          <li>🥦 Choley + Broccoli + 1 Ajwain Paratha → ~450–480 kcal</li>
          <li>🧀 Paneer Bhurji (80–100g) + 2 small Chapatis → ~500 kcal</li>
        </ul>
      </section>

      <section className="meal-section cheat">
        <h2>🎉 CHEAT MEAL <span className="kcal">(1x/week)</span></h2>
        <p className="tip">✅ One meal only, best if post-workout. Max ~500–600 kcal</p>
        <ul>
          <li>🍕 1 Medium Slice Pizza</li>
          <li>🍨 1 Scoop Ice Cream</li>
          <li>🥐 1 Croissant or 2 Small Pancakes</li>
          <li>🍝 1 Small Bowl Pasta</li>
          <li>🍱 6 pcs Sushi Roll</li>
          <li>🍰 1 Small Dessert Slice</li>
        </ul>
      </section>

      <section className="summary">
        <h3>🔁 DAILY TOTAL:</h3>
        <p>Calories: <strong>1600–1800</strong></p>
        <p>Protein: <strong>~85–100g</strong></p>
        <p>Carbs: <strong>Moderate & clean</strong></p>
        <p>Fats: <strong>Balanced</strong> (mostly healthy fats)</p>
        <p>Sugar: <strong>Minimal</strong> outside fruit/honey</p>
      </section>
    </div>
  );
};

export default DietPlan;
