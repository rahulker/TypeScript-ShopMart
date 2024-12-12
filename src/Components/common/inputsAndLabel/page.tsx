import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { inputAndLabel } from "../../../utils/interfaces/componentProps";

const Page = ({
  name,
  textStyle,
  text,
  isPassword = false,
  classCss = "",
  register,
  errorMessage,
  type,
}: inputAndLabel) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label className={textStyle} htmlFor={name}>
        {text}
      </label>
      {isPassword ? (
        <div className={`${classCss} flex items-center`}>
          <input
            {...(register ? register(name || "") : {})}
            className="w-[90%] focus:border-none focus:outline-none"
            name={name}
            id={name}
            type={showPass ? "text" : type}
          />
          {showPass ? (
            <FaEyeSlash
              className="px-1 w-[10%] cursor-pointer"
              onClick={() => setShowPass(false)}
            />
          ) : (
            <FaEye
              className="px-1 w-[10%] cursor-pointer"
              onClick={() => setShowPass(true)}
            />
          )}
        </div>
      ) : (
        <input
          {...(register ? register(name || "") : {})} // Use register for useForm
          className={classCss}
          name={name}
          id={name}
          type={type}
        />
      )}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default Page;
