import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-4 text-center  mx-auto bg-gradient-to-r from-transparent via-orange-500/80  to-transparent rounded-md my-20">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white mb-6">
          Ready to Transform your <br />
          <br />
          <span className="text-6xl">
            <span className="text-white">Payroll</span> with{" "}
            <span className="italic">Privacy</span>?
          </span>
        </h2>
        <p className="text-gray-200 text-balance text-xl mb-8">
          Experience the power of confidential compensation management with
          PrivaPay. Our Aleo-powered solution delivers unprecedented privacy
          without sacrificing functionality or transparency where it matters.
        </p>
      </div>

      <button className="bg-transparent text-white border border-white px-6 py-3 rounded-md cursor-pointer mt-4">
        Contact Us For Demo
      </button>
    </section>
  );
};

export default CTA;
