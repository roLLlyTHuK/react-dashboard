import { useLogOutRedirect } from "../hooks/useLogOutRedirect";
export const DashboardPage = () => {
  useLogOutRedirect();
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};
