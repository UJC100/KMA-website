import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";


const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const JoinTeam = lazy(() => import("./pages/JoinTeam"));
const MentorsPage = lazy(() => import("./pages/MentorsPage"));
const Teams = lazy(() => import("./pages/Teams"));
const NotFound = lazy(() => import("./component/NotFound"));
const Events = lazy(() => import("./pages/Events"));
const Reservation = lazy(() => import("./pages/Reservation"));
const Dashboard = lazy(() => import("./pages/logged-in-user-account/Dashboard"));
const LoggedInUserLayout = lazy(
  () => import("./pages/logged-in-user-account/LoggedInUserLayout")
);
const MakePayments = lazy(() => import("./pages/MakePayments"));

function App() {
  const location = useLocation();

  const noLayoutPaths = ["/join-team", "/payment", "/success", "/page-not-found"];
  const isOwnerPath = location.pathname.startsWith("owner");
  const isMyAccount = location.pathname.startsWith("/my-account");
  const hideLayout = isOwnerPath || noLayoutPaths.includes(location.pathname);

  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      {/* Navbar only shows when not in excluded paths */}
      {!hideLayout && !isMyAccount && <Navbar onContactClick={handleOpen} />}

      <div className="min-h-[70vh]">
        {/* Wrap routes in Suspense */}
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <p>Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/join-team" element={<JoinTeam />} />
            <Route path="/mentor/:id" element={<MentorsPage />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/events" element={<Events />} />
            <Route path="/reservation/:eventId" element={<Reservation />} />
            <Route path="/payment/:paymentId" element={<MakePayments />} />
            <Route path="*" element={<NotFound />} />

            {/* ✅ Nested routes for logged-in users */}
            <Route path="/my-account" element={<LoggedInUserLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </div>

      {/* Contact Modal */}
      <Contact isOpen={showModal} onClose={handleClose} />

      {/* Footer only shows when not in excluded paths */}
      <div>{!hideLayout && !isMyAccount && <Footer />}</div>
    </div>
  );
}

export default App;
