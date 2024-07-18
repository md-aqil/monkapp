import React from 'react';

interface TokenFeature {
  title: string;
  description: string;
  imageSrc: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-7 relative" >
      <img loading="lazy" src={imageSrc} alt="" className="object-cover absolute inset-0 size-full" />

        <div className="flex flex-col justify-center px-3.5 py-8 rounded-lg border border-solid border-zinc-800 max-md:pr-5 h-100">
          <div className="flex gap-16 relative flex-col pt-0.5 pr-5 pb-2.5 pl-2 aspect-[1.89]">
            <h3 className="relative text-xl tracking-tight leading-8 text-lime-400">
              {title}
            </h3>
            <p className="relative text-sm tracking-tight leading-5 text-zinc-400 max-md:mt-10">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const features: TokenFeature[] = [
 
  {
    title: "Hyperdeflationary token",
    description:
      "Total supply of 330 Million keeps on burning during a season.",
    imageSrc: "./line-light.png"

  },
  {
    title: "Elastic Supply",
    description:
      "At the end of every season, Relaunch event sets supply to 330 Million",
    imageSrc: "./line-light.png"

  },
  {
    title: "Automated monetary policy",
    description:
      "The protocol runs itself throughout, managing token supply.",
    imageSrc: "./line-light.png"

  },

 
  {
    title: "Reserve Backed",
    description:
      "CAKE tokens are bought from tax funds and collected in season reserve.",
    imageSrc: "./line-light.png"

  },


];

const Features: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center max-md:px-5 container">
      <h2 className="mr-auto heading text-4xl tracking-tighter text-left text-white leading-[67px] max-md:max-w-full">
        Beyond just a <span className="text-lime-300">token</span>
      </h2>
      <div className="justify-center mt-10 w-full max-w-full max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;