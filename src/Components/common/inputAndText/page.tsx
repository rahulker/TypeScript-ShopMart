import { UseFormRegister } from "react-hook-form";

const Page = ({
  isText = true,
  type = "text",
  values = "",
  error = "",
  label = "",
  name = "",
  textArea = false,
  register,
}: Partial<TextAndInput>) => {
  const CommonDiv = "flex flex-col gap-2.5";

  return isText ? (
    <div className={CommonDiv}>
      <h2 className="text-xl font-bold leading-5">{label}</h2>
      <p className="text-lg font-medium leading-4">{values}</p>
    </div>
  ) : (
    <div className={CommonDiv}>
      <label htmlFor={name}>{label}</label>
      {textArea ? (
        <textarea
          className="p-2 border-black  border w-full rounded-md"
          rows={4}
          id={name}
          {...(register && name ? register(name) : {})}
        ></textarea>
      ) : (
        <input
          type={type}
          className="p-2 border-black  border w-full rounded-md"
          id={name}
          {...(register && name ? register(name) : {})}
        />
      )}

      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default Page;

interface TextAndInput {
  isText: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  type: string;
  values: string | number;
  name: string;
  label: string;
  textArea?: boolean;
  error: string;
}
