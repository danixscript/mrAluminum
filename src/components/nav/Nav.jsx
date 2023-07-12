import { Routes, NavLink, Route, Router } from "react-router-dom";


function Nav(props) {

  return (
  <div className="nav">
    <div className="links">
        <NavLink to={'/home'}>
            home
        </NavLink>
    </div>

  </div>
  );
}

export default Nav;
