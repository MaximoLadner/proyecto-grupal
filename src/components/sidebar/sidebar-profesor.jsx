import React from "react";
import { Link } from "wouter";

export default function SideBarProfesor() {
  return (
    <aside className="flex flex-col justify-between bg-white shadow-lg rounded-2xl w-64 h-screen p-6 border border-gray-100">
      {/* Perfil */}
      <div>
        <div className="flex items-center gap-3">
          <img
            src=""
            alt="foto profesor"
            className="rounded-full shadow-md w-14 h-14 border-2 border-[#137fec] object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Nombre Profesor</h4>
            <p className="text-gray-500 text-sm">email@email.com</p>
          </div>
        </div>

        {/* Links principales */}
        <nav className="flex flex-col gap-2 mt-8 text-gray-800 font-medium">
          <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#137fec] hover:text-white transition-all duration-200 cursor-pointer">
            <img src="" alt="icono +" className="w-6 h-6" />
            Nueva clase
          </Link>
          <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#137fec] hover:text-white transition-all duration-200 cursor-pointer">
            <img src="" alt="icono lista" className="w-6 h-6" />
            Mis clases
          </Link>
          <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#137fec] hover:text-white transition-all duration-200 cursor-pointer">
            <img src="" alt="icono notas" className="w-6 h-6" />
            Registrar calificaciones
          </Link>
          <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#137fec] hover:text-white transition-all duration-200 cursor-pointer">
            <img src="" alt="icono calendario" className="w-6 h-6" />
            Calendario
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-4 mt-6 flex flex-col gap-2 text-gray-600">
        <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer">
          <img src="" alt="icono perfil" className="w-6 h-6" />
          Mi Perfil
        </Link>
        <Link className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 transition-all duration-200 cursor-pointer font-semibold">
          <img src="" alt="icono logout" className="w-6 h-6" />
          Cerrar sesión
        </Link>
      </div>
    </aside>
  );
}
