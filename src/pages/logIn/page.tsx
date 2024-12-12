import { RxAvatar } from "react-icons/rx";
import { logInForm } from "../../utils/interfaces/form";
import { useForm } from "react-hook-form";
import { Button, InputAndLabel } from "../../Components/exports";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInValidation } from "../../utils/validationSchema/signInSchema";
import { NavLink } from "react-router-dom";
const Page = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<logInForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(logInValidation),
  });
  function onSubmit() {
    const userData = getValues();
    console.log(userData);
  }
  return (
    <section className="mx-20 my-10">
      <div className="flex flex-col items-center ">
        <RxAvatar size={60} />
        <h2 className="mt-2 text-2xl font-bold">Welcome back to Shop Mart</h2>
        <p className="mt-1 text-sm">To continue please log in</p>
        <div className="mt-5 lg:min-w-[380px]">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <InputAndLabel
              classCss="p-2 border-black  focus:outline-none border mt-1 w-full rounded-md"
              name="email"
              text="Email"
              type="Email"
              register={register}
              errorMessage={errors.email?.message}
            />
            <InputAndLabel
              classCss="p-2 border-black  border mt-1 w-full rounded-md"
              name="password"
              textStyle="mt-4"
              type="Password"
              register={register}
              errorMessage={errors.password?.message}
              isPassword
              text="Password"
            />
            <Button classCss="mt-5 w-full" text="Log In" />
          </form>
        </div>
        <div className="mt-5">
          <p>
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-blue-600 underline ">
              SignUp
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
