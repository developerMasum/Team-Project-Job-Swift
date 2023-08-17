import logo2 from "../../assets/logo/logo3.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link>Our Platforms</Link>
      </li>
      <li>
        <Link>Solution</Link>
      </li>
      <li>
        <Link>Why Job Swift </Link>
      </li>
      <li>
        <Link>Resources</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
    </>
  );

  // lg:md:flex justify-center
  return (
    <>
      <div className="flex flex-col navbar rounded-xl shadow-lg bg-base-400   bg-opacity-40  fixed mt-[-120px] lg:md:flex-row bg-base-200 lg:md:mt-[-80px] max-w-7xl mx-auto ">
        <div className="flex justify-around gap-40 lg:md:navbar-start lg:md:gap-10">
          <div className="dropdown bg-green-400">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-box w-72"
            >
              {navLink}

              <div className="input-group my-3 ml-6">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered input-sm px-[-10px]"
                />
                <button className="btn btn-square btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex gap-6 justify-center items-center mr-8">
                <button className="btn btn-outline text-green-600 font-bold btn-sm my-3 w-1/3">
                  Log In
                </button>
                <button className="btn btn-outline  bg-green-500 btn-sm mt-4 lg:md:mt-0 my-3 w-1/2">
                  Get a Demo
                </button>
              </div>
            </ul>
          </div>
          <a className=" ">
            <img
              className="h-12 w-32 rounded-lg border border-green-400"
              src={logo2}
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center mr-10 font-bold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="mr-6 flex-col mt-4  lg:md:flex-row lg:md:navbar-end   lg:md:gap-3 lg:md:justify-center lg:md:items-center lg:md:mt-0 ">
          {/* <div>
                        <FaSearch className='w-12 h-6'></FaSearch>
                    </div> */}
          <div className="form-control">
            <div className="flex gap-12">
              <div className="input-group ">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered input-sm px-[-30px] hidden lg:block"
                />
                <button className="btn btn-square btn-sm hidden lg:block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
       <Link to={'/login'}>
       <button className="  btn btn-outline text-green-600 font-bold btn-sm hidden md:block">
            Log In
          </button>
       </Link>

          <button className="btn btn-outline  bg-green-500 btn-sm mt-4 lg:md:mt-0 hidden md:block">
            Get a Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;