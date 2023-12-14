import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/userSlice";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      login: form.login.value,
      password: form.password.value,
    };
    dispatch(logIn(data));

    form.reset();
    navigate("/dashboard", { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login
        <input type="text" name="login" />{" "}
      </label>
      <br />
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
