import "../../style/generalCSS.scss";
import "../../style/components/userpage/UserUpdateForm.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUserInfo } from "../../store/slices/apiSlice";

function UserUpdateForm({ setDisplayUserForm }) {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const [info, setInfo] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      updateUserInfo({
        info: {
          firstName: info.firstName,
          lastName: info.lastName,
          token: sessionStorage.token,
        },
      })
    );
    setDisplayUserForm(false);
  }

  function handleCancel(e) {
    e.preventDefault();
    setDisplayUserForm(false);
  }

  function handleOnChange(e) {
    setInfo({ ...info, [e.target.id]: e.target.value });
  }

  return (
    <div className="form-ctn elm-ct">
      <div className="form-bg"></div>
      <form className="user-form elm-ct ver" onSubmit={(e) => handleSubmit(e)}>
        <h4>User informations update</h4>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) => handleOnChange(e)}
            value={info.firstName}
          ></input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) => handleOnChange(e)}
            value={info.lastName}
          ></input>
        </div>
        <div className="btn-ctn elm-ct">
          <button className="edit-btn" onClick={(e) => handleSubmit(e)}>
            Edit Name
          </button>
          <button className="edit-btn" onClick={(e) => handleCancel(e)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserUpdateForm;
