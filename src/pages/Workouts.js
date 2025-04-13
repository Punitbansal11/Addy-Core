import React, { useState, useEffect } from 'react';
import { Sun, Moon, X, Info } from 'lucide-react';

// Move workoutData outside component to prevent rebuilding on every render
const workoutData = {
  Monday: {
    title: "Chest & Triceps",
    mainExercises: [
      {
        name: "Barbell Bench Press",
        setsReps: "4 Sets x 8-10 Reps",
        instructions: "Lie flat on bench with shoulders back, grip bar slightly wider than shoulders and lower to chest.",
        mistakes: "Arching back excessively or bouncing bar off chest."
      },
      {
        name: "Incline Dumbbell Press",
        setsReps: "3 Sets x 10-12 Reps",
        instructions: "Set bench to 30-45° incline, press dumbbells upward keeping elbows at 45° angle.",
        mistakes: "Setting incline too steep or flaring elbows out too wide."
      },
      {
        name: "Cable Chest Flyes",
        setsReps: "3 Sets x 12-15 Reps", 
        instructions: "Stand in center of cable machine, bring handles together in hugging motion with slight elbow bend.",
        mistakes: "Using too much weight or straightening arms completely."
      },
      {
        name: "Tricep Dips",
        setsReps: "3 Sets x 10-12 Reps",
        instructions: "Support body on parallel bars, lower until elbows reach 90° then push back up.",
        mistakes: "Leaning too far forward or not going deep enough."
      }
    ],
    coreExercises: [
      {
        name: "Hanging Leg Raises",
        setsReps: "3 Sets x 12-15 Reps",
        instructions: "Hang from bar and raise legs to 90° using core strength, not momentum.",
        mistakes: "Swinging hips or using momentum instead of core control."
      },
      {
        name: "Plank",
        setsReps: "3 Sets x 45-60 Seconds",
        instructions: "Hold body in straight line from head to heels, engage core throughout.",
        mistakes: "Dropping hips too low or raising them too high."
      },
      {
        name: "Russian Twists",
        setsReps: "3 Sets x 20 Reps (10 each side)",
        instructions: "Sit at 45° angle with feet elevated, twist torso side to side touching floor beside hips.",
        mistakes: "Moving only arms instead of rotating entire torso."
      },
      {
        name: "Ab Wheel Rollout",
        setsReps: "3 Sets x 8-12 Reps",
        instructions: "Kneel with wheel in front, roll forward keeping back flat, then use core to return.",
        mistakes: "Arching lower back or letting hips sag during extension."
      }
    ]
  },
  Tuesday: {
    title: "Legs",
    mainExercises: [
      {
        name: "Barbell Squats",
        setsReps: "4 Sets x 8-10 Reps",
        instructions: "Stand with feet shoulder-width apart, bar on traps, squat until thighs parallel to floor.",
        mistakes: "Letting knees cave inward or rising on toes."
      },
      {
        name: "Romanian Deadlifts",
        setsReps: "3 Sets x 10-12 Reps",
        instructions: "Hold bar at hip level, hinge at hips while keeping back straight, lower until hamstrings stretch.",
        mistakes: "Rounding back or bending knees too much."
      },
      {
        name: "Walking Lunges",
        setsReps: "3 Sets x 12 Reps (each leg)",
        instructions: "Step forward into lunge position, lower back knee toward floor, push through front heel to next step.",
        mistakes: "Leaning torso too far forward or letting front knee extend past toes."
      },
      {
        name: "Leg Press",
        setsReps: "3 Sets x 12-15 Reps",
        instructions: "Position feet shoulder-width on platform, lower weight until knees form 90° angle, push back up.",
        mistakes: "Locking knees at top or letting knees cave inward."
      }
    ],
    coreExercises: [
      {
        name: "Bicycle Crunches",
        setsReps: "3 Sets x 20 Reps (10 each side)",
        instructions: "Lie on back, hands behind head, bring opposite elbow to opposite knee while extending other leg.",
        mistakes: "Pulling on neck or rushing through the movement."
      },
      {
        name: "Reverse Crunches",
        setsReps: "3 Sets x 15 Reps",
        instructions: "Lie on back with legs up at 90°, use lower abs to lift hips off floor and toward ribcage.",
        mistakes: "Using momentum or lifting with legs instead of abs."
      },
      {
        name: "Side Planks",
        setsReps: "3 Sets x 30 Seconds (each side)",
        instructions: "Balance on forearm and side of foot, keep body straight from head to feet.",
        mistakes: "Dropping hips or rotating body forward/backward."
      },
      {
        name: "Mountain Climbers",
        setsReps: "3 Sets x 30 Seconds",
        instructions: "Start in push-up position, rapidly alternate bringing knees toward chest.",
        mistakes: "Raising hips too high or moving too slowly."
      }
    ]
  },
  Wednesday: {
    title: "Back & Biceps",
    mainExercises: [
      {
        name: "Pull-Ups",
        setsReps: "4 Sets x 6-10 Reps",
        instructions: "Grip bar wider than shoulders, pull up until chin clears bar, lower with control.",
        mistakes: "Using momentum to swing up or incomplete range of motion."
      },
      {
        name: "Bent-Over Barbell Rows",
        setsReps: "3 Sets x 8-10 Reps",
        instructions: "Hinge at hips with flat back at 45°, pull bar to lower chest, squeeze shoulder blades.",
        mistakes: "Rounding back or using upper body momentum to lift."
      },
      {
        name: "Seated Cable Rows",
        setsReps: "3 Sets x 10-12 Reps",
        instructions: "Sit with knees slightly bent, pull handle to lower abdomen while maintaining upright posture.",
        mistakes: "Leaning too far back or hunching shoulders forward."
      },
      {
        name: "Dumbbell Bicep Curls",
        setsReps: "3 Sets x 12 Reps",
        instructions: "Stand with dumbbells at sides, curl up while keeping elbows fixed, lower with control.",
        mistakes: "Swinging weights or moving elbows away from sides."
      }
    ],
    coreExercises: [
      {
        name: "Dead Bug",
        setsReps: "3 Sets x 12 Reps (each side)",
        instructions: "Lie on back with arms and legs up, lower opposite arm and leg while keeping lower back pressed to floor.",
        mistakes: "Arching lower back or moving too quickly."
      },
      {
        name: "Hollow Body Hold",
        setsReps: "3 Sets x 30 Seconds",
        instructions: "Lie on back, lift shoulders and legs off floor, arms extended overhead, lower back pressed to floor.",
        mistakes: "Raising head too high or arching lower back."
      },
      {
        name: "Flutter Kicks",
        setsReps: "3 Sets x 30 Seconds",
        instructions: "Lie on back with legs straight and slightly raised, alternate kicking legs up and down.",
        mistakes: "Lifting legs too high or arching lower back off floor."
      },
      {
        name: "Plank to Push-Up",
        setsReps: "3 Sets x 8 Reps",
        instructions: "Start in forearm plank, push up to hand plank one arm at a time, then lower back down.",
        mistakes: "Sagging hips or rotating torso during transitions."
      }
    ]
  },
  Thursday: {
    title: "Shoulders & Triceps",
    mainExercises: [
      {
        name: "Overhead Press",
        setsReps: "4 Sets x 8-10 Reps",
        instructions: "Stand with feet shoulder-width apart, press barbell from shoulders to overhead with straight arms.",
        mistakes: "Arching lower back or leaning back while pressing."
      },
      {
        name: "Lateral Raises",
        setsReps: "3 Sets x 12-15 Reps",
        instructions: "Stand with dumbbells at sides, raise arms out to sides until parallel with floor, lower slowly.",
        mistakes: "Using momentum to swing weights up or shrugging shoulders."
      },
      {
        name: "Face Pulls",
        setsReps: "3 Sets x 15 Reps",
        instructions: "Pull rope attachment to face level with elbows high, focus on rear delts and external rotation.",
        mistakes: "Using too much weight or hunching shoulders forward."
      },
      {
        name: "Tricep Pushdowns",
        setsReps: "3 Sets x 12-15 Reps",
        instructions: "Stand facing cable machine, push rope or bar down with elbows at sides until arms straight.",
        mistakes: "Moving elbows away from sides or using body momentum."
      }
    ],
    coreExercises: [
      {
        name: "Cable Woodchoppers",
        setsReps: "3 Sets x 12 Reps (each side)",
        instructions: "Stand perpendicular to cable machine, pull handle diagonally across body from high to low.",
        mistakes: "Rotating only arms instead of entire torso or using jerky movements."
      },
      {
        name: "Bird Dog",
        setsReps: "3 Sets x 10 Reps (each side)",
        instructions: "Start on hands and knees, simultaneously extend opposite arm and leg while keeping torso stable.",
        mistakes: "Arching back or rotating hips during movement."
      },
      {
        name: "Toe Touches",
        setsReps: "3 Sets x 15 Reps",
        instructions: "Lie on back with legs extended upward, crunch up to touch toes with fingertips.",
        mistakes: "Using arms to generate momentum or dropping legs too low."
      },
      {
        name: "Oblique V-Ups",
        setsReps: "3 Sets x 12 Reps (each side)",
        instructions: "Lie on side with legs extended, lift upper body and legs simultaneously to form V-shape.",
        mistakes: "Using momentum or only lifting upper body."
      }
    ]
  },
  Friday: {
    title: "Chest & Arms",
    mainExercises: [
      {
        name: "Incline Bench Press",
        setsReps: "4 Sets x 8-10 Reps",
        instructions: "Set bench to 30° incline, grip bar slightly wider than shoulders, lower to upper chest.",
        mistakes: "Bouncing bar off chest or flaring elbows too wide."
      },
      {
        name: "Cable Crossovers",
        setsReps: "3 Sets x 12-15 Reps",
        instructions: "Stand between cable stations, bring handles together in front with slight bend in elbows.",
        mistakes: "Rounding shoulders or letting hands go too far back at start."
      },
      {
        name: "EZ Bar Curls",
        setsReps: "3 Sets x 10-12 Reps",
        instructions: "Hold EZ bar with underhand grip, curl weight while keeping upper arms stationary.",
        mistakes: "Swinging torso or moving elbows forward during lift."
      },
      {
        name: "Overhead Tricep Extensions",
        setsReps: "3 Sets x 12-15 Reps",
        instructions: "Hold dumbbell with both hands overhead, lower behind head by bending elbows, then extend.",
        mistakes: "Moving elbows forward or using shoulders to assist."
      }
    ],
    coreExercises: [
      {
        name: "Hanging Leg Raises",
        setsReps: "3 Sets x 15 Reps",
        instructions: "Hang from bar, raise legs to 90 degrees with controlled movement.",
        mistakes: "Using momentum or insufficient range of motion."
      },
      {
        name: "Plank Variations",
        setsReps: "3 Sets x 45-60 seconds",
        instructions: "Alternate between standard, side, and forearm planks during each set.",
        mistakes: "Sagging hips or raising buttocks too high."
      },
      {
        name: "Cable Torso Rotations",
        setsReps: "3 Sets x 12 Reps each side",
        instructions: "Stand with cable at side, rotate torso away from machine with arms extended.",
        mistakes: "Moving arms instead of rotating torso, using jerky movements."
      },
      {
        name: "Ab Wheel Rollouts",
        setsReps: "3 Sets x 8-12 Reps",
        instructions: "Kneel with wheel in front, roll forward extending body, then return using core strength.",
        mistakes: "Arching lower back or collapsing shoulders."
      }
    ]
  },
  Saturday: {
    title: "Intense Core",
    mainExercises: [
      {
        name: "Weighted Crunches",
        setsReps: "4 Sets x 15 Reps",
        instructions: "Hold weight at chest, crunch up with controlled movement focusing on upper abs.",
        mistakes: "Pulling with neck, performing full sit-up motion."
      },
      {
        name: "Bicycle Crunches",
        setsReps: "4 Sets x 20 Reps (10 each side)",
        instructions: "Alternate touching elbow to opposite knee with rotation of torso.",
        mistakes: "Moving too fast, lifting shoulders only without proper rotation."
      },
      {
        name: "Ab Rollouts",
        setsReps: "3 Sets x 10-12 Reps",
        instructions: "Roll wheel forward while maintaining tight core and flat back.",
        mistakes: "Arching lower back, collapsing shoulders during extension."
      },
      {
        name: "Hanging Windshield Wipers",
        setsReps: "3 Sets x 16 Reps (8 each side)",
        instructions: "Hang from bar, raise legs to 90° and swing side to side with control.",
        mistakes: "Using momentum, incomplete range of motion, dropping legs."
      }
    ],
    coreExercises: [
      {
        name: "Side Planks with Rotation",
        setsReps: "3 Sets x 10 Reps each side",
        instructions: "From side plank, rotate arm under body and then extend toward ceiling.",
        mistakes: "Dropping hips, rushing movement, insufficient rotation."
      },
      {
        name: "Dragon Flags",
        setsReps: "3 Sets x 8-10 Reps",
        instructions: "Lie on bench, support upper body, lower straight legs slowly from vertical.",
        mistakes: "Bending at hips, dropping legs too quickly, insufficient control."
      },
      {
        name: "Medicine Ball Slams",
        setsReps: "3 Sets x 15 Reps",
        instructions: "Raise ball overhead, slam down with full force using core to initiate.",
        mistakes: "Bending back, not using core to initiate movement, bent arms."
      },
      {
        name: "Hollow Body Holds",
        setsReps: "3 Sets x 30-45 seconds",
        instructions: "Hold body in curved position with arms extended and legs raised.",
        mistakes: "Arching back, lifting shoulders too high, feet too low."
      }
    ]
  },
  Sunday: {
    title: "Core & Recovery",
    mainExercises: [
      {
        name: "Cat-Cow Stretch",
        setsReps: "3 Sets x 10 Reps each",
        instructions: "Alternate between arching and rounding back, breathe deeply with movement.",
        mistakes: "Moving too quickly, not engaging core during transition."
      },
      {
        name: "Bird-Dog",
        setsReps: "3 Sets x 12 Reps each side",
        instructions: "Extend opposite arm and leg while maintaining neutral spine and balance.",
        mistakes: "Rotating hips, sagging back, lifting arm/leg too high."
      },
      {
        name: "Supermans",
        setsReps: "3 Sets x 12 Reps",
        instructions: "Lift arms and legs simultaneously from prone position, hold briefly.",
        mistakes: "Jerking movements, hyperextending neck, insufficient lift."
      },
      {
        name: "Foam Rolling",
        setsReps: "5-10 minutes total",
        instructions: "Roll slowly across tight muscles, pause 20-30 seconds on tender spots.",
        mistakes: "Rolling too quickly, avoiding painful areas, improper positioning."
      }
    ],
    coreExercises: [
      {
        name: "Dead Bugs",
        setsReps: "3 Sets x 10 Reps each side",
        instructions: "Extend opposite arm and leg while keeping lower back pressed to floor.",
        mistakes: "Arching lower back, rushing movement, lifting head too high."
      },
      {
        name: "Plank Shoulder Taps",
        setsReps: "3 Sets x 20 Reps (10 each side)",
        instructions: "In plank position, tap opposite shoulder while maintaining stable hips.",
        mistakes: "Rotating hips, sagging middle, shifting weight excessively."
      },
      {
        name: "Glute Bridges",
        setsReps: "3 Sets x 15 Reps",
        instructions: "Raise hips while squeezing glutes, hold briefly at top of movement.",
        mistakes: "Overextending back, insufficient hip height, not engaging glutes."
      },
      {
        name: "Standing Side Bends",
        setsReps: "3 Sets x 12 Reps each side",
        instructions: "Hold weight at side, bend sideways with controlled movement.",
        mistakes: "Leaning forward/backward, rushed motion, insufficient range."
      }
    ]
  }
};

