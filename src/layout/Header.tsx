import { FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Header() {
  const {products} = useCartStore((state) => state);
  return (
    <header className="max-w-full bg-gray-700 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          <NavLink to={"/"}>MyStore</NavLink>
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-white">
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FaHome size={20} />
              <span><NavLink to={"/"}>Home</NavLink></span>
            </li>

            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FaShoppingCart size={20} />
              <span><NavLink to={"/cart"}>Cart({products.length})</NavLink></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
