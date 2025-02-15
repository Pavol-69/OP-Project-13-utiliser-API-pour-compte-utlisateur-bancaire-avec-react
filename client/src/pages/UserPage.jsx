import Header from "../components/header/Header";
import Footer from "../components/Footer";
import UserBanner from "../components/userpage/UserBaner";
import UserUpdateForm from "../components/userpage/UserUpdateform";
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";
import { useState } from "react";

function UserPage({ bgCol }) {
  const [displayUserForm, setDisplayUserForm] = useState(false);
  return (
    <>
      <Header />
      <main className="main-ctn" style={{ backgroundColor: bgCol }}>
        <UserBanner setDisplayUserForm={setDisplayUserForm} />
      </main>
      <Footer />
      {displayUserForm ? (
        <UserUpdateForm setDisplayUserForm={setDisplayUserForm} />
      ) : null}
    </>
  );
}

export default UserPage;
