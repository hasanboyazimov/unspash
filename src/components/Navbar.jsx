// rrd imports
import { Link } from "react-router-dom";

//react icons
import { FaRegHeart } from "react-icons/fa";

//custom hoks
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const { navBgColor, likedImages } = useGlobalContext();
  console.log(likedImages);
  return (
    <header
      style={{ backgroundColor: navBgColor ? navBgColor : "" }}
      className="bg-slate-200 my-header"
    >
      <div className="my-container">
        <nav className="flex w-full justify-between py-5">
          <Link
            to="/"
            className="font-semibold text-2xl select-none cursor-pointer"
          >
            Hasan
          </Link>
          <div className="flex items-center">
            <Link className="mr-5 text-gray-800" to="/">
              home
            </Link>
            <Link className=" mr-5 text-gray-800" to="/about">
              about
            </Link>
            <Link className=" mr-5 text-gray-800" to="/contact">
              contact
            </Link>
            <Link to="/likedImages" className="w-full flex  items-center">
              <FaRegHeart className="text-red-500 relative" />
              <small className="asbolute top-0 right-0">
              </small>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
