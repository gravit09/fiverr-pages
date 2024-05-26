import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import Gigs from "./Pages/gigs/Gigs";

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
