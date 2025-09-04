import React from "react";
import Calendario from "../../components/calendario/Calendario";
import SideBarAlumno from "../../components/sidebar/sidebar-alumno";

export default function HomeAlumno() {
  return (
    <>
      <div className="flex h-screen m-1">
        {/* Sidebar a la izquierda */}
        <aside className="w-64 bg-gray-100 shadow-lg">
          <SideBarAlumno />
        </aside>

        {/* Calendario en el medio */}
        <main className="flex-1 ">
          <Calendario />
        </main>
      </div>
    </>
  );
}
