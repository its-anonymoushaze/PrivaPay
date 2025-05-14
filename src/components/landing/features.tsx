import FeatureCard from "./feature-card";

const Feature = () => {
  return (
    <section id="features" className="py-20 ">
      <h2 className="text-3xl text-center font-semibold mb-8 text-orange-500">
        Revolutionize Organizational Compensation with Privacy-First Technology
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        <section className="py-12 px-4">
          <h2 className="text-3xl font-mono font-bold text-white mb-10">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Feature;
