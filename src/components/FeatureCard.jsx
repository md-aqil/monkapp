/**
 * This code was generated by Builder.io.
 */
import React from "react";


const FeatureCard= ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex relative flex-col grow justify-center text-sm tracking-tight leading-5 rounded-md max-md:mt-10">
      <div className="flex flex-col pt-0.5 pb-12 rounded-xl bg-zinc-300 bg-opacity-10">
        <div className="flex flex-col px-4 pt-3 max-md:px-4">

          <div className="text-neutral-800 text-opacity-40 display[none]">{number}</div>
          
          <div className="mt-4 text-xl tracking-tight text-lime-400">
            {title}
          </div>

          <div className="z-10 mt-16  text-base text-[#B9B9B9] max-md:mt-10">
            {description}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
