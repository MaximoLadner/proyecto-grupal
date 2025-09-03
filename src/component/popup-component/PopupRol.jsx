
import React from "react";
import { Link } from "wouter";

export default function PopupRol({ showModal, setShowModal, setRole }) {
  if (!showModal) return null; 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-4 transform transition-all duration-300 scale-95 opacity-0 animate-fadeZoom">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-6">
          Selecciona tu rol
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Card Profesor */}
          <Link href="/Profesor">
            <div
            onClick={() => {
              setRole("Teacher");
              setShowModal(false);
            }}
            className="flex flex-col items-center justify-center p-4 sm:p-6 border rounded-xl shadow-md hover:shadow-lg cursor-pointer hover:bg-gray-100 transition"
          >
            <span className="text-3xl mb-2">👨‍🏫</span>
            <h3 className="text-base sm:text-lg font-semibold">Profesor</h3>
          </div>
          </Link>

          {/* Card Alumno */}
          <Link href="/Alumno" className="w-full">
            <div
              onClick={() => {
                setRole("Student");
                setShowModal(false);
              }}
              className="flex flex-col items-center justify-center p-4 sm:p-6 border rounded-xl shadow-md hover:shadow-lg cursor-pointer hover:bg-gray-100 transition"
            >
              <span className="text-3xl mb-2">🎓</span>
              <h3 className="text-base sm:text-lg font-semibold">Alumno</h3>
            </div>
          </Link>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="mt-6 w-full h-11 sm:h-12 rounded-md bg-gray-200 hover:bg-gray-300 font-medium"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}