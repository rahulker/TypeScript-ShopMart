import { useDispatch } from "react-redux";
import { Button } from "../../exports";
import { useNavigate } from "react-router-dom";
import { handleDeleteUser } from "../../../utils/apis/user";
import { handleLogOut } from "../../../store/slices/userSlice";

const Page = ({
  setShowDeleteModal,
  userId,
}: {
  setShowDeleteModal: (boolean: boolean) => void;
  userId: number;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleDeleteAndSendUser(id: number) {
    dispatch(handleLogOut());
    handleDeleteUser(id);
    navigate("/");
  }
  return (
    <div className="modal__backdrop flex flex-col px-3 justify-center items-center">
      <div className="modal__container">
        <h2 className="capitalize text-lg md:text-2xl leading-8">
          are you sure?
        </h2>
        <p className="md:text-lg text-sm mt-2">
          Are you sure, You want to do this action. Once it is done then it can
          {"'"}t be reverted
        </p>
        <div className="flex justify-end gap-4 items-center mt-4">
          <Button
            text="Yes"
            classCss="w-[100px]"
            onClick={() => handleDeleteAndSendUser(userId)}
          />
          <Button
            text="Cancel"
            classCss="w-[100px]"
            onClick={() => setShowDeleteModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
