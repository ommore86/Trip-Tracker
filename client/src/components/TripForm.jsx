import React, { useState } from "react";

const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelType: "",
    travelCost: "",
    accommodationCost: "",
    foodCost: "",
    othersCost: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newTrip = {
      destination: formData.destination,
      startDate: formData.startDate,
      endDate: formData.endDate,
      travelType: formData.travelType,
      costs: {
        travel: Number(formData.travelCost),
        accommodation: Number(formData.accommodationCost),
        food: Number(formData.foodCost),
        others: Number(formData.othersCost),
      },
      notes: formData.notes,
    };

    try {
      const response = await fetch("http://localhost:5000/trips/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTrip),
      });

      const result = await response.json();
      if (response.ok) {
        // Success animation effect
        // Removed direct DOM manipulation for better React practice,
        // instead, we'll rely on state for conditional styling if needed.
        alert("Trip added successfully!");
        setFormData({
          destination: "",
          startDate: "",
          endDate: "",
          travelType: "",
          travelCost: "",
          accommodationCost: "",
          foodCost: "",
          othersCost: "",
          notes: ""
        });
      } else {
        alert("Error: " + (result.error || "Something went wrong"));
      }
    } catch (error) {
      alert("Error adding trip");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="form-container max-w-3xl w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-700 p-8 text-white relative">
          <h2 className="text-4xl font-extrabold text-center tracking-tight leading-tight">Dream Your Next Journey</h2>
          <p className="text-center text-purple-100 mt-3 text-lg">Embark on a new adventure, one detail at a time!</p>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '40px 40px' }}></div>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          {/* Destination */}
          <div className="space-y-2">
            <label htmlFor="destination" className="block text-base font-semibold text-gray-800">Destination</label>
            <div className="relative">
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Where is your adventurous spirit taking you? (e.g. Kyoto, Banff)"
                className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 pl-12 shadow-sm focus:shadow-md"
                required
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="startDate" className="block text-base font-semibold text-gray-800">Start Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 pl-12 shadow-sm focus:shadow-md"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="endDate" className="block text-base font-semibold text-gray-800">End Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 pl-12 shadow-sm focus:shadow-md"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Travel Type */}
          <div className="space-y-2">
            <label className="block text-base font-semibold text-gray-800">Travel Companions</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Solo", "Couple", "Family", "Friends"].map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="radio"
                    id={type}
                    name="travelType"
                    value={type}
                    checked={formData.travelType === type}
                    onChange={handleChange}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={type}
                    className="w-full py-3 px-4 text-center rounded-xl border-2 border-gray-300 peer-checked:border-fuchsia-500 peer-checked:bg-fuchsia-50 peer-checked:text-fuchsia-800 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center space-y-2 hover:shadow-md hover:border-fuchsia-300"
                  >
                    {type === "Solo" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                    {type === "Couple" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {type === "Family" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {type === "Friends" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                    <span className="text-sm font-medium">{type}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Costs */}
          <div className="space-y-4">
            <label className="block text-base font-semibold text-gray-800">Estimated Costs (in USD)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "travelCost", label: "Travel", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
                { name: "accommodationCost", label: "Accommodation", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { name: "foodCost", label: "Food", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { name: "othersCost", label: "Others", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
              ].map((field) => (
                <div key={field.name} className="space-y-1">
                  <label htmlFor={field.name} className="text-sm font-medium text-gray-600">{field.label}</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input
                      type="number"
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={`Estimated ${field.label} cost`}
                      className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-all duration-300 pl-10 shadow-sm focus:shadow-md"
                      required={field.name !== "othersCost"}
                      min="0" // Ensure non-negative costs
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={field.icon} />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block text-base font-semibold text-gray-800">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="5"
              placeholder="Jot down any special plans, activities, or memories you want to make on your trip..."
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-sm focus:shadow-md resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all duration-300 transform active:scale-95 ${isSubmitting ? 'bg-gradient-to-r from-purple-400 to-fuchsia-500 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-fuchsia-700 hover:from-purple-700 hover:to-fuchsia-800 shadow-lg hover:shadow-xl'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Planning your adventure...
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Create My Trip Plan</span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripForm;