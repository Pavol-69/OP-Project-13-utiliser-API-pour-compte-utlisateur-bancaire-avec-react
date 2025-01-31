// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Bandeau from "../components/homepage/Bandeau";
import Features from "../components/homepage/Features";

// Style
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Bandeau />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
