import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SignInForm from "../components/signinpage/SignInForm";
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
