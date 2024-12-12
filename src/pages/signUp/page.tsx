import { RxAvatar } from "react-icons/rx";
import { InputAndLabel } from "../../Components/exports";

const Page = () => {
  return (
    <section className="mx-20 my-10">
      <div className="flex flex-col items-center ">
        <RxAvatar size={60} />
        <h2 className="mt-2 text-2xl font-bold">Welcome back to Shop Mart</h2>
        <p className="mt-1 text-sm">Sign up to create a account</p>
        <div className="mt-5 lg:min-w-[380px]">
          <form>
            <InputAndLabel text="Name" name="name" type="text" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
