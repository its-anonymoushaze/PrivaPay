import { Value } from "../../assets/illustrations";

const ValueProposition = () => {
  return (
    <section className="py-12 px-4 w-[80vw] mx-auto ">
      <h2 className="text-4xl font-mono font-bold text-white mb-10">
        Value Proposition
      </h2>

      <div className="flex flex-col md:flex-row items-center border border-orange-500 rounded-md p-8">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <ul className="text-orange-500">
            <li className="mb-2">
              <span className="text-2xl">
                Benefits Of Aleo Privacy And Payroll Fusion
              </span>
            </li>
          </ul>
          <h3 className="text-3xl text-white mb-4">
            Revolutionize Organizational Operations With Privacy First
            Technology
          </h3>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src={Value} alt="value-prop" />
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
