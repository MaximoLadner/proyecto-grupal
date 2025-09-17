import React from "react";

export default function PopupEstudiantes({
  students = [],
  onClose = () => {},
  onDelete = () => {},
}) {
  return (
    // clic fuera del panel cierra el popup
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Evitar que el click dentro del panel cierre el popup */}
      <div
        className="bg-white rounded-2xl shadow-lg p-6 min-w-[300px] max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-blue-700 mb-4">Alumnos</h3>

        {students.length === 0 ? (
          <p className="text-gray-500 text-center">No hay alumnos en esta clase</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {students.map((student, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-2"
              >
                <span>{student.name ?? student}</span>
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded w-full font-semibold"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
