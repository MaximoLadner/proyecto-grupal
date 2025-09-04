import React from "react";

export default function Calendario() {
  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Días del calendario con eventos
  const days = [
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: true },
    {
      day: 3,
      isCurrentMonth: true,
    },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    {
      day: 10,
      isCurrentMonth: true,
    },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    {
      day: 17,
      isCurrentMonth: true,
    },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    {
      day: 24,
      isCurrentMonth: true,
    },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {}

      {/* Main */}
      <main className="flex-1 p-8 ">
        {/* User header */}
        <div className="bg-white p-6 rounded-lg shadow-sm"></div>

        {/* Calendar */}
        <div className="mt-8 bg-white  rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <button className="text-gray-500 hover:text-gray-700">
              <span className="material-icons"> ⬅️ </span>
            </button>
            <h2 className="text-xl font-semibold text-gray-800">
              Octubre 2024
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <span className="material-icons"> ➡️ </span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-px bg-gray-200 border border-gray-200">
            {/* Encabezados */}
            {weekDays.map((d, i) => (
              <div
                key={i}
                className="text-center py-2 bg-white text-gray-600 font-medium"
              >
                {d}
              </div>
            ))}

            {/* Días */}
            {days.map((d, i) => (
              <div
                key={i}
                className={`relative bg-white p-2 h-14 sm:h-16 md:h-20 text-right ${
                  d.isCurrentMonth ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {/* Hoy destacado */}
                {d.isToday ? (
                  <span className="absolute top-2 right-2 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                    {d.day}
                  </span>
                ) : (
                  <span>{d.day}</span>
                )}

                {/* Eventos */}
                {d.events &&
                  d.events.map((ev, idx) => (
                    <div
                      key={idx}
                      className={`mt-1 text-xs rounded-md p-1 text-left ${
                        ev.color === "blue"
                          ? "bg-blue-100 text-blue-800"
                          : ev.color === "green"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {ev.title}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
