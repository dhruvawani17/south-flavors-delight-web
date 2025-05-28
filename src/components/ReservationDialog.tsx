'use client';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reservationData = {
      date: selectedDate.toISOString(),
      time: selectedTime,
      guests,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      special_requests: specialRequests,
      created_at: new Date().toISOString(),
    };

    localStorage.setItem('reservationData', JSON.stringify(reservationData));
    alert('Reservation data saved locally. Click "Confirm Reservation" to submit.');
  };

  const insertReservationFromLocalStorage = async () => {
    const storedData = localStorage.getItem('reservationData');

    if (!storedData) {
      alert("No reservation data found in localStorage.");
      return;
    }

    const parsedData = JSON.parse(storedData);
    console.log("Submitting to Supabase:", parsedData);

    const { data, error } = await supabase
      .from('reservations')
      .insert([parsedData]);

    if (error) {
      console.error("Supabase insert error:", error);
      alert("Reservation failed: " + error.message);
    } else {
      alert("Reservation successful!");
      localStorage.removeItem('reservationData');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} required />
        <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
        <input type="number" min="1" value={guests} onChange={(e) => setGuests(Number(e.target.value))} placeholder="Number of Guests" required />
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
        <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Special Requests" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Reservation</button>
      </form>
      <div className="mt-4 text-center">
        <button
          onClick={insertReservationFromLocalStorage}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}
