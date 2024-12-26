import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

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

  return (
    <div className="w-full gap-8 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <RxAvatar size={50} />
        <div className="mt-2.5">
          <h2 className="text-2xl font-bold">Welcome, {userData.name}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-between w-2/3">
        <div>1</div>
        <div>2</div>
        <div>3 </div>
      </div>
    </div>
  );
};

export default Page;
