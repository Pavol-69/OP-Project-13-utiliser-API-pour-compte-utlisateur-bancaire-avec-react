import "../../style/generalCSS.scss";
import "../../style/components/header/LinkButton.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function SignInButton() {
  return (
    <Link to={"/login"} className="elt-ct hor link link_btn">
      <FontAwesomeIcon
        icon={faCircleUser}
        style={{
          color: "#000000",
        }}
      />
      <span> Sign in</span>
    </Link>
  );
}

export default SignInButton;
