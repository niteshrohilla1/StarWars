import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import { logout } from "../../store/slices/AuthSlice";
import FilterBar from "../FilterBar";
export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const hideSearch = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4  rounded-3xl px-10 md:shadow-2xl">
      <div className="flex w-full items-center gap-4 md:gap-6 flex-col md:flex-row">
        <Link
          to="/"
          className="text-3xl font-extralight italic text-white transform rotate-[-4deg] drop-shadow-sm mt-1"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Star Wars
        </Link>

        {!hideSearch && (
          <div className="flex items-center w-full max-w-xl mt-3 md:mt-0">
            <SearchBar />
          </div>
        )}
      </div>
      {user ? (
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
          className=" hidden lg:block bg-gradient-to-r from-blue-500 to-red-500 px-5 py-2 rounded-full font-semibold shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:opacity-90"
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-4 w-full mt-5 md:mt-0 justify-center md:justify-end ">
          <Link
            to="/login"
            className="px-5 py-2 border border-blue-400 rounded-full hover:bg-blue-600/20 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 border border-red-400 rounded-full hover:bg-red-600/20 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
