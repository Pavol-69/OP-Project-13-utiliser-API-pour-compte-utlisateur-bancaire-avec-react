import "../../style/generalCSS.scss";
import "../../style/components/header/LinkButton.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function UserPageButton() {
  const { firstName } = useSelector((state) => state.user);
  return (
    <Link to={"/user"} className="elt-ct hor link link_btn">
      <FontAwesomeIcon
        icon={faCircleUser}
        style={{
          color: "#000000",
        }}
      />
      <span>{` ${firstName} `}</span>
    </Link>
  );
}

export default UserPageButton;
