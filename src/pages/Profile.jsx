import React from 'react';
import { User, MapPin, Calendar, CreditCard, Clock, Home, History, ChevronRight, LogOut, Phone } from 'lucide-react';

const UserProfilePage = () => {
  // Sample user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
    joinDate: "January 2023",
    upcomingBookings: [
      {
        id: 1,
        property: "Seaside Villa",
        location: "Miami Beach, FL",
        dates: "Mar 15 - Mar 20, 2025",
        status: "Confirmed",
        price: "$1,250",
        image: "/api/placeholder/300/200"
      }
    ],
    bookingHistory: [
      {
        id: 2,
        property: "Mountain Retreat",
        location: "Aspen, CO",
        dates: "Dec 10 - Dec 15, 2024",
        status: "Completed",
        price: "$2,100",
        image: "/api/placeholder/300/200"
      },
      {
        id: 3,
        property: "Urban Loft",
        location: "Seattle, WA",
        dates: "Oct 5 - Oct 8, 2024",
        status: "Completed",
        price: "$800",
        image: "/api/placeholder/300/200"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-zinc-100">
      {/* Header Section */}
      <header className="border-b border-zinc-800 bg-[#1B1B1B]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold sm:text-3xl">My Profile</h1>
            <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all hover:bg-zinc-700">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Info Card */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-zinc-900 p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-600">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-sm text-zinc-400">Member since {user.joinDate}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin className="h-5 w-5 text-amber-500" />
                  <span className="text-sm">{user.address}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CreditCard className="h-5 w-5 text-amber-500" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <span className="text-sm">{user.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <div className="lg:col-span-2">
            {/* Upcoming Bookings */}
            <section className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">Upcoming Stays</h3>
              <div className="space-y-4">
                {user.upcomingBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="rounded-xl bg-zinc-900 p-4 transition-all hover:bg-zinc-800 sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <img
                        src={booking.image}
                        alt={booking.property}
                        className="h-32 w-full rounded-lg object-cover sm:h-24 sm:w-36"
                      />
                      <div className="flex flex-1 flex-col gap-2">
                        <h4 className="text-lg font-medium">{booking.property}</h4>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <MapPin className="h-4 w-4" />
                            <span>{booking.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.dates}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-500">{booking.price}</span>
                          <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Booking History */}
            <section>
              <h3 className="mb-4 text-xl font-semibold">Booking History</h3>
              <div className="space-y-4">
                {user.bookingHistory.map((booking) => (
                  <div
                    key={booking.id}
                    className="rounded-xl bg-zinc-900 p-4 transition-all hover:bg-zinc-800 sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <img
                        src={booking.image}
                        alt={booking.property}
                        className="h-32 w-full rounded-lg object-cover sm:h-24 sm:w-36"
                      />
                      <div className="flex flex-1 flex-col gap-2">
                        <h4 className="text-lg font-medium">{booking.property}</h4>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <MapPin className="h-4 w-4" />
                            <span>{booking.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.dates}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-500">{booking.price}</span>
                          <span className="rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-zinc-400">
                            {booking.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;