import React from "react";
import Calendario from "../../components/calendario/Calendario";
import SideBarAlumno from "../../components/sidebar/sidebar-alumno";

export default function HomeAlumno() {
  return (
    <main className="flex flex-row w-screen h-screen gap-[1rem] p-[1rem] bg-gray-200">
      {/* Sidebar a la izquierda */}
      <SideBarAlumno />
      <section className="flex-1">
        <div className="flex items-center justify-center text-2xl h-20 rounded-2xl bg-white">
          <h1>Header</h1>
        </div>
        {/* Calendario en el medio */}
        <Calendario />
      </section>
    </main>
  );
}
