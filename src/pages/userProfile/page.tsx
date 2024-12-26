import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const userData = useSelector((state: rootState) => state.user.userDetail);
  const localData = useSelector((state: rootState) => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (localData) {
      return;
    } else {
      navigate("/login");
    }
  });

  return <div>{userData.name}</div>;
};

export default Page;
