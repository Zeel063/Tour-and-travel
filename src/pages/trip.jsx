import tripdata from "./tripdata.jsx";
import { BiSolidPlaneAlt } from "react-icons/bi";
export default function Contact(props) {
  return (
    <div className="trip">
      <div>
        <h1>
          Destinations
          <BiSolidPlaneAlt
            style={{ marginBottom: "-0.6%", marginLeft: "10px" }}
          />
        </h1>
        <p>You can discover unique destinations using Google Maps!</p>
      </div>

      <div className="cards">
        <div className="t-image">
          <img
            src="https://img.freepik.com/premium-photo/grand-canal-venice-italy_788189-5220.jpg"
            style={{ height: "0%", width: "96%" }}
          />
          <h4>Trip to Indonesia</h4>
          <p>
            Escape to the enchanting islands of Indonesia, where vibrant culture
            and breathtaking beauty await. Explore the ancient temples of
            Borobudur and Prambanan, and marvel at the stunning landscapes of
            Bali and Lombok. Relax on pristine beaches, snorkel in crystal-clear
            waters, and experience the warm hospitality of the Indonesian
            people.
          </p>
        </div>
        <div className="t-image">
          <img
            src="https://www.travelinglifestyle.net/wp-content/uploads/2022/11/best-beaches-malaysia-1.jpg"
            height={"80%"}
          />
          <h4>Trip to Malaysia</h4>
          <p>
            Discover the vibrant streets of Kuala Lumpur, where ancient
            traditions meet modern wonders. Immerse yourself in the VIBRANT
            colors and flavors of Malaysia's diverse culture. Explore the
            stunning beaches and crystal-clear waters of Langkawi, or trek
            through the lush rainforests of Taman Negara. Savor the delicious
            fusion of Malay and indian cuisine .
          </p>
        </div>

        <div className="t-image">
          <img
            src="https://theculturetrip.com/wp-content/uploads/2018/04/efh039.jpg"
            style={{ width: "98%" }}
          />
          <h4>Trip to France</h4>
          <p>
            Indulge in the charm of Paris, the City of Light, where art,
            fashion, and romance fill the air. Stroll along the Seine, visit the
            iconic Eiffel Tower, and marvel at the masterpieces in the Louvre.
            Discover the picturesque villages of Provence, the stunning
            coastline of the French Riviera, and the majestic châteaux of the
            Loire Valley.
          </p>
        </div>
      </div>

      <div className="cards2">
        <div className="t-image">
          <img
            src="https://a.cdn-hotels.com/gdcs/production86/d1396/24c2f7a5-ff3f-496f-b9fa-77bab2619024.jpg"
            style={{ height: "0%", width: "96%" }}
          />
          <h4>Trip to Bali</h4>
          <p>
            Escape to the enchanting islands of Indonesia, where vibrant culture
            and breathtaking beauty await. Explore the ancient temples of
            Borobudur and Prambanan, and marvel at the stunning landscapes of
            Bali and Lombok. Relax on pristine beaches, snorkel in crystal-clear
            waters, and experience the warm hospitality of the Indonesian
            people.
          </p>
        </div>
        <div className="t-image">
          <img
            src="https://indiapost.com/wp-content/uploads/2024/01/Lakshadweep.jpg"
            height={"80%"}
          />
          <h4>Trip to Lakshwadeep</h4>
          <p>
            Discover the vibrant streets of Kuala Lumpur, where ancient
            traditions meet modern wonders. Immerse yourself in the VIBRANT
            colors and flavors of Malaysia's diverse culture. Explore the
            stunning beaches and crystal-clear waters of Langkawi, or trek
            through the lush rainforests of Taman Negara. Savor the delicious
            fusion of Malay and indian cuisine .
          </p>
        </div>

        <div className="t-image">
          <img
            src="https://media.istockphoto.com/id/1487659201/photo/tower-bridge-in-london-uk.webp?b=1&s=170667a&w=0&k=20&c=7NuIiLiCSs34mOTBViERuqD45T0lGX8kXi3-bKlE8fg="
            style={{ width: "98%" }}
          />
          <h4>Trip to London</h4>
          <p>
            Indulge in the charm of Paris, the City of Light, where art,
            fashion, and romance fill the air. Stroll along the Seine, visit the
            iconic Eiffel Tower, and marvel at the masterpieces in the Louvre.
            Discover the picturesque villages of Provence, the stunning
            coastline of the French Riviera, and the majestic châteaux of the
            Loire Valley.
          </p>
        </div>
      </div>
    </div>
  );
}
