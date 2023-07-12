import { Routes, useLocation, Route, Router } from "react-router-dom";
import Nav from "./Nav";
import Home from "../../pages/Home";


function NavRoute(props) {
  return (
    <div className=" ">

  
<Nav/>   

     
      <Routes  >
      <Route path="*" element={<Home />} exact />
      <Route path="/" element={<Home />} exact />
  


        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
        
    
    </div>
  );
}

export default NavRoute;
