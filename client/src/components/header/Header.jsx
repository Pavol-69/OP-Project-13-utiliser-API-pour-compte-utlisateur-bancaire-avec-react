import "../../style/generalCSS.scss";
import "../../style/components/header/Header.scss";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const isAuth = useSelector((state) => state.user.auth);
  return (
    <header>
      <Link to={"/"} className="a-logo">
        <img src={logo} />
      </Link>
      {isAuth ? <SignOutButton /> : <SignInButton />}
    </header>
  );
}

export default Header;
