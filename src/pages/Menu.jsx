import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export default function Menu() {
  return (
    <div>
      <div className="maindiv">
    <div className="login-box">
        <h2 style={{ color: " rgb(15, 95, 109)", marginLeft: "100px" , fontFamily:"revert"}}>
          Login
        </h2>
        <div className="inside">
        <form>
        
          <label>Username:</label>
          <input type="text" placeholder="Username"/>
          <FaUser style={{position :"absolute", marginTop:"-48px", marginLeft:"270px", color:"black"}} />
          <br />
          <label>Password:</label>
          
          <input type="password" placeholder="Password"/>
          <FaLock  style={{position :"absolute", marginTop:"-48px", marginLeft:"270px", color:"black"}}/>
        
          <br />
          <button type="submit" style={{ backgroundColor: " rgb(15, 95, 109)", color:"white", borderRadius:"25px" }}>
            Submit
          </button>
        </form>
        </div>
      </div>
      </div>
    </div>
  );
}
