import { useEffect, useState } from 'react';

export default function TripsList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/trips/all')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch trips');
        return res.json();
      })
      .then(data => {
        setTrips(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading trips...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>All Trips</h2>
      <ul>
        {trips.map(trip => (
          <li key={trip._id}>
            <strong>Destination:</strong> {trip.destination}<br/>
            <strong>Start:</strong> {trip.startDate}<br/>
            <strong>End:</strong> {trip.endDate}<br/>
            <strong>Travel Type:</strong> {trip.travelType}<br/>
            <strong>Costs:</strong> {JSON.stringify(trip.costs)}<br/>
            <strong>Notes:</strong> {trip.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}
