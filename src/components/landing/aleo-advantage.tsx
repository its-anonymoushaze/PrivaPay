import React from 'react'

const AleoAdvantage = () => {
  return (
    <section className="py-20 ">
      <h2 className="text-3xl text-center font-semibold mb-8 text-orange-500">
        The Aleo Advantage
      </h2>
      <ul className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
        <li>
          <strong>Zero-Knowledge Proofs:</strong> Verify transactions without
          revealing underlying data
        </li>
        <li>
          <strong>Programmable Privacy:</strong> Control exactly what
          information remains confidential
        </li>
        <li>
          <strong>LEO Programming Language:</strong> Custom-built for
          privacy-preserving applications
        </li>
        <li>
          <strong>High Performance:</strong> Fast transaction processing with
          minimal fees
        </li>
        <li>
          <strong>Decentralized Security:</strong> Robust protection without
          centralized vulnerabilities
        </li>
      </ul>
    </section>
  );
}

export default AleoAdvantage