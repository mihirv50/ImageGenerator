import Button from "./ui/Button"

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent p-4 container m-auto flex items-center justify-between mt-5">
        <h1 className="text-2xl font-semibold text-white">Image Generator</h1>
        <Button size="md" text="Toggle" variant="secondary"/>
    </nav>
  )
}

export default Navbar