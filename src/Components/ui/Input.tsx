interface InputProps {
  onChange?: () => void;
  placeholder: string;
}

const Input = ({ onChange, placeholder }: InputProps) => {
  return (
    <input
      className="px-12 py-2 border border-zinc-100 rounded-md bg-white outline-none text-zinc-500"
      placeholder={placeholder}
    />
  );
};

export default Input;
