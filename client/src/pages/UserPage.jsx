import Header from "../components/header/Header";
import Footer from "../components/Footer";
import UserBanner from "../components/userpage/UserBaner";
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";

function UserPage({ bgCol }) {
  return (
    <>
      <Header />
      <main className="main-ctn" style={{ backgroundColor: bgCol }}>
        <UserBanner />
      </main>
      <Footer />
    </>
  );
}

export default UserPage;
