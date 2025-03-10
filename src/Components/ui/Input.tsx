interface InputProps {
  onChange?: () => void;
  placeholder: string;
  type: string
}

const Input = ({ onChange, placeholder , type }: InputProps) => {
  return (
    <input
      className="px-5 py-2  border border-zinc-100 rounded-md bg-white outline-none text-zinc-500"
      placeholder={placeholder} type={type}
    />
  );
};

export default Input;
