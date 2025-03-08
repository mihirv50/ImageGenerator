import StarIcon from "../icons/StarIcon";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-col">
        <Navbar />
        <div className="w-[60vw] h-[70vh] mt-20 bg-zinc-700 opacity-90">
          <div className="w-full h-[80%]">
              <img src="" alt="" />
          </div>
          <span className="w-full text-zinc-200"><hr /></span>
          <div className="w-full h-[20%] flex gap-4 items-center justify-center">
            <Input placeholder="Enter a prompt..." />
            <Button
              size="sm"
              variant="primary"
              text="Generate Image"
              startIcon={<StarIcon />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
