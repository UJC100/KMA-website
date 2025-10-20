import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../component/demoData";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { MapPinIcon } from "@heroicons/react/24/solid";
import PaymentModal from "../component/PaymentModal";

export interface Event {
  id: number;
  date: string;
  title: string;
  image: string;
  isPaid: boolean;
  location: string;
  regularPrice: number;
  vipPrice: number;
  couplesPrice: number;
  time?: string;
}


const Reservation = () => {
  const apiUrl = import.meta.env.VITE_BASE_API_URL;
  const { eventId } = useParams();
  // const navigate = useNavigate();

  const event: Event | undefined = events.find((eventData) => {
    const eventIdSting = eventData.id.toString();

    if (eventData) return eventIdSting === eventId;
  });

  if (!event) throw new Error("event not found");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticketType, setTicketType] = useState("")
  const [quantity, setQuantity] = useState(1); // default 1 ticket
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const [showModal, setShowModal] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");


  let TICKET_PRICE; // PHP 50.00 in centavos

  switch (ticketType) {
    case "VIP":
      TICKET_PRICE = event.vipPrice;
      break;
    case "COUPLES":
      TICKET_PRICE = event.couplesPrice;
      break;
    default:
      TICKET_PRICE = event.regularPrice;
      break;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const totalAmount = (TICKET_PRICE * quantity) / 100;

    try {
      const res = await axios.post(
        `${apiUrl}/payment-gateway/reserve`,
        {
          name,
          eventName: event.title,
          location: event.location,
          date: event.date,
          time: event.time,
          email,
          ticketType,
          quantity,
          amount: totalAmount,
          eventId: eventId,
          // pass the computed total to backend
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const checkoutUrl = res.data?.checkoutUrl
      
      setCheckoutUrl(checkoutUrl)
      setShowModal(true)

      // navigate(`/payment/${res.data._id}`, {
      //   state: {
      //     amount: totalAmount,
      //   },
      // });
      setSnackbar({
        open: true,
        message: "Form submitted successfully!",
        severity: "success",
      });
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: "Form submission failed. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f6f4f0] flex  flex-col md:flex-row h-screen gap-3 md:gap-0 md:p-5 md:pt-24">
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
      <div className="w-full md:w-1/2 flex item-center pt-20 ">
        <form
          onSubmit={handleSubmit}
          className="space-y-8 max-w-lg mx-auto p-6 bg-white shadow rounded "
        >
          <h2 className="text-4xl font-semibold mb-10 text-center text-gray-700">
            Reserve Your Tickets
          </h2>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70 placeholder-black/70 placeholder:italic"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70 placeholder-black/70 placeholder:italic"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div>
            <select
              name="Ticket Type"
              value={ticketType}
              onChange={(e) =>
                setTicketType(e.target.value)
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70"
            >
              <option
                value=""
                disabled
                selected
                className="italic"
              >
                Ticket Type
              </option>
              <option>REGULAR</option>
              <option>VIP</option>
              <option>COUPLES</option>
            </select>
          </div>
          <input
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-black/70 placeholder-black/70 "
            type="number"
            placeholder="Number of tickets"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />

          <p className="font-medium text-5xl font-playfair text-center text-gray-700">
            Total: PHP {(TICKET_PRICE * quantity) / 100}.00
          </p>

          <button
            type="submit"
            className="w-full font-medium cursor-pointer mt-4 mb-5 py-4 px-6 rounded-[5px] bg-gradient-to-l from-yellow-400 via-yellow-500 to-yellow-600 hover:text-blue-950 transition-colors duration-200 text-gray-700 text-xl shadow-xl"
            disabled={loading}
          >
            {loading ? "Processing..." : "Make Reservation"}
          </button>
        </form>
      </div>
      <div
        className="bg-[#121820]/60 bg-blend-overlay  bg-no-repeat bg-cover bg-center w-full  md:w-1/2  md:rounded-2xl pt-10 md:pt-25 pb-5 px-5 md:px10 text-white"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="h-full flex flex-col justify-center items-center space-y-3">
          <h1 className="text-5xl font-bold font-playfair text-center">
            {event.title}
          </h1>
          <p className="text-3xl font-playfair">{event.date}</p>
          <p className="font-playfair flex items-center">
            <span>
              <MapPinIcon className="h-4 w-4" />
            </span>
            {event.location}
          </p>
        </div>
      </div>
      {
        showModal && (
        <PaymentModal
          checkoutUrl={checkoutUrl}
          onClose={() => setShowModal(false)}
          onSuccess={() => alert("Payment successful! 🎉")}
          onCancel={() => alert("Payment cancelled.")}
        />
      )
      }
    </div>
  );
};

export default Reservation;
