import { useSelector } from "react-redux";
import { rootState } from "../../store/store";

const Page = () => {
  const userData = useSelector((state: rootState) => state.user.userDetail);
  console.log(userData);

  return <div>{userData.email}</div>;
};

export default Page;
