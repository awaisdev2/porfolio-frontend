import { React } from "react";
import { Link } from "react-scroll";

const Header = () => {

  const logo = 'https://api.logo.com/api/v2/images?logo=logo_963a9b86-2406-4cb5-9f3e-0314e7f540ed&format=webp&margins=0&quality=60&width=500&background=transparent&u=1693204994'

  return (
    <header className="pt-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-96" src={logo} alt="logo" />
          </div>
          <Link
          smooth={true}
          spy={true}
            className="bg-blue-600 hover:bg-blue-800 p-2 rounded-xl cursor-pointer"
            to="work"
          >
            My Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
