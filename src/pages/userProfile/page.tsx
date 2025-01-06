import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userProfileValidation } from "../../utils/validationSchema/userProfile";
import { InputAndText } from "../../Components/exports";

const Page = () => {
  const userData = useSelector((state: rootState) => state.user.userDetail);
  const localData = useSelector((state: rootState) => state.user.isLogin);
  const [isText, setIsText] = useState(true);
  const navigate = useNavigate();
  const {
    setValue,
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: userData.email || "",
      address: userData.address || "",
      phoneNum: userData.phoneNum || 0,
    },
    resolver: yupResolver(userProfileValidation),
  });
  const tagValue = isText ? "form" : "div";

  useEffect(() => {
    if (localData) {
      return;
    } else {
      navigate("/login");
    }
  });
  function onSubmit() {
    console.log(getValues());
  }

  return (
    <div className="w-full gap-8 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <RxAvatar size={50} />
        <div className="mt-2.5">
          <h2 className="text-2xl font-bold">Welcome, {userData.name}</h2>
        </div>
      </div>
      {React.createElement(
        tagValue,
        {
          className: "grid grid-cols-2 items-center justify-between w-2/3",
          onSubmit: handleSubmit(onSubmit),
        },
        <>
          <InputAndText />
          <div>2</div>
          <div>3 </div>
        </>
      )}
    </div>
  );
};

export default Page;
