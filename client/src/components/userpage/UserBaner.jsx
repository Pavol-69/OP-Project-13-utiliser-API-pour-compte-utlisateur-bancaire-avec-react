import "../../style/generalCSS.scss";
import "../../style/components/userpage/UserBanner.scss";
import { useSelector } from "react-redux";

function UserBanner() {
  const { firstName, lastName } = useSelector((state) => state.user);
  return (
    <>
      <div className="banner">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}!`}
        </h1>
        <button className="edit-btn">Edit Name</button>
      </div>
    </>
  );
}

export default UserBanner;
