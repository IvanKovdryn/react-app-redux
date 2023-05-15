import { CgMenu } from "react-icons/cg";
import { BsFillBookmarkFill } from "react-icons/bs";
import logo from "./assets/imba.svg";
import { Link } from "react-router-dom";
import "./styles/nav.scss";
import { useSelector } from "react-redux";

export const Nav = () => {
  const saved = useSelector((state) => state.reducer);
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" width={80} />
        <Link to="/saved">
          <div className="relative">
            <BsFillBookmarkFill size="25px" />
            {saved.length > 0 && (
              <span className="absolute top-[10px] left-[10px] bg-slate-600 text-xs w-[20px] h-[20px] flex items-center justify-center rounded-full">
                {saved.length}
              </span>
            )}
          </div>
        </Link>
      </div>
      <ul className="hidden items-center md:flex">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/">Main</Link>
        </li>
      </ul>
      <button className="md:hidden">
        <CgMenu size={24} />
      </button>
    </nav>
  );
};
