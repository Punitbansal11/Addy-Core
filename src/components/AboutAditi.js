import React from "react";

function AboutAditi() {
  return (
    <div className="max-w-xl mx-auto text-center mt-12 px-4">
      <img
        src="/assets/images/aditi-about.png"
        alt="Aditi"
        className="w-48 h-48 object-cover mx-auto rounded-full shadow-lg border-4 border-pink-300"
      />
      <h2 className="text-3xl font-extrabold mt-6 text-gray-800">Aditi Soni</h2>
      <p className="text-lg text-pink-500 font-semibold mt-1">
        Interior Architecture Student | Fitness Enthusiast | Aspiring Model
      </p>
      <p className="text-md text-gray-700 mt-6 leading-relaxed font-medium">
        Hey! I’m Aditi, a passionate interior architecture student at NTU, UK.
        Fitness wasn’t always my thing — but in just 45 days, I completely
        transformed my mindset and my body with discipline and consistency.
        What started as a push became my passion. Now I thrive on gym workouts,
        healthy eating, and self-motivation.
      </p>
      <p className="text-md text-gray-700 mt-4 leading-relaxed font-medium">
        My journey isn’t just about the physical — it's about building
        confidence, embracing wellness, and chasing dreams. With my love for
        fitness, creative design, and modeling, I'm constantly working to become
        the best version of myself.
      </p>
    </div>
  );
}

export default AboutAditi;
