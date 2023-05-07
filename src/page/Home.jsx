import Navbar from "../components/Navbar/Navbar";
import "../components/Home/HomeStyles.css";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="wedding-app">
      <Navbar />
      <div className="banner">
        <div className="bg-img">
          <div className="bg-phu"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
