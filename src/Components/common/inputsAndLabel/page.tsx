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
  placeHolder = "",
  type,
}: inputAndLabel) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const commonCss = "p-2 border-black  border mt-1 w-full rounded-md";
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label className={textStyle} htmlFor={name}>
        {text}
      </label>
      {isPassword ? (
        <div className={`${classCss} ${commonCss} flex items-center`}>
          <input
            {...(register ? register(name || "") : {})}
            className="w-[90%] focus:border-none focus:outline-none"
            name={name}
            placeholder={placeHolder}
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
          {...(register ? register(name || "") : {})}
          className={[classCss, commonCss].join(" ")}
          name={name}
          id={name}
          placeholder={placeHolder}
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
