import SessionsBar from "../../component/logged-in-user/SessionsBar";



const dashboard = () => {
  return (<div className="h-screen bg-[#f6f4f0] px-5 py-10">
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-3xl font-semibold">My Dashboard</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create New Session</button>
    </div>
    <SessionsBar/>
  </div>);
};

export default dashboard;