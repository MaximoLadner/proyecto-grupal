import React, { useState } from "react";
import MisClases from "../../components/Clases/MisClases";
import SideBarProfesor from "../../components/sidebar/sidebar-profesor";
import Calendario from "../../components/Calendario/Calendario";
import DashBoard from "../../components/dashboard/dashboard";

export default function HomeProfesor() {
  const [vista, setVista] = useState("dashboard");

  const componentes = {
    clases: <MisClases />,
    calendario: <Calendario />,
    dashboard: <DashBoard />,
  };

  return (
    <main className="flex flex-row  gap-[1rem] p-[1rem] bg-gray-200">
      {/* Sidebar controla la vista */}
      <SideBarProfesor onChangeVista={setVista} />

      <section className="flex-1 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-center text-2xl h-20 rounded-2xl bg-white">
          <h1>Header</h1>
        </div>

        {/* Contenido dinámico */}
        <div className="flex-1 rounded-2xl bg-white p-4">
          {componentes[vista]}
        </div>
      </section>
    </main>
  );
}
