import { Link } from "react-router-dom"
import "./App.jsx"
import './App.css'
import { BiSolidPlaneAlt } from "react-icons/bi";
function Navbar()
{ 
   
        const scrolltof=()=>{
            const footer=document.getElementById("f");
            footer.scrollIntoView({behavior:"smooth"});
        }
        const scrolltoo=()=>{
            const top=document.getElementById("m");
            top.scrollIntoView({behavior:"smooth"});

        }
    
    return(
       

     <div className="abc">
            <div>
          
           
            </div>
            <div className="navv">
                <Link className="xyz" to="/" onClick={scrolltoo}>Home</Link>
                <Link className="xyz" to="/menu">Log In</Link>
                <Link className="xyz" to="/" onClick={scrolltof}> Contact Us </Link>
                <Link className="xyz" to="/contact">Destinations</Link>
            </div>
         </div>
    );
};
export default Navbar;