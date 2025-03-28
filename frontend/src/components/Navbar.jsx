import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-xl font-bold">MemeForge</h1>
      <DarkModeToggle />
    </nav>
  );
};
// navbar
export default Navbar;
