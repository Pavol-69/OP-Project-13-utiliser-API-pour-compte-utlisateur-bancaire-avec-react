import "../../style/generalCSS.scss";
import "../../style/components/header/LinkButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/slices/userSlice";

function SignOutButton() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(userSlice.actions.userSignOut())}
      className="elt-ct hor link link_btn"
    >
      <FontAwesomeIcon
        icon={faSignOut}
        style={{
          color: "#000000",
        }}
        size="sm"
      />
      <span> Sign Out</span>
    </div>
  );
}

export default SignOutButton;
