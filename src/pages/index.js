
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Shorten from "./components/Shorten";
import Ads from "./components/Ads";
import Footer from "./components/Footer";
import ShortenWrapper from "./components/ShortenWrapper";

function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ShortenWrapper />
      <Ads />
      <Footer />
    </div>
  )
}

export default Home;