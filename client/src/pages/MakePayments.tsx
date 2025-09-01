import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";

interface Reservation {
  id: string;
  eventName: string;
  amount: number;
  location: string;
  date: string;
}

const MakePayments = () => {
   const apiUrl = import.meta.env.VITE_BASE_API_URL
    const {paymentId} = useParams();
    const [reservations, setReservations] = useState<Reservation | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiUrl}/${paymentId}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        setReservations(res.data);
      } catch (err) {
        console.error("Error fetching reservations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [paymentId, apiUrl]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <div className="min-h-screen bg-[#f6f4f0] py-10 px-5 md:py-20 md:px-10 lg:px-20">
  <h1 className="text-3xl md:text-5xl font-semibold text-center text-blue-900 mb-10">
    Make Payments
  </h1>

  {/* Flex container adjusts per screen size */}
  <div className="font-playfair flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center justify-between">
    
    {/* Left side: Reservation Details */}
    <div className="flex-1">
      <p className="inline-block rounded-md text-lg md:text-2xl bg-white font-semibold p-3 shadow-md">
        Send payment receipts to this phone number via Whatsapp:
      </p>

      <h1 className="text-3xl md:text-6xl font-semibold mb-5 text-green-700 mt-5">
        Total Amount: ₱{reservations ? reservations.amount : "N/A"}
      </h1>
      <h1 className="text-xl md:text-4xl font-semibold">
        Event: {reservations ? reservations.eventName : "N/A"}
      </h1>
      <h1 className="text-xl md:text-4xl font-semibold">
        Location: {reservations ? reservations.location : "N/A"}
      </h1>
      <h1 className="text-xl md:text-4xl font-semibold">
        Date: {reservations ? reservations.date : "N/A"}
      </h1>
    </div>

    {/* Right side: Payment Options */}
    <div className="flex-1 w-full">
      <h1 className="text-2xl md:text-3xl font-semibold mb-5 text-blue-600 text-center">
        Payment Options
      </h1>

      <div className="flex flex-col gap-5">
        {/* GCash */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <p className="bg-green-500 flex py-1 px-2 rounded-md justify-center text-lg md:text-xl font-bold text-white font-serif mb-2">
            Popular
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">GCash</h2>
          <img src={assets.GCashLogo} alt="GCash Logo" className="w-24 md:w-32 mb-3" />
          <p>Pay using GCash for a quick and easy transaction.</p>
          <p className="text-lg md:text-2xl font-semibold font-serif">Account Number: 09452670141</p>
        </div>

        {/* BPI */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">BPI</h2>
          <img src={assets.BpiLogo} alt="BPI Logo" className="w-24 md:w-32 mb-3" />
          <p>Use BPI for secure online payments.</p>
          <p className="text-lg md:text-2xl font-semibold font-serif">Account Number: 0649465513</p>
        </div>

        {/* BDO */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">BDO</h2>
          <img src={assets.BDOLogo} alt="BDO Logo" className="w-24 md:w-32 mb-3" />
          <p>Use BDO for secure online payments.</p>
          <p className="text-lg md:text-2xl font-semibold font-serif">Account Number: </p>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default MakePayments;