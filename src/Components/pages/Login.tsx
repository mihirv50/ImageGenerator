import Button from "../ui/Button";
import Input from "../ui/Input";

const Login = () => {
  return (
    <div className="w-[30vw] h-[40vh] text-white rounded-lg p-4 bg-zinc-700 opacity-80 flex flex-col gap-5 items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-semibold">Log In</h1>
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      <Button size="lg" text="Log In" variant="primary" />
    </div>
  );
};

export default Login;
