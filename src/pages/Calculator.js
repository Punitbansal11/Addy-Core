import React, { useState, useEffect } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {
  // State variables
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(165);
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [goal, setGoal] = useState('maintain');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // Calculate results when all inputs are provided
  useEffect(() => {
    if (gender && age && weight && height && activityLevel && goal) {
      calculateNutrition();
    }
  }, [gender, age, weight, height, activityLevel, goal]);

  // Calculate BMR using Mifflin-St Jeor Equation
  const calculateBMR = () => {
    if (gender === 'female') {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    }
  };

  // Calculate nutrition based on inputs
  const calculateNutrition = () => {
    const bmr = calculateBMR();
    
    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityMultipliers[activityLevel];
    
    // Adjust calories based on goal
    let targetCalories = tdee;
    if (goal === 'lose') {
      targetCalories = tdee - 500; // 500 calorie deficit for weight loss
    } else if (goal === 'gain') {
      targetCalories = tdee + 500; // 500 calorie surplus for weight gain
    }
    
    // Calculate macronutrients
    let proteinPercentage, carbPercentage, fatPercentage;
    
    if (goal === 'lose') {
      proteinPercentage = 0.35; // 35% protein for weight loss
      fatPercentage = 0.35; // 35% fat
      carbPercentage = 0.3; // 30% carbs
    } else if (goal === 'gain') {
      proteinPercentage = 0.3; // 30% protein for muscle gain
      carbPercentage = 0.45; // 45% carbs
      fatPercentage = 0.25; // 25% fat
    } else { // maintain
      proteinPercentage = 0.3; // 30% protein
      carbPercentage = 0.4; // 40% carbs
      fatPercentage = 0.3; // 30% fat
    }
    
    // Calculate grams of each macronutrient
    const proteinGrams = Math.round((targetCalories * proteinPercentage) / 4);
    const carbGrams = Math.round((targetCalories * carbPercentage) / 4);
    const fatGrams = Math.round((targetCalories * fatPercentage) / 9);
    
    // Store results
    setResults({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      calories: Math.round(targetCalories),
      protein: proteinGrams,
      carbs: carbGrams,
      fat: fatGrams,
      vitamins: generateVitaminRecommendations(gender, age),
      minerals: generateMineralRecommendations(gender, age)
    });
  };

  // Generate vitamin recommendations based on gender and age
  const generateVitaminRecommendations = (gender, age) => {
    return [
      { name: 'Vitamin A', amount: '700-900 mcg', benefits: 'Vision, immune function, cell growth' },
      { name: 'Vitamin C', amount: '75-90 mg', benefits: 'Immune function, antioxidant, collagen production' },
      { name: 'Vitamin D', amount: '15-20 mcg', benefits: 'Bone health, immune function, mood regulation' },
      { name: 'Vitamin E', amount: '15 mg', benefits: 'Antioxidant, skin health, immune function' },
      { name: 'Vitamin K', amount: '90-120 mcg', benefits: 'Blood clotting, bone health' },
      { name: 'B Vitamins', amount: 'Varied', benefits: 'Energy production, brain function, cell metabolism' },
    ];
  };

  // Generate mineral recommendations based on gender and age
  const generateMineralRecommendations = (gender, age) => {
    return [
      { name: 'Calcium', amount: '1000-1200 mg', benefits: 'Bone health, nerve function, muscle contraction' },
      { name: 'Iron', amount: gender === 'female' ? '18 mg' : '8 mg', benefits: 'Oxygen transport, energy production' },
      { name: 'Magnesium', amount: '310-420 mg', benefits: 'Muscle and nerve function, energy production' },
      { name: 'Zinc', amount: '8-11 mg', benefits: 'Immune function, wound healing, DNA synthesis' },
      { name: 'Potassium', amount: '3500-4700 mg', benefits: 'Blood pressure, nerve function, muscle contraction' },
    ];
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateNutrition();
    setShowResults(true);
  };

  // Move to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Move to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Reset calculation
  const resetCalculator = () => {
    setStep(1);
    setShowResults(false);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h1>Nutrition Calculator</h1>
        <p>Your personalized nutrition guide for a healthier lifestyle</p>
      </div>

      {!showResults ? (
        <div className="calculator-form-container">
          <div className="progress-bar">
            <div className="progress-indicator" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
          <div className="step-indicator">
            <span className={step >= 1 ? 'active' : ''}>1</span>
            <span className={step >= 2 ? 'active' : ''}>2</span>
            <span className={step >= 3 ? 'active' : ''}>3</span>
            <span className={step >= 4 ? 'active' : ''}>4</span>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="form-step">
                <h2>Basic Information</h2>
                <div className="form-group">
                  <label>Gender</label>
                  <div className="gender-selector">
                    <button 
                      type="button" 
                      className={gender === 'female' ? 'active' : ''}
                      onClick={() => setGender('female')}
                    >
                      Female
                    </button>
                    <button 
                      type="button" 
                      className={gender === 'male' ? 'active' : ''}
                      onClick={() => setGender('male')}
                    >
                      Male
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input 
                    type="number" 
                    min="15" 
                    max="80" 
                    value={age} 
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    required
                  />
                </div>
                <div className="button-group">
                  <button type="button" className="next-btn" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Body Measurements</h2>
                <div className="form-group">
                  <label>Weight (kg)</label>
                  <input 
                    type="number" 
                    min="40" 
                    max="200" 
                    value={weight} 
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Height (cm)</label>
                  <input 
                    type="number" 
                    min="140" 
                    max="220" 
                    value={height} 
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    required
                  />
                </div>
                <div className="button-group">
                  <button type="button" className="prev-btn" onClick={prevStep}>Back</button>
                  <button type="button" className="next-btn" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Activity Level</h2>
                <div className="form-group activity-selector">
                  <div 
                    className={`activity-level ${activityLevel === 'sedentary' ? 'active' : ''}`}
                    onClick={() => setActivityLevel('sedentary')}
                  >
                    <h3>Sedentary</h3>
                    <p>Little or no exercise, desk job</p>
                  </div>
                  <div 
                    className={`activity-level ${activityLevel === 'light' ? 'active' : ''}`}
                    onClick={() => setActivityLevel('light')}
                  >
                    <h3>Light</h3>
                    <p>Light exercise 1-3 days/week</p>
                  </div>
                  <div 
                    className={`activity-level ${activityLevel === 'moderate' ? 'active' : ''}`}
                    onClick={() => setActivityLevel('moderate')}
                  >
                    <h3>Moderate</h3>
                    <p>Moderate exercise 3-5 days/week</p>
                  </div>
                  <div 
                    className={`activity-level ${activityLevel === 'active' ? 'active' : ''}`}
                    onClick={() => setActivityLevel('active')}
                  >
                    <h3>Active</h3>
                    <p>Hard exercise 6-7 days/week</p>
                  </div>
                  <div 
                    className={`activity-level ${activityLevel === 'veryActive' ? 'active' : ''}`}
                    onClick={() => setActivityLevel('veryActive')}
                  >
                    <h3>Very Active</h3>
                    <p>Hard daily exercise & physical job</p>
                  </div>
                </div>
                <div className="button-group">
                  <button type="button" className="prev-btn" onClick={prevStep}>Back</button>
                  <button type="button" className="next-btn" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-step">
                <h2>Fitness Goal</h2>
                <div className="form-group goal-selector">
                  <div 
                    className={`goal ${goal === 'lose' ? 'active' : ''}`}
                    onClick={() => setGoal('lose')}
                  >
                    <h3>Lose Weight</h3>
                    <p>Calorie deficit to promote fat loss</p>
                  </div>
                  <div 
                    className={`goal ${goal === 'maintain' ? 'active' : ''}`}
                    onClick={() => setGoal('maintain')}
                  >
                    <h3>Maintain Weight</h3>
                    <p>Balanced nutrition to maintain current weight</p>
                  </div>
                  <div 
                    className={`goal ${goal === 'gain' ? 'active' : ''}`}
                    onClick={() => setGoal('gain')}
                  >
                    <h3>Gain Muscle</h3>
                    <p>Calorie surplus to build muscle</p>
                  </div>
                </div>
                <div className="button-group">
                  <button type="button" className="prev-btn" onClick={prevStep}>Back</button>
                  <button type="submit" className="calculate-btn">Calculate Nutrition</button>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="results-container">
          <div className="results-header">
            <h2>Your Personalized Nutrition Plan</h2>
            <p>Based on your {age} year old {gender} profile with {activityLevel} activity</p>
          </div>

          <div className="results-summary">
            <div className="summary-card">
              <div className="summary-value">{results.calories}</div>
              <div className="summary-label">Daily Calories</div>
            </div>
            <div className="summary-details">
              <div className="detail-item">
                <span className="detail-label">Basal Metabolic Rate:</span>
                <span className="detail-value">{results.bmr} calories/day</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Daily Energy:</span>
                <span className="detail-value">{results.tdee} calories/day</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Target for {goal === 'lose' ? 'Weight Loss' : goal === 'gain' ? 'Muscle Gain' : 'Maintenance'}:</span>
                <span className="detail-value">{results.calories} calories/day</span>
              </div>
            </div>
          </div>

          <div className="macros-section">
            <h3>Macronutrient Breakdown</h3>
            <div className="macros-container">
              <div className="macro-card protein">
                <div className="macro-title">Protein</div>
                <div className="macro-value">{results.protein}g</div>
                <div className="macro-calories">{results.protein * 4} calories</div>
                <div className="macro-info">
                  <p>Builds & repairs muscles</p>
                  <p>Supports immune function</p>
                </div>
              </div>
              <div className="macro-card carbs">
                <div className="macro-title">Carbs</div>
                <div className="macro-value">{results.carbs}g</div>
                <div className="macro-calories">{results.carbs * 4} calories</div>
                <div className="macro-info">
                  <p>Primary energy source</p>
                  <p>Fuels brain function</p>
                </div>
              </div>
              <div className="macro-card fat">
                <div className="macro-title">Fat</div>
                <div className="macro-value">{results.fat}g</div>
                <div className="macro-calories">{results.fat * 9} calories</div>
                <div className="macro-info">
                  <p>Hormone production</p>
                  <p>Vitamin absorption</p>
                </div>
              </div>
            </div>
          </div>

          <div className="nutrition-breakdown">
            <div className="vitamins-section">
              <h3>Essential Vitamins</h3>
              <div className="nutrition-table">
                <table>
                  <thead>
                    <tr>
                      <th>Vitamin</th>
                      <th>Recommended</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.vitamins.map((vitamin, index) => (
                      <tr key={index}>
                        <td>{vitamin.name}</td>
                        <td>{vitamin.amount}</td>
                        <td>{vitamin.benefits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="minerals-section">
              <h3>Essential Minerals</h3>
              <div className="nutrition-table">
                <table>
                  <thead>
                    <tr>
                      <th>Mineral</th>
                      <th>Recommended</th>
                      <th>Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.minerals.map((mineral, index) => (
                      <tr key={index}>
                        <td>{mineral.name}</td>
                        <td>{mineral.amount}</td>
                        <td>{mineral.benefits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="food-sources">
            <h3>Good Food Sources</h3>
            <div className="food-categories">
              <div className="food-category">
                <h4>Protein Sources</h4>
                <ul>
                  <li>Chicken breast (31g per 100g)</li>
                  <li>Greek yogurt (10g per 100g)</li>
                  <li>Lentils (9g per 100g)</li>
                  <li>Tofu (8g per 100g)</li>
                  <li>Eggs (6g per egg)</li>
                </ul>
              </div>
              <div className="food-category">
                <h4>Carbohydrate Sources</h4>
                <ul>
                  <li>Brown rice (23g per 100g)</li>
                  <li>Oats (66g per 100g)</li>
                  <li>Sweet potatoes (20g per 100g)</li>
                  <li>Quinoa (21g per 100g)</li>
                  <li>Fruits (varied)</li>
                </ul>
              </div>
              <div className="food-category">
                <h4>Healthy Fat Sources</h4>
                <ul>
                  <li>Avocados (15g per 100g)</li>
                  <li>Olive oil (100g per 100ml)</li>
                  <li>Nuts & seeds (varied)</li>
                  <li>Salmon (13g per 100g)</li>
                  <li>Chia seeds (31g per 100g)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="button-group results-buttons">
            <button type="button" className="reset-btn" onClick={resetCalculator}>Recalculate</button>
            <button type="button" className="print-btn" onClick={() => window.print()}>Print Results</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;