
import { Outlet } from "react-router-dom";
import Dashboard from "./dashboard";

const LoggedInUserLayout = () => {
 return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Dashboard />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="p-4 flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LoggedInUserLayout;