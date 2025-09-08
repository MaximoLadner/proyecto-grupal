import React, { useState } from "react";
import SideBarAlumno from "../../components/sidebar/sidebar-alumno";
import DashBoard from "../../components/dashboard/dashboard";
import Calendario from "../../components/calendario/Calendario";
import UnirseClase from "../../components/clases/unirse-clase";

export default function HomeAlumno() {
  // Vista inicial: dashboard
  const [vista, setVista] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const componentes = {
    dashboard: <DashBoard />,
    calendario: <Calendario />,
    unirse: <UnirseClase />,
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* Botón menú (solo móvil) */}
        <button
          className="text-gray-600 md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="material-icons">Menu</span>
        </button>

        <h1 className="text-xl font-semibold text-gray-800">Header</h1>
        <div className="w-8"></div>
      </header>

      <div className="flex flex-1">
        {/* Overlay oscuro en mobile */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-30 md:hidden ${
            sidebarOpen ? "block" : "hidden"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* SIDEBAR */}
        {/* <aside
          className={`fixed z-40 md:static top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
        </aside> */}
        <SideBarAlumno onChangeVista={setVista} />

        {/* CONTENIDO */}
        <main className="flex-1 p-4 overflow-y-auto">
          <div className="rounded-2xl bg-white p-4 h-full">
            {componentes[vista]}
          </div>
        </main>
      </div>
    </div>
  );
}
