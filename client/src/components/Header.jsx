// Style
import "../style/generalCSS.scss";
import "../style/components/Header.scss";

// Data
import logo from "../assets/argentBankLogo.png";

// Autre
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      <Link to={"/"} className="a-logo">
        <img src={logo} />
      </Link>
      <Link to={"/sign-in"} className="elt-ct hor link">
        <FontAwesomeIcon
          icon={faCircleUser}
          style={{
            color: "#000000",
          }}
        />
        <span> Sign in</span>
      </Link>
    </header>
  );
}

export default Header;
