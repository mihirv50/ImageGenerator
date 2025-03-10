import Button from "../ui/Button";
import Input from "../ui/Input";

const Signup = () => {
  return (
    <div className="w-[30vw] h-[40vh] text-white rounded-lg p-4 bg-zinc-700 opacity-80 flex flex-col gap-5 items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-semibold">Sign Up</h1>
      <Input type="string" placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      <Input type="password" placeholder="Confirm password" />
      <Button size="lg" text="Submit" variant="primary" />
    </div>
  );
};

export default Signup;
