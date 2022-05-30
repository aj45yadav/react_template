import logo from "./logo.svg";
import "./App.css";
import { Topheadbar } from './components/Topheadbar'
import NavBar from "./components/NavBar";
import Carouselbanner from "./components/Carouselbanner"
import About from "./components/About";
import Service from "./components/Service";
import Fact from "./components/Fact";
import Price from "./components/Price";
import Location from "./components/Location";
import Team from "./components/Team";
import ClientReview from "./components/ClientReview";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      {/* Top Bar Start */}
      <Topheadbar></Topheadbar>
      {/* Top Bar End */}

      {/* Nav Bar Start */}
      <NavBar></NavBar>
      {/* Nav Bar End  */}

      {/* Carousel Start */}
      <Carouselbanner></Carouselbanner>
      {/* Carousel End */}

      {/* About Start */}
      <About></About>
      {/* About End  */}

      {/* Service Start */}
      <Service></Service>
      {/* Service End */}

      {/* Facts Start */}
      <Fact></Fact>
      {/* Facts End */}

      {/* Price Start */}
      <Price></Price>
      {/* Price End */}

      {/* Location Start */}
      <Location></Location>
      {/* Location End */}

      {/* Team Start  */}
      <Team></Team>
      {/* Team End */}

      {/* Testimonial Start */}
     <ClientReview></ClientReview>
      {/* Testimonial End */}

      {/* Blog Start */}
      <Blog></Blog>
      {/* Blog End */}

      {/* Footer Start */}
      <Footer></Footer>
      {/* Footer End */}

      {/* Back to top button */}
      <a href="abc.html" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default App;
