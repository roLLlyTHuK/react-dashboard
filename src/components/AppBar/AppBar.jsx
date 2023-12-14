import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserMenu } from "../UserMenu/UserMenu";

import { getTasks } from "../../redux/selectors";
export const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const tasks = useSelector(getTasks);

  return (
    <header
      style={{
        padding: 8,
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        marginBottom: 8,
      }}
    >
      <nav style={{ display: "flex", gap: 8 }}>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        {isLoggedIn && <Link to="/todo">ToDo List({tasks.length})</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
