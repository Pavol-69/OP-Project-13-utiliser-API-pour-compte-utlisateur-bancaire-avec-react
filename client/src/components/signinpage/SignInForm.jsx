import "../../style/generalCSS.scss";
import "../../style/components/signinpage/SignInForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/slices/apiSlice";
import { useState } from "react";

function SignIn() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: "", password: "" });
  const [showModal, setShowModal] = useState(false);

  async function handleSignInForm(e) {
    e.preventDefault();
    const apiRes = await dispatch(signIn({ user }));
    if (apiRes.payload == "Error: User not found!") {
      setShowModal(true);
    }
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  function closeModal(e) {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <div className="sign-in-content">
      <FontAwesomeIcon
        icon={faCircleUser}
        style={{
          color: "#000000",
        }}
      />
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSignInForm(e)}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            onChange={(e) => handleOnChange(e)}
            value={user.email}
          ></input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleOnChange(e)}
            value={user.password}
          ></input>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
      {showModal ? (
        <div className="modal-ctn elm-ct">
          <form
            className="modal-form elm-ct ver"
            onSubmit={(e) => closeModal(e)}
          >
            <h4>Id or password incorrect.</h4>
            <button className="sign-in-button" onClick={(e) => closeModal(e)}>
              OK
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default SignIn;
