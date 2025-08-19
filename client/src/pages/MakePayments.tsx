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
    const {paymentId} = useParams();
    const [reservations, setReservations] = useState<Reservation | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchReservations = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3000/api/v1/reservations/${paymentId}`, {
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
  }, [paymentId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <div className={`h-screen bg-[#f6f4f0] pt-30 px-20`}>
    <div className="font-playfair">
        <h1 className="text-6xl font-semibold mb-5">Total Amount: ₱{reservations ? reservations.amount : "N/A"}</h1>
        <h1 className="text-4xl font-semibold">Event: {reservations ? reservations.eventName : "N/A"}</h1>
        <h1 className="text-4xl font-semibold">Location: {reservations ? reservations.location : "N/A"}</h1>
        <h1 className="text-4xl font-semibold">Date: {reservations ? reservations.date : "N/A"}</h1>
    </div>
    <div>
        <h1 className="text-3xl font-semibold mt-10 mb-5">Payment Options</h1>
        <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">GCash</h2>
            <img src={assets.GCashLogo} alt="GCash Logo" className="w-32 mb-3" />
            <p>Pay using GCash for a quick and easy transaction.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">BDO</h2>
            <img src={assets.BDOLogo} alt="BDO Logo" className="w-32 mb-3" />
            <p>Use BDO for secure online payments.</p>
            </div>
        </div>
    </div>
  </div>);
};

export default MakePayments;