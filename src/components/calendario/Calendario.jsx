import { useState, useEffect } from "react";
import flechaIzq from "../../images/flecha-izquierda.png";
import flechaDer from "../../images/flecha-derecha.png";

export default function Calendario() {
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  
  const hoy = new Date();
  const [mesActual, setMesActual] = useState(hoy.getMonth());
  const [anioActual, setAnioActual] = useState(hoy.getFullYear());
  
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [eventos, setEventos] = useState({});
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [textoEvento, setTextoEvento] = useState("");

  // Cargar eventos desde localStorage al iniciar
  useEffect(() => {
    const eventosGuardados = localStorage.getItem("eventosCalendario");
    if (eventosGuardados) {
      setEventos(JSON.parse(eventosGuardados));
    }
  }, []);

  // Guardar eventos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("eventosCalendario", JSON.stringify(eventos));
  }, [eventos]);

  const obtenerDiasDelMes = (mes, anio) => {
    const fecha = new Date(anio, mes, 1);
    const dias = [];

    const primerDiaSemana = fecha.getDay();
    const ultimoDiaMesAnterior = new Date(anio, mes, 0).getDate();

    for (let i = primerDiaSemana - 1; i >= 0; i--) {
      dias.push({ dia: ultimoDiaMesAnterior - i, esMesActual: false });
    }

    const ultimoDiaMes = new Date(anio, mes + 1, 0).getDate();
    for (let i = 1; i <= ultimoDiaMes; i++) {
      dias.push({
        dia: i,
        esMesActual: true,
        esHoy: i === hoy.getDate() && mes === hoy.getMonth() && anio === hoy.getFullYear()
      });
    }

    while (dias.length % 7 !== 0) {
      dias.push({ dia: dias.length - ultimoDiaMes - primerDiaSemana + 1, esMesActual: false });
    }

    return dias;
  };

  const dias = obtenerDiasDelMes(mesActual, anioActual);

  const manejarMesAnterior = () => {
    if (mesActual === 0) {
      setMesActual(11);
      setAnioActual(anioActual - 1);
    } else {
      setMesActual(mesActual - 1);
    }
  };

  const manejarMesSiguiente = () => {
    if (mesActual === 11) {
      setMesActual(0);
      setAnioActual(anioActual + 1);
    } else {
      setMesActual(mesActual + 1);
    }
  };

  const manejarClicDia = (dia) => {
  const fechaSeleccionada = new Date(anioActual, mesActual, dia);

  // Verificar si la fecha seleccionada es anterior a hoy
  if (fechaSeleccionada < new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())) {
    alert("No se puede agregar un evento en días anteriores al día de hoy.");
    return;
  }

  setDiaSeleccionado(dia);
  setTextoEvento(""); // Empezamos con input vacío
  setMostrarPopup(true);
};

  const guardarEvento = () => {
    const clave = `${anioActual}-${String(mesActual + 1).padStart(2, "0")}-${String(diaSeleccionado).padStart(2, "0")}`;
    const eventosDia = eventos[clave] || [];
    setEventos({ ...eventos, [clave]: [...eventosDia, textoEvento] });
    setMostrarPopup(false);
    setTextoEvento("");
  };

  const nombresMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  return (
    <div className="flex-1 mt-5">
      {/* Calendario */}
      <div className="pt-6 bg-white rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <button onClick={manejarMesAnterior} className="text-gray-500 hover:text-gray-700">
            <img src={flechaIzq} alt="Flecha Izquierda" className="w-5 h-5 ml-3" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">{nombresMeses[mesActual]} {anioActual}</h2>
          <button onClick={manejarMesSiguiente} className="text-gray-500 hover:text-gray-700">
            <img src={flechaDer} alt="Flecha Derecha" className="w-5 h-5 mr-3" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200">
          {diasSemana.map((d, i) => (
            <div key={i} className="text-center py-2 bg-white text-gray-600 font-medium">
              {d}
            </div>
          ))}

          {dias.map((d, i) => {
            const clave = `${anioActual}-${String(mesActual + 1).padStart(2, "0")}-${String(d.dia).padStart(2, "0")}`;
            const eventosDia = eventos[clave] || [];
            return (
              <button key={i} className="cursor-pointer" onClick={() => manejarClicDia(d.dia)}>
                <div className={`relative bg-white p-1 h-14 text-right ${d.esMesActual ? "text-gray-800" : "text-gray-400"}`}>
                  {d.esHoy ? (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                      {d.dia}
                    </span>
                  ) : (
                    <span>{d.dia}</span>
                  )}
                  {/* Mostrar todos los eventos del día */}
                  {eventosDia.map((e, idx) => (
                    <div key={idx} className="absolute bottom-1 left-1 right-1 bg-yellow-200 text-xs text-gray-800 rounded px-1 truncate mt-1">
                      {e}
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Popup para agregar evento */}
      {mostrarPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">
              Agregar evento: {diaSeleccionado}/{mesActual + 1}/{anioActual}
            </h3>
            <input
              type="text"
              value={textoEvento}
              onChange={(e) => setTextoEvento(e.target.value)}
              placeholder="Descripción del evento"
              className="border w-full p-2 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setMostrarPopup(false)} className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400">Cancelar</button>
              <button onClick={guardarEvento} className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600">Agregar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
