import { ArrowUpRight } from "lucide-react";
import { useRouter } from "../../routes/hooks/useRouter";

const Hero = () => {
  const { push } = useRouter();
  return (
    <section className="text-center py-16 px-4 h-screen flex flex-col items-center gap-4 justify-center">
      <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 space-y-4 text-balance">
        <span>
          <span className="text-orange-500">Private,</span> Programmable
        </span>
        <br />
        <span>
          <span className="text-orange-500">Payroll & DAO voting</span> <br />
          on Aleo Blockchain
        </span>
      </h1>
      <p className="text-gray-300 italic mb-10 text-4xl mx-auto">
        "The future of{" "}
        <span className="text-orange-500">confidential payroll management</span>{" "}
        with
        <br />
        zero-knowledge-proof technology"
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          onClick={() => push("/login")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md flex items-center justify-center"
        >
          Create your Payroll Account
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
