import React from "react";
import mas from "../../images/mas.png";
import list from "../../images/list.png";
import unirse from "../../images/unirse.png";
import calendario from "../../images/calendario.png";
import perfil from "../../images/perfil.png";
import cerrarSesion from "../../images/cerrar-sesion-de-usuario.png";

export default function SideBarAlumno({ onChangeVista }) {
  return (
    <aside className="flex flex-col justify-between gap-1 bg-white shadow-gray-300 rounded-2xl w-fit text-[#0D0E0E]">
      <div className="gap-1">
        {/* Datos alumno */}
        <div className="w-55 flex flex-row items-center gap-2 ml-4">
          <img
            src=""
            alt="foto alumno"
            className="rounded-[50%] shadow-gray-300 shadow-2xl w-14 h-14"
          />
          <div className="ml-4">
            <h4 className="font-semibold">Nombre Alumno</h4>
            <p className="text-gray-700 italic">email@email.com</p>
          </div>
        </div>

        {/* Menú principal */}
        <div className="flex flex-col gap-2 mt-4 text-[#212122] font-normal ml-4">
          <button
            onClick={() => onChangeVista("")}
            className="w-55 text-left rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm transition-all duration-200"
          >
            <img src={mas} alt="Signo de mas" className="w-5 h-5 mr-1" />
            Mis Clases
          </button>

          <button
            onClick={() => onChangeVista("")}
            className="w-55 text-left rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm transition-all duration-200"
          >
            <img src={list} alt="svg de una lista" className="w-5 h-5 mr-1" />
            Mis calificaciones
          </button>

          <button
            onClick={() => onChangeVista("unirse")}
            className="w-55 text-left rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm transition-all duration-200"
          >
            <img src={unirse} alt="svg de un numero" className="w-5 h-5 mr-1" />
            Unirme a una clase
          </button>

          <button
            onClick={() => onChangeVista("calendario")}
            className="w-55 text-left rounded-2xl flex flex-row h-12 items-center gap-1 pr-1 pl-1 hover:bg-[#137fec] hover:text-white hover:shadow-sm transition-all duration-200"
          >
            <img
              src={calendario}
              alt="svg de un calendario"
              className="w-5 h-5 mr-1"
            />
            Calendario
          </button>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="ml-4">
        <button
          onClick={() => onChangeVista("perfil")}
          className="w-55 text-left rounded-2xl flex flex-row h-12 items-center gap-1 font-normal text-gray-700 hover:bg-[#137fec] hover:text-white hover:shadow-sm transition-all duration-200"
        >
          <img src={perfil} alt="svg de perfil" className="w-8 h-8" />
          Mi Perfil
        </button>

        <button
          onClick={() => alert("Cerrar sesión")} // acá podrías disparar logout real
          className="w-55 text-left ml-0 rounded-2xl flex flex-row h-12 items-center gap-1 font-medium text-gray-700 hover:bg-[#137fec] hover:text-white hover:shadow-sm transition-all duration-200"
        >
          <img
            src={cerrarSesion}
            alt="svg de cerrar sesion"
            className="w-8 h-8"
          />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