const WorkoutPlan = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Fix for dark mode persistence
  useEffect(() => {
    // Check local storage for saved preference
    const savedMode = localStorage.getItem('workoutDarkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Save dark mode preference when it changes
  useEffect(() => {
    localStorage.setItem('workoutDarkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Create a consistent ExerciseCard component
  const ExerciseCard = ({ exercise, darkMode }) => (
    <div className={`rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} p-4 shadow-sm transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md`}>
      <div className="flex justify-between">
        <h4 className="text-lg font-bold">{exercise.name}</h4>
        <span className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{exercise.setsReps}</span>
      </div>
      
      <div className="mt-2">
        <h5 className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Instructions:</h5>
        <p className="text-sm">{exercise.instructions}</p>
      </div>
      
      <div className="mt-2 flex items-start">
        <X size={16} className="text-red-500 mr-1 mt-0.5" />
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{exercise.mistakes}</p>
      </div>
    </div>
  );

  return (
    <div className={`font-sans ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} p-4 md:p-8 rounded-lg shadow-lg transition-colors duration-300`}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold">7-Day Workout Plan</h1>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`ml-2 p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label="Show workout information"
          >
            <Info size={16} className={darkMode ? 'text-blue-300' : 'text-blue-500'} />
          </button>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      {/* Information panel */}
      {showInfo && (
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-lg p-4 mb-6 shadow-md`}>
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold mb-2">Workout Plan Information</h3>
            <button 
              onClick={() => setShowInfo(false)}
              className={`p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              aria-label="Close information panel"
            >
              <X size={16} />
            </button>
          </div>
          <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm space-y-1`}>
            <li>This plan combines strength training with core work throughout the week</li>
            <li>Each day includes 4 main exercises and 4 core-focused exercises</li>
            <li>Saturday focuses on intensive core training</li>
            <li>Sunday is designed for recovery and gentle core activation</li>
            <li>For best results, combine with proper nutrition and adequate rest</li>
            <li>Adjust weights to maintain proper form while challenging yourself</li>
            <li>Progress gradually by increasing weight or reps each week</li>
          </ul>
        </div>
      )}
      
      {/* Day tabs */}
      <div className="flex overflow-x-auto pb-2 mb-4 scrollbar-thin">
        {days.map((day, index) => (
          <button
            key={day}
            onClick={() => setActiveDay(index)}
            className={`px-4 py-2 mr-2 rounded-lg font-medium transition-all duration-200 ${
              activeDay === index 
                ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                : (darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
            } whitespace-nowrap`}
            aria-label={`View ${day} workout`}
          >
            {day}
          </button>
        ))}
      </div>
      
      {/* Workout content */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-4 shadow-md transition-colors duration-300`}>
        <h2 className="text-xl font-bold mb-4">{days[activeDay]} - {workoutData[days[activeDay]].title}</h2>
        
        {/* Main muscle group exercises */}
        <div className="mb-6">
          <h3 className={`text-lg font-semibold mb-3 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            Main Exercises
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workoutData[days[activeDay]].mainExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} darkMode={darkMode} />
            ))}
          </div>
        </div>
        
        {/* Abs/Core exercises */}
        <div>
          <h3 className={`text-lg font-semibold mb-3 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            Core Exercises
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workoutData[days[activeDay]].coreExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer with additional info */}
      <div className={`mt-6 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <p>Always consult with a fitness professional before starting any new workout program.</p>
        <p className="mt-1">Rest 60-90 seconds between sets for optimal recovery.</p>
      </div>
    </div>
  );
};

export default WorkoutPlan;