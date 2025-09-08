import React, { useState } from "react";
import SideBarAlumno from "../../components/sidebar/sidebar-alumno";
import DashBoard from "../../components/dashboard/dashboard";
import Calendario from "../../components/calendario/Calendario";
import UnirseClase from "../../components/clases/unirse-clase";
import PerfilAlumno from "../../components/perfil/Perfil-Alumno";
import burguer from "../../images/burger-menu.png";

export default function HomeAlumno() {
  // Vista inicial: dashboard
  const [vista, setVista] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const componentes = {
    dashboard: <DashBoard />,
    calendario: <Calendario />,
    unirse: <UnirseClase />,
    perfil: <PerfilAlumno />,
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* HEADER */}

      <header className="flex bg-white shadow-md p-4 md:hidden justify-between items-center pr-8 pl-5">
        <h1 className="text-xl font-semibold text-gray-800">Notus</h1>
        {/* Botón menú (solo móvil) */}
        <button
          className="flex justify-center items-center text-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="material-icons w-8 h-8">
            <img src={burguer} alt="Menú" />
          </span>
        </button>
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
          <div className="rounded-2xl bg-gray-100 p-4 h-full">
            {componentes[vista]}
          </div>
        </main>
      </div>
    </div>
  );
}
