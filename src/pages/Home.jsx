import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  {
    return (
      <div style={{ padding: "0", margin: "0" }} id="m">
        <img
          src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=cold-snow-dawn-618833.jpg&fm=jpg"
          width="1500px"
          height="800px"
        />
        <div className="text" >
          <h1 style={{  fontWeight:"bold" }}>Heed the Call Of nature and leave it all behind</h1>
          <button className="btn" >Book Now
          <FaArrowRightLong style={{  marginLeft:"10px" , marginTop:"2px",marginRight:"2px", paddingTop:"0px", top:"10%" , marginBottom:"-2.5%"}}/>
          </button>
        </div>
        <div
          className="sub"
          style={{ display: "flex", justifyContent: "center", flex: "wrap", marginTop :"-2%"}}
        >
          <div
            className="subimg"
            style={{ backgroundColor: " rgb(240,255,240)", maxWidth: "2800px" }}
          >
            <h1 style={{ fontFamily: ''}}>Leave it to us!</h1>
            <h3 style={{ color: "black"  }}>
              We provide you wIth some facilities that can make your travelling
              much easier and exciting.
            </h3>
          </div>

          <div className="subimg">
            <img
              src="https://wallpapers.com/images/hd/red-vintage-car-retro-aesthetic-iphone-rr8gn5ffy5yzuwsk.jpg"
              height="330px"
              width="250px"
              style={{
                marginLeft: "0px",
                borderRadius: "13px",
                flex: "00 auto",
              }}
            />
            <h2>Customized Tours</h2>
            <p>
              Provide you with customized tours and safety along with comfort.
            </p>
          </div>

          <div className="subimg">
            <img
              src="https://www.westburygardenrooms.com/wp-content/uploads/2021/04/DC4236-032-768x1152.jpg"
              height="330px"
              width="250px"
              style={{
                borderRadius: "13px",
                marginLeft: "0px",
                flex: "00 auto",
              }}
            />
            <h2>Hassle free arrangements </h2>
            <p>We provide you with hassle free arrangements</p>
          </div>

          <div className="subimg">
            <title></title>
            <img
              src="https://img.freepik.com/premium-photo/stock-photo-wooden-boat-water-forest_759095-39728.jpg"
              height="330px"
              width="250px"
              style={{
                marginLeft: "0px",
                borderRadius: "13px",
                flex: "00 auto",
              }}
            />
            <h2>Flexible Rebooking policy</h2>
            <p style={{ display: "inline-block", maxWidth: "550px" }}>
              This will help build connection between users and us that
              hopefully leads to a working relationship
            </p>
          </div>
        </div>
        <div>
          <h1 style={{ textAlign: "center" }}>
            <i>
              <span style={{ display: "inline-block" }}>Nature</span>

              <span
                style={{
                  display: "inline-block",
                  color: "teal",
                  marginLeft: "30px",
                }}
              >
                Adventure
              </span>
            </i>
          </h1>
          <div className="down" style={{ display: "flex", maxWidth: "2500" }}>
            <div className="im"></div>

            <div className="im">
              <img
                src="https://th.bing.com/th/id/R.3cca809024079d5a26741fe974026e70?rik=NPLshKmdsZYALA&riu=http%3a%2f%2fmedia.cntraveler.com%2fphotos%2f598339c9b7a86962e8e27c5d%2fmaster%2fpass%2fParis_GettyImages-601763009.jpg&ehk=1sSok1VLsf46Z7UigpsucOVYwAclWQL1zfyCy5qdbiw%3d&risl=&pid=ImgRaw&r=0"
                height="260px"
                width="300px"
                style={{
                  marginRight: "0px",
                  borderRadius: "0px",
                  flex: "00 auto",
                }}
              />
            </div>

            <div className="im">
              <img
                src="https://www.rjtravelagency.com/wp-content/uploads/2022/08/Tours-in-Egypt-2.jpg"
                height="260px"
                width="300px"
                style={{
                  borderRadius: "0px",
                  marginLeft: "0px",
                  flex: "00 auto",
                }}
              />
            </div>

            <div className="im">
              <img
                src="https://www.karnatakatourism.org/wp-content/uploads/2020/11/tour-package-ksrtc.jpg"
                height="260px"
                width="300px"
                style={{
                  marginLeft: "0px",
                  borderRadius: "0px",
                  flex: "00 auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="footer" id="f" style={{marginTop:"0%" ,backgroundColor:" rgb(15, 95, 109)", width:"100vw", position:"absolute"}}>
                
                <div className="foot" >
                  <div style={{display:"flex" ,marginLeft:"500px",marginTop:"15px"}}>
                <ul style={{color:"white", marginLeft:"500x"}}>Destinations
                  <li>Bali</li>
                  <li>Lakshadeep</li>
                  <li>France</li>
                  <li>Indonesia</li>
                  <li>Malaysia</li>
                  </ul>

                  <p style={{marginLeft:"80px", color:"white"}}>Call Us</p>
                 
                  <p style={{marginTop:"40px", marginLeft:"-55px"}}>+91 09887 76544</p>

                  <p style={{marginLeft:"80px", color:"white"}}> E-Mail Us</p>
                  <p style={{marginTop:"40px", marginLeft:"-70px"}}>abctravel@gmail.com</p>

                  </div>

                </div>

          <div style={{display:"flex" ,marginTop:"-1%" , marginBottom:"10px"}}>
          <FaInstagram style={{fontSize:"25px", marginLeft:"693px", color:"white"}}/>
          <ImPinterest2 style={{fontSize:"25px", marginLeft:"30px", color:"white"}}/>
          <FaWhatsapp style={{fontSize:"25px", marginLeft:"30px", color:"white"}}/>
          <FaXTwitter style={{fontSize:"25px", marginLeft:"30px", color:"white"}} />

          </div>
        </div>
      </div>
    );
  }
}
