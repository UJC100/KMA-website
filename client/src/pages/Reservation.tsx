import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { events } from "../component/demoData";
import { MapPinIcon } from "@heroicons/react/24/solid";




const Reservation = () => {
    const apiUrl = import.meta.env.VITE_BASE_API_URL
    const { eventId } = useParams();
    const navigate = useNavigate();

  const event = events.find((eventData) => {
    const eventIdSting = eventData.id.toString()

    if (eventData) return eventIdSting === eventId;   
  });
  
  if(!event) throw new Error('event not found')

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1); // default 1 ticket
  const [loading, setLoading] = useState(false);

  const TICKET_PRICE = event.price // PHP 50.00 in centavos

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const totalAmount = (TICKET_PRICE * quantity)/ 100;

    try {
      const res = await axios.post(`${apiUrl}/reservations`, {
        name,
        eventName: event.title,
        location: event.location,
        date: event.date,
        email,
        quantity,
        amount: totalAmount,
        eventId: eventId
        // pass the computed total to backend
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
    navigate(`/payment/${res.data._id}`, {
      state: {
        amount: totalAmount,
      }})
      alert("Reservation successful!");
      
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="bg-[#f6f4f0] flex  flex-col md:flex-row h-screen gap-3 md:gap-0 md:p-5 md:pt-24">
       <div className="w-full md:w-1/2 flex item-center pt-20 ">

            <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-lg mx-auto p-6 bg-white shadow rounded "
    >
      <h2 className="text-4xl font-semibold mb-10 text-center text-gray-700">Reserve Your Tickets</h2>
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full"
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
      <div className="bg-[#121820]/60 bg-blend-overlay  bg-no-repeat bg-cover bg-center w-full  md:w-1/2  md:rounded-2xl pt-10 md:pt-25 pb-5 px-5 md:px10 text-white" style={{ backgroundImage: `url(${event.image})` }}>
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
    </div>
  );
};

export default Reservation;