import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-12 '>
            <div className="navbar bg-[#7E90FE0D]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
            <NavLink to='/applied'>Applied Jobs</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl text-[#1A1919] font-bold">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-4 text-[#757575] text-base font-medium">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/statistics'>Statistics</NavLink>
      <NavLink to='/applied'>Applied Jobs</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary text-white">Star Applying</a>
  </div>
</div>
        </div>
    );
};

export default Header;