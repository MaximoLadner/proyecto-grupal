import React from "react";

export default function PopupRol({ showModal, setShowModal, setRole }) {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-4">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-6">
          Selecciona tu rol
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div
            onClick={() => setRole("Teacher")}
            className="flex flex-col items-center justify-center p-4 sm:p-6 border rounded-xl shadow-md hover:shadow-lg cursor-pointer hover:bg-gray-100 transition"
          >
            <span className="text-3xl mb-2">👨‍🏫</span>
            <h3 className="text-base sm:text-lg font-semibold">Profesor</h3>
          </div>

          <div
            onClick={() => setRole("Student")}
            className="flex flex-col items-center justify-center p-4 sm:p-6 border rounded-xl shadow-md hover:shadow-lg cursor-pointer hover:bg-gray-100 transition"
          >
            <span className="text-3xl mb-2">🎓</span>
            <h3 className="text-base sm:text-lg font-semibold">Alumno</h3>
          </div>
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
