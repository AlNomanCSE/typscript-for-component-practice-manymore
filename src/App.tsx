import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
};
export default function App() {
  const form = useForm<Inputs>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);
  return (
    <div className="grid place-items-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 flex flex-col gap-4 w-[400px] border border-green-300 rounded-md h-fit"
      >
        <div className="w-full h-[50px] flax items-center">
          <input
            type="text"
            id="username"
            placeholder="Unsername"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            className="w-full border border-green-300 rounded-lg py-[7px] px-[20px] outline-none focus:border-green-700 focus:border-[2px]"
          />
          <p className="text-red-600 px-5">{errors.username?.message}</p>
        </div>
        <div className="w-full h-[50px] flax items-center">
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter a different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("google.com") ||
                    "This is not Supported"
                  );
                },
              },
            })}
            className="w-full border border-green-300 rounded-lg py-[7px] px-[20px] outline-none focus:border-green-700 focus:border-[2px]"
          />
          <p className="text-red-600 px-5">{errors.email?.message}</p>
        </div>
        <div className="w-full h-[50px] flax items-center">
          <input
            type="text"
            id="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="w-full border border-green-300 rounded-lg py-[7px] px-[20px] outline-none focus:border-green-700 focus:border-[2px]"
          />
          <p className="text-red-600 px-5">{errors.password?.message}</p>
        </div>
        <div className="flex justify-center">
          <Button className="uppercase tracking-wider w-[200px]">submit</Button>
        </div>
      </form>
    </div>
  );
}
