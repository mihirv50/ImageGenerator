import Button from "./ui/Button"

const Navbar = () => {
  return (
    <div className="w-full bg-transparent p-4 container m-auto flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white">Image Generator</h1>
        <Button size="sm" text="Toggle" variant="secondary"/>
    </div>
  )
}

export default Navbar