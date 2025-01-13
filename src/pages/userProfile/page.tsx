import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../store/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userProfileValidation } from "../../utils/validationSchema/userProfile";
import { Button, DeleteModel, InputAndText } from "../../Components/exports";
import { handleEditUserDetail } from "../../utils/apis/user";
import { handleAddUserDetail } from "../../store/slices/userSlice";

const Page = () => {
  const userData = useSelector((state: rootState) => state.user.userDetail);
  const localData = useSelector((state: rootState) => state.user.isLogin);
  const [isText, setIsText] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const {
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

  function handleChangeText() {
    setIsText((state) => !state);
  }
  const tagValue = isText ? "div" : "form";

  useEffect(() => {
    if (localData) {
      return;
    } else {
      navigate("/login");
    }
  });

  function onsubmit() {
    const { email, address, phoneNum } = getValues();
    const newUser = {
      ...userData,
      email,
      address,
      phoneNum,
    };
    handleEditUserDetail(newUser);
    dispatch(handleAddUserDetail(newUser));
    setIsText(true);
  }

  const tagAttribute = {
    className: "sm:w-2/3 w-full",
    ...(tagValue == "form" && { onSubmit: handleSubmit(onsubmit) }),
  };

  return (
    <>
      {showDeleteModel && (
        <DeleteModel
          setShowDeleteModal={setShowDeleteModel}
          userId={userData.id || 0}
        />
      )}
      <div className="w-full gap-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full sm:w-fit">
          <RxAvatar size={50} />
          <div>
            <h2 className="mt-2 md:text-2xl sm:text-xl text-base font-bold">
              Welcome, {userData.name}
            </h2>
          </div>
        </div>
        {React.createElement(
          tagValue,
          tagAttribute,
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:gap-10 gap-8 justify-between">
              <InputAndText
                label="Email"
                error={errors.email?.message}
                type="email"
                isText={isText}
                name="email"
                register={register}
                values={userData.email}
              />
              <InputAndText
                label="Phone Number"
                error={errors.phoneNum?.message}
                type="number"
                isText={isText}
                name="phoneNum"
                register={register}
                values={userData.phoneNum}
              />
              <InputAndText
                label="Address"
                error={errors.address?.message}
                isText={isText}
                name="address"
                register={register}
                textArea
                values={userData.address}
              />
            </div>

            <div className="flex items-center gap-4 mt-10 justify-end">
              <Button
                text={isText ? "Delete" : "Cancel"}
                classCss="w-[100px] focus:outline-none"
                onClick={() =>
                  isText ? setShowDeleteModel(true) : handleChangeText()
                }
              />
              <Button
                classCss="w-[100px] focus:outline-none"
                text={isText ? "Edit" : "Submit"}
                type={isText ? "button" : "submit"}
                onClick={() => isText && handleChangeText()}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
