// src/pages/TripsPage.jsx
import { useEffect, useState } from "react";

const TripsPage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/trips/all")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((err) => console.error("Failed to fetch trips", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
        All Your Trips
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.length === 0 ? (
          <p className="text-center text-gray-700 col-span-full">
            No trips found.
          </p>
        ) : (
          trips.map((trip) => (
            <div
              key={trip._id}
              className="bg-white rounded-2xl shadow-xl p-5 border border-purple-200 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-purple-700">
                {trip.destination}
              </h2>
              <p className="text-sm text-gray-500">
                {trip.startDate} – {trip.endDate}
              </p>
              <p className="mt-2 text-gray-700">
                Type: <span className="font-medium">{trip.travelType}</span>
              </p>
              <div className="mt-2">
                <h3 className="text-sm font-bold text-gray-600 mb-1">Costs:</h3>
                <ul className="text-gray-600 text-sm list-disc ml-4">
                  {trip.costs &&
                    Object.entries(trip.costs).map(([key, value]) => (
                      <li key={key}>
                        {key}: ₹{value}
                      </li>
                    ))}
                </ul>
              </div>
              {trip.notes && (
                <p className="mt-3 italic text-sm text-gray-500">
                  Notes: {trip.notes}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TripsPage;
