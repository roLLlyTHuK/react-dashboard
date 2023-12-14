import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/userSlice";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.user.auth.login);
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <b>{login}</b>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
