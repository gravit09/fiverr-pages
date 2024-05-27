import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import Gigs from "./Pages/gigs/Gigs";
import Gig from "./Pages/gig/Gig";

function App() {
  return (
    <div>
      <Navbar />
      <Gigs />
      <Footer />
    </div>
  );
}

export default App;
