import { FaSearch } from 'react-icons/fa';

import logo2 from '../../assets/logo/logo3.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const navLink = <>
        <li>
            <Link>Our Platforms</Link>
        </li>
        <li>
            <Link>Solution</Link>
        </li>
        <li>
            <Link>Why Job Swift</Link>
        </li>
        <li>
            <Link>Resources</Link>
        </li>
        <li>
            <Link>About</Link>
        </li>

    </>
    return (
        <>
            <div className="navbar  bg-base-100  font-bold flex-col lg:flex-row">
                <div className="navbar-start lg:md:flex justify-center  ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className=" ">
                        <img className='h-12 w-32' src={logo2} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-slate-600">
                        {navLink}
                    </ul>
                </div>
                <div className="flex-col lg:flex-row  navbar-end gap-6 ">
                    {/* <div>
                        <FaSearch className='w-12 h-6'></FaSearch>
                    </div> */}
                    <div className="form-control">
                        <div className="input-group ">
                            <input type="text" placeholder="Search…" className="input input-bordered input-sm" />
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <button className="btn btn-outline text-green-600 font-bold btn-sm">Log In</button>

                    <button className="btn btn-outline  bg-green-500 btn-sm">Get a Demo</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;