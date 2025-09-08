import React, { useEffect } from "react";
import SideBarAlumno from "../../components/sidebar/sidebar-alumno";
import DashBoard from "../../components/dashboard/dashboard";
import Calendario from "../../components/calendario/Calendario";
import UnirseClase from "../../components/clases/unirse-clase";
import PerfilAlumno from "../../components/perfil/Perfil-Alumno";
import burguer from "../../images/burger-menu.png";
import { useSidebarStore } from "../../stores/sidebar-store";

export default function HomeAlumno() {
  const [vista, setVista] = React.useState("dashboard");
  const isOpen = useSidebarStore((state) => state.isOpen);
  const setOpen = useSidebarStore((state) => state.setOpen);
  const toggle = useSidebarStore((state) => state.toggle);
  const updateByScreen = useSidebarStore((state) => state.updateByScreen);

  useEffect(() => {
    // Actualiza el estado de la sidebar según el tamaño de pantalla
    const handleResize = () => {
      updateByScreen();
    };
    window.addEventListener("resize", handleResize);
    // Inicializa correctamente al montar
    updateByScreen();
    return () => window.removeEventListener("resize", handleResize);
  }, [updateByScreen]);

  const componentes = {
    dashboard: <DashBoard />,
    calendario: <Calendario />,
    unirse: <UnirseClase />,
    perfil: <PerfilAlumno />,
  };

  // Detecta si es mobile
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* HEADER SOLO EN MOBILE */}
      <header className="flex bg-white shadow-md p-4 md:hidden justify-between items-center pr-8 pl-5">
        <h1 className="text-xl font-semibold text-gray-800">Notus</h1>
        {/* Botón menú (solo móvil) */}
        <button
          className="flex justify-center items-center text-gray-600"
          onClick={toggle}
        >
          <span className="material-icons w-8 h-8">
            <img src={burguer} alt="Menú" />
          </span>
        </button>
      </header>

      <div className="flex flex-1 relative">
        {/* SIDEBAR: el componente ya es un <aside> */}
        {/* En mobile: fixed, z-50, tapa el contenido. En desktop: normal */}
        {(isOpen || window.innerWidth >= 768) && (
          <div
            className={
              isMobile
                ? "fixed top-0 left-0 z-50 h-full transition-all shadow-2xl"
                : "relative"
            }
            style={isMobile ? { width: "min-content", height: "100%" } : {}}
          >
            <SideBarAlumno
              onChangeVista={(vista) => {
                setVista(vista);
                if (isMobile) setOpen(false);
              }}
            />
          </div>
        )}

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
