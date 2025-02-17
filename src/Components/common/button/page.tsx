import { props } from "../../../utils/interfaces/componentProps";
import { NavLink } from "react-router-dom";
const Page = ({
  isLink,
  text,
  classCss,
  otherLink,
  link,
  id,
  type = "button",
  ...props
}: Partial<props>) => {
  const commonCss = `py-3 text-center focus:outline-none px-4 bg-black text-white hover:text-black hover:bg-white rounded-xl hover:drop-shadow-lg border border-black transition-all ${classCss}`;
  return isLink ? (
    <NavLink
      to={otherLink ? link || "" : `/product/${id}`}
      className={commonCss}
      onClick={() => window.scrollTo(0, 0)}
      {...props}
    >
      {text}
    </NavLink>
  ) : (
    <button type={type} className={commonCss} {...props}>
      {text}
    </button>
  );
};

export default Page;
