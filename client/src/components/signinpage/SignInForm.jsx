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

  async function handleSignInForm(e) {
    e.preventDefault();
    dispatch(signIn({ user }));
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
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
          ></input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleOnChange(e)}
          ></input>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
