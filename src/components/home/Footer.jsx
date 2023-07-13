import '../../css/home.css'
import Logo1 from '../../images/logo.jpeg'

function Footer() {
  return (
 <div className="footer flexCol center"> 
 


  <img className=' h90' src={Logo1} alt="" />
 
     <h1 className="phone cw"><a href="tel:+97247901169">054-7901169</a></h1>
    
 </div>
  );
}

export default Footer;
