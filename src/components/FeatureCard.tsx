/**
 * This code was generated by Builder.io.
 */
import React from "react";

type FeatureCardProps = {
  number: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex relative flex-col grow justify-center text-sm tracking-tight leading-5 rounded-md max-md:mt-10">
      <div className="flex flex-col pt-0.5 pb-12 rounded-xl bg-zinc-300 bg-opacity-10">
        <div className="flex flex-col px-8 pt-3 max-md:px-5">
          <div className="text-neutral-800 text-opacity-40">{number}</div>
          <div className="mt-4 text-xl tracking-tight text-yellow-400">
            {title}
          </div>
          <div className="z-10 mt-16 -mb-2 leading-5 text-white max-md:mt-10">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
