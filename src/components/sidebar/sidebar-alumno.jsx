import React from "react";
import { Link } from "wouter";

export default function SideBarAlumno() {
  return (
    <aside className="flex flex-col justify-between gap-1 m-1 ml-1.5 p-3 bg-white shadow-gray-300 rounded-2xl w-fit h-247 text-[0D0E0E]">
      <div className="gap-1">
        <div className="w-55 flex flex-row items-center gap-2">
          <img
            src=""
            alt="foto alumno"
            className="rounded-[50%] shadow-gray-300 shadow-2xl w-14 h-14"
          />
          <div>
            <h4 className="font-semibold">Nombre Alumno</h4>
            <p className="text-gray-700 italic">email@email.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 text-[#212122] font-normal">
          <Link className="w-55 rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm">
            <img src="" alt="svg de signo +" className="w-8 h-8" />
            Mis clases
          </Link>
          <Link className="w-55 rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm">
            <img src="" alt="svg de una lista" className="w-8 h-8" />
            Mis calificaciones
          </Link>
          <Link className="w-55 rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm">
            <img src="" alt="svg de un numero" className="w-8 h-8" />
            Unirme a una clase
          </Link>
          <Link className="w-55 rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm">
            <img src="" alt="svg de un calendario" className="w-8 h-8" />
            Calendario
          </Link>
        </div>
      </div>
      <div>
        <Link className="w-55 rounded-2xl flex flex-row h-12 items-center gap-1 font-normal text-gray-700">
          <img src="" alt="svg de perfil" className="w-8 h-8" />
          Mi Perfil
        </Link>
        <Link className="w-55 rounded-2xl flex flex-row h-12 items-center gap-1 font-medium text-gray-700">
          <img src="" alt="svg de cerrar sesion" className="w-8 h-8" />
          Cerrar sesión
        </Link>
      </div>
    </aside>
  );
}
