import { RxAvatar } from "react-icons/rx";
import { Button, InputAndLabel } from "../../Components/exports";
import { useForm } from "react-hook-form";
import { signUpForm } from "../../utils/interfaces/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidation } from "../../utils/validationSchema/signUpSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { handleRegisterUser } from "../../utils/apis/user";
import { useDispatch, useSelector } from "react-redux";
import { handleAddUserDetail, handleLogIn } from "../../store/slices/userSlice";
import { rootState } from "../../store/store";
import { useEffect, useState } from "react";
import { userAlreadyExists } from "../../utils/helper/userLogin";
import md5 from "md5";

const Page = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: rootState) => state.user.isLogin);
  const [userExits, setUserExits] = useState(false);

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
  } = useForm<signUpForm>({
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

  async function onsubmit() {
    setUserExits(false);
    const { password, address, phoneNum, email, name, id } = getValues();
    const userDetail = {
      password: md5(password),
      address,
      phoneNum,
      email,
      name,
      id,
    };
    userDetail.id = Math.ceil(Math.random() * 100);
    const res = await userAlreadyExists("", userDetail, dispatch, navigate);
    if (res) {
      handleRegisterUser(userDetail);
      dispatch(handleAddUserDetail(userDetail));
      dispatch(handleLogIn());
      navigate("/");
    } else {
      setUserExits(true);
    }
  }
  return (
    <>
      <div className="flex flex-col items-center ">
        <RxAvatar size={60} />
        <h2 className="mt-2 md:text-2xl sm:text-xl text-base font-bold">
          Welcome back to Shop Mart
        </h2>
        <p className="mt-1 text-sm">Sign up to create a account</p>
        <div className="mt-5 sm:min-w-[450px] w-full sm:w-auto">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <InputAndLabel
                text="Name"
                placeHolder="Enter your name"
                name="name"
                register={register}
                type="text"
                errorMessage={errors.name?.message}
                classCss="focus:outline-none w-full"
              />
              <div>
                <InputAndLabel
                  text="Email"
                  placeHolder="Enter your email"
                  name="email"
                  register={register}
                  errorMessage={errors.email?.message}
                  type="email"
                  classCss="focus:outline-none w-full"
                />
                {userExits && (
                  <p className="text-sm text-red-400 mt-1.5">
                    Email already in use
                  </p>
                )}
              </div>
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
            <Button type="submit" text="Sign up" classCss="w-full mt-2" />
          </form>
          <div className="text-center mt-5">
            <p>
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-blue-500 underline"
                onClick={() => window.scrollTo(0, 0)}
              >
                signIn
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
