import { Routes, NavLink, Route, Router } from "react-router-dom";
import '../../css/nav.css'
import Logo from '../../images/logo.jpeg'

function Nav(props) {

  return (
  <div className="nav flexCol center">
    <div className=" w70 flexRow align-center  bet">
    <div className="logo">
      <img src={Logo} className="img" alt="" />
    </div>
    <div className="headernav ">
      <h1 className="navheader">מ.ר אלומיניום <p className="fa fa-phone"></p>  </h1>
      
    </div>
    <div className="links">
        <NavLink className={'links'} to={'/home'}>
            דף הבית 
        </NavLink>
        <NavLink className={'links'} to={'/home'}>
        גלריה
        </NavLink>
        <NavLink className={'links'} to={'/home'}>
            אודות
        </NavLink>
        <NavLink className={'links'} to={'/home'}>
            צור קשר
        </NavLink>
    </div>

  </div>
  </div>
  );
}

export default Nav;
