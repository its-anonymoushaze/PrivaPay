import { useForm, type SubmitHandler } from "react-hook-form";

import { CatAstro } from "../assets/illustrations";
import Button from "../components/button.component";

type LoginFormInputs = {
  email: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async () => {};

  return (
    <div className="flex items-center justify-center gap-16 w-screen h-screen">
      <div>
        <img src={CatAstro} alt="cat-astro" />
      </div>
      <div className="flex flex-col gap-8 w-96">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="text-xl font-bold text-center">Welcome to</h2>
            <h2 className="text-4xl text-center">
              Ibriz <span className="text-orange-500">Space</span>
            </h2>
          </div>
          <p className=" text-gray-600">A simple space to save time</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Ibriz Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-800 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
