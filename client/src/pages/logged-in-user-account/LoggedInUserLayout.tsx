
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const LoggedInUserLayout = () => {
 return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LoggedInUserLayout;