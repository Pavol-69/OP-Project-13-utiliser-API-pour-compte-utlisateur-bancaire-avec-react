// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Style
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";

function SignInPage({ bgCol }) {
  return (
    <>
      <Header />
      <main
        className="elm-ct ver main-ctn"
        style={{ backgroundColor: bgCol }}
      ></main>
      <Footer />
    </>
  );
}

export default SignInPage;
