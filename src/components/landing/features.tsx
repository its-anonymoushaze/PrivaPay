
import { placeholderImage } from '../../constant/image';

const Feature = () => {
  return (
    <section id="features" className="py-20 ">
      <h2 className="text-3xl text-center font-semibold mb-8 text-orange-500">
        Revolutionize Organizational Compensation with Privacy-First Technology
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        <div className="text-center">
          <img
            src={placeholderImage}
            alt="Private Organization"
            className="mx-auto w-32 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Private Organization Creation
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              Establish your decentralized organization with complete privacy
            </li>
            <li>
              Leverage Aleo's zero-knowledge infrastructure for confidential
              operations
            </li>
            <li>Maintain organizational control with provable ownership</li>
            <li>Choose what data to keep private and what to make public</li>
          </ul>
        </div>
        <div className="text-center">
          <img
            src={placeholderImage}
            alt="Confidential Employee Management"
            className="mx-auto w-32 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Confidential Employee Management
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Add team members with encrypted salary information</li>
            <li>Set compensation details visible only to authorized parties</li>
            <li>
              Utilize Aleo's programmable privacy to customize access controls
            </li>
            <li>Implement role-based permissions for payroll management</li>
          </ul>
        </div>
        <div className="text-center">
          <img
            src={placeholderImage}
            alt="Private Salary Access"
            className="mx-auto w-32 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">
            Private, On-Demand Salary Access
          </h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>
              Employees withdraw earnings anytime without revealing balances
            </li>
            <li>
              Zero-knowledge proofs verify withdrawal eligibility without
              exposing data
            </li>
            <li>
              Private transactions shield salary information from public
              blockchain
            </li>
            <li>Experience the power of confidential financial operations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Feature