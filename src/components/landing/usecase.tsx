import React from 'react'

const Usecase = () => {
  return (
    <section id="use-cases" className="py-20 ">
      <h2 className="text-3xl text-center font-semibold mb-8 text-orange-500">
        Use Cases
      </h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
        <div>
          <h3 className="font-semibold">Global Remote Teams</h3>
          <p>
            Confidentially manage international compensation while enabling
            instant access to funds across borders without revealing sensitive
            payment information.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Confidential Contractor Payments</h3>
          <p>
            Pay freelancers and contractors with privacy-preserving transactions
            that protect rate information while providing verification of
            payment.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Salary Discretion</h3>
          <p>
            Maintain confidentiality around compensation structures while still
            operating on a verifiable blockchain system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Usecase