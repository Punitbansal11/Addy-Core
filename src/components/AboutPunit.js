import React from "react";

function AboutPunit() {
  return (
    <div className="text-center py-10 px-4 bg-white shadow-md rounded-xl max-w-lg mx-auto mt-10">
      <img
        src="/assets/images/punit-formal.png"
        alt="Punit"
        className="w-40 h-40 object-cover mx-auto rounded-full shadow-lg border-4 border-indigo-500"
      />
      <h2 className="text-2xl font-semibold mt-4 text-indigo-700">Made by Punit</h2>
      <p className="text-gray-600 mt-2">
        Developer • Designer • Co-Creator of Addy Core
      </p>
      <p className="text-sm text-gray-500 mt-4">
        I'm building this for Aditi with ❤️ to simplify fitness and nutrition in one beautiful platform.
      </p>
    </div>
  );
}

export default AboutPunit;
