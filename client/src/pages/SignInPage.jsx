// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignInForm from "../components/signinpage/SignInForm";

// Style
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";

function SignInPage({ bgCol }) {
  return (
    <>
      <Header />
      <main className="main-ctn" style={{ backgroundColor: bgCol }}>
        <SignInForm />
      </main>
      <Footer />
    </>
  );
}

export default SignInPage;
