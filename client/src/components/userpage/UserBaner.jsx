import "../../style/generalCSS.scss";
import "../../style/components/userpage/UserBanner.scss";
import { useSelector } from "react-redux";

function UserBanner({ setDisplayUserForm }) {
  const { firstName, lastName } = useSelector((state) => state.user);

  function handleClick(e) {
    e.preventDefault();
    setDisplayUserForm(true);
  }

  return (
    <div className="banner">
      <h1>
        Welcome back
        <br />
        {`${firstName} ${lastName}!`}
      </h1>
      <button onClick={(e) => handleClick(e)} className="edit-btn">
        Edit Name
      </button>
    </div>
  );
}

export default UserBanner;
