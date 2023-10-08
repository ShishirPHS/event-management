import { Link, NavLink } from "react-router-dom";
import userDefault from "../../assets/userDefault.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then(() => {
      Swal.fire({
        icon: "success",
        title: "Log Out successful",
      });
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-10 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="ul menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-4xl">Event Management</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="ul menu menu-horizontal px-1">{links}</ul>
        <div className="ml-4 text-lg text-[#878f97] hover:text-[#242d3b] font-medium">
          {user ? (
            <button onClick={handleSignOut}>Log Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <div className="navbar-end">
        <h3 className="mr-4 font-semibold text-lg">{user?.displayName}</h3>
        <div>
          {user ? (
            <div className="w-12 h-12 border border-[#403F3F] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src={`${user?.photoURL})`}
                alt="profile picture of user"
              />
            </div>
          ) : (
            <div className="w-12 h-12 border border-[#403F3F] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src={userDefault}
                alt="default picture of user"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
