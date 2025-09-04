import React from "react";

export default function SideBarProfesor() {
  return (
    <aside className="flex flex-col justify-between gap-1 m-1 p-3 bg-white shadow-gray-300 rounded-2xl w-fit h-247 ">
      <div className="gap-1">
        <div className="flex flex-row items-center gap-2">
          <img
            src=""
            alt="foto profesor"
            className="rounded-[50%] shadow-gray-300 shadow-2xl w-14 h-14"
          />
          <div>
            <h4>Nombre Profesor</h4>
            <p className="text-gray-700">email@email.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <button className="rounded-2xl flex flex-row h-12 items-center gap-1">
            <img src="" alt="svg de signo +" className="w-8 h-8" />
            Nueva clase
          </button>
          <button className="rounded-2xl flex flex-row h-12 items-center gap-1">
            <img src="" alt="svg de una lista" className="w-8 h-8" />
            Mis clases
          </button>
          <button className="rounded-2xl flex flex-row h-12 items-center gap-1">
            <img src="" alt="svg de un numero" className="w-8 h-8" />
            Registrar calificaciones
          </button>
          <button className="rounded-2xl flex flex-row h-12 items-center gap-1">
            <img src="" alt="svg de un calendario" className="w-8 h-8" />
            Calendario
          </button>
        </div>
      </div>
      <div>
        <button className="rounded-2xl flex flex-row h-12 items-center gap-1">
          <img src="" alt="svg de cerrar sesion" className="w-8 h-8" />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
