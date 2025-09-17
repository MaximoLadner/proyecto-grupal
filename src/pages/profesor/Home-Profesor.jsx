import { useState, version } from "react";
import SideBarProfesor from "../../components/sidebar/sidebar-profesor";
import Calendario from "../../components/calendario/Calendario";
import DashBoard from "../../components/dashboard/dashboard";
import MisClasesProfesor from "../../components/clases/mis-clases-profesor";
import Header from "../general/header";

export default function HomeProfesor() {
  const [vista, setVista] = useState("dashboard");

  const componentes = {
    calendario: <Calendario esProfesor={true} />,
    dashboard: <DashBoard />,
    verClases: <MisClasesProfesor />,
  };

  return (
    <main className="flex flex-row gap-[1rem] p-[1rem] bg-gray-200 h-screen">
      <SideBarProfesor onChangeVista={setVista} />

      <section className="flex-1 flex flex-col gap-4 h-full">
        <Header />
        <div className="flex-1 rounded-2xl bg-white p-4">
          {componentes[vista]}
        </div>
      </section>
    </main>
  );
}
