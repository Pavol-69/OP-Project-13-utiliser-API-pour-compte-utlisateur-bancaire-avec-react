import Header from "../components/header/Header";
import Footer from "../components/Footer";
import UserBanner from "../components/userpage/UserBaner";
import UserUpdateForm from "../components/userpage/UserUpdateform";
import "../style/generalCSS.scss";
import "../style/pages/HomePage.scss";
import { useState } from "react";
import { accounts } from "../components/userpage/AccountsMock";
import Account from "../components/userpage/Account";

function UserPage({ bgCol }) {
  const [displayUserForm, setDisplayUserForm] = useState(false);
  return (
    <>
      <Header />
      <main className="main-ctn" style={{ backgroundColor: bgCol }}>
        <UserBanner setDisplayUserForm={setDisplayUserForm} />
        <div className="account-ctn">
          {accounts.map((account, index) => (
            <Account key={index} account={account} />
          ))}
        </div>
      </main>
      <Footer />
      {displayUserForm ? (
        <UserUpdateForm setDisplayUserForm={setDisplayUserForm} />
      ) : null}
    </>
  );
}

export default UserPage;
