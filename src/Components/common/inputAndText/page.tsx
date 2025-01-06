const Page = ({
  isText,
  type,
  values,
  error,
  label,
  name,
  setValue,
  register,
}: Partial<textAndInput>) => {
  const CommenDiv = "flex flex-col gap-2.5";
  return isText ? (
    <div className={CommenDiv}>
      <h2 className="text-xl font-bold leading-5">{label}</h2>
      <p className="text-lg font-medium leading-4">{values}</p>
    </div>
  ) : (
    <div className={CommenDiv}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={setValue ? setValue("") : ""}
        name={name}
        id={name}
        {...(register ? register(name || "") : {})}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default Page;

interface textAndInput {
  isText: boolean;
  register: (name: string) => void;
  type: string;
  values: string | number;
  name: string;
  setValue: (value: string) => undefined;
  label: string;
  error: string;
}
