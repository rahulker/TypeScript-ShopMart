import { RxAvatar } from "react-icons/rx";
import { logInForm } from "../../utils/interfaces/form";
import { useForm } from "react-hook-form";
import { Button, InputAndLabel } from "../../Components/exports";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInValidation } from "../../utils/validationSchema/signInSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { userAlreadyExists } from "../../utils/helper/userLogin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { rootState } from "../../store/store";

const Page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userExits, setUserExits] = useState<boolean>(false);
  const isLogin = useSelector((state: rootState) => state.user.isLogin);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  });
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
  async function onSubmit() {
    const userData = getValues();
    const res = await userAlreadyExists("Login", userData, dispatch, navigate);
    setUserExits(res || false);
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
              classCss="focus:outline-none "
              placeHolder="Enter your email"
              name="email"
              text="Email"
              type="Email"
              register={register}
              errorMessage={errors.email?.message}
            />
            {userExits && (
              <p className="text-red-400">
                Account not found, please try to sign up
              </p>
            )}
            <InputAndLabel
              name="password"
              textStyle="mt-4"
              placeHolder="*********"
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
