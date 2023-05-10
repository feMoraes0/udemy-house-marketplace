import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navitate = useNavigate();

  const pathMatchRoute = (route: string) => !!(route === location.pathname);
  const getListItemClassByRoute = (route: string): string => {
    return pathMatchRoute(route)
      ? "text-black border-b-red-500"
      : "text-gray-400 border-b-transparent";
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            className="h-5 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            onClick={() => navitate('/')}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`
                cursor-pointer py-3 text-sm font-semibold border-b-[3px]
                ${getListItemClassByRoute("/")}
              `}
              onClick={() => navitate('/')}
            >
              Home
            </li>
            <li
              className={`
                cursor-pointer py-3 text-sm font-semibold border-b-[3px]
                ${getListItemClassByRoute("/offers")}
              `}
              onClick={() => navitate('/offers')}
            >
              Offers
            </li>
            <li
              className={`
                cursor-pointer py-3 text-sm font-semibold border-b-[3px]
                ${getListItemClassByRoute("/sign-in")}
              `}
              onClick={() => navitate('/sign-in')}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
