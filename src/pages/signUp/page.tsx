import { RxAvatar } from "react-icons/rx";
import { Button, InputAndLabel } from "../../Components/exports";
import { useForm } from "react-hook-form";
import { signInForm } from "../../utils/interfaces/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidation } from "../../utils/validationSchema/signUpSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { handleRegisterUser } from "../../utils/apis/services/user";
import { useDispatch, useSelector } from "react-redux";
import { handleLogIn } from "../../store/slices/userSlice";
import { rootState } from "../../store/store";
import { useEffect } from "react";

const Page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: rootState) => state.user.isLogin);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  });
  const {
    getValues,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<signInForm>({
    defaultValues: {
      address: "",
      confirmPassword: "",
      email: "",
      password: "",
      name: "",
      phoneNum: undefined,
    },
    resolver: yupResolver(signUpValidation),
  });
  function onsubmit() {
    const userDetail = getValues();
    userDetail.id = Math.random() * 100;
    handleRegisterUser(userDetail);
    dispatch(handleLogIn());
    navigate("/");
  }
  return (
    <section className="mx-20 my-10">
      <div className="flex flex-col items-center ">
        <RxAvatar size={60} />
        <h2 className="mt-2 text-2xl font-bold">Welcome back to Shop Mart</h2>
        <p className="mt-1 text-sm">Sign up to create a account</p>
        <div className="mt-5 lg:min-w-[450px]">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid grid-cols-2 gap-2">
              <InputAndLabel
                text="Name"
                placeHolder="Enter your name"
                name="name"
                register={register}
                type="text"
                errorMessage={errors.name?.message}
                classCss="focus:outline-none w-full"
              />
              <InputAndLabel
                text="Email"
                placeHolder="Enter your email"
                name="email"
                register={register}
                errorMessage={errors.email?.message}
                type="email"
                classCss="focus:outline-none w-full"
              />
            </div>
            <div className="mt-2">
              <InputAndLabel
                text="Phone number"
                placeHolder="Enter phone number"
                name="phoneNum"
                register={register}
                errorMessage={errors.phoneNum?.message}
                type="number"
                classCss="focus:outline-none w-full"
              />
            </div>
            <div className="mt-2">
              <InputAndLabel
                text="Password"
                placeHolder="*******"
                name="password"
                errorMessage={errors.password?.message}
                register={register}
                type="password"
                isPassword
                classCss="focus:outline-none w-full"
              />
            </div>
            <div className="mt-2">
              <InputAndLabel
                text="confirm password"
                placeHolder="Enter password again"
                name="confirmPassword"
                errorMessage={errors.confirmPassword?.message}
                register={register}
                type="password"
                isPassword
                classCss="focus:outline-none w-full"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="address">Address</label>
              <textarea
                className="p-2 border-black  border mt-1 w-full rounded-md"
                id="address"
                {...register("address")}
                placeholder="Enter your address"
              ></textarea>
              {errors.address?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>
            <Button text="Sign up" classCss="w-full mt-2" />
          </form>
          <div className="text-center mt-5">
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue-500 underline">
                LogIn
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
