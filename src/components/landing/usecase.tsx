import React from "react";
import FeatureCard from "./feature-card";

const Usecase = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-mono font-bold text-white mb-10">
        Use Cases
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  );
};

export default Usecase;
