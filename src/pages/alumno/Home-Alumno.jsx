import React, { useState } from "react";
import Calendario from "../../components/Calendario/Calendario";
import SideBarAlumno from "../../components/sidebar/sidebar-alumno";
import DashBoard from "../../components/dashboard/dashboard";
export default function HomeAlumno() {
  // 👈 Vista inicial: dashboard
  const [vista, setVista] = useState("dashboard");

  const componentes = {
    dashboard: <DashBoard />,
    calendario: <Calendario />,
  };

  return (
    <main className="flex flex-row w-screen h-screen gap-[1rem] p-[1rem] bg-gray-200">
      {/* Sidebar controla la vista */}
      <SideBarAlumno onChangeVista={setVista} />

      <section className="flex-1 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-center text-2xl h-20 rounded-2xl bg-white">
          <h1>Header</h1>
        </div>

        {/* Contenido dinámico */}
        <div className="flex-1 rounded-2xl bg-white p-4 overflow-auto">
          {componentes[vista]}
        </div>
      </section>
    </main>
  );
}
