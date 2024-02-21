import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4x1 md:text-7x1 mb-1 md:mb-3 font-bold">Name</h1>
      <p className="text-base md:text-xl mb-3 front-medium">Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">More Information</p>
    </div>
  );
}

export default Intro;
