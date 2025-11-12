import { useState, useEffect } from "react";
import flechaIzq from "../../images/flecha-izquierda.png";
import flechaDer from "../../images/flecha-derecha.png";

export default function Calendario({ esProfesor }) {
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const hoy = new Date();

  const [mesActual, setMesActual] = useState(hoy.getMonth());
  const [anioActual, setAnioActual] = useState(hoy.getFullYear());
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const [eventos, setEventos] = useState({});
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [textoEvento, setTextoEvento] = useState("");
  const [modoEliminar, setModoEliminar] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);

  // 🔹 Cargar eventos desde el backend
  useEffect(() => {
    fetch("https://localhost:7140/api/event")
      .then((res) => res.json())
      .then((data) => {
        const eventosOrganizados = {};
        data.forEach((e) => {
          const fecha = new Date(e.fecha);
          const clave = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, "0")}-${String(
            fecha.getDate()
          ).padStart(2, "0")}`;
          if (!eventosOrganizados[clave]) eventosOrganizados[clave] = [];
          eventosOrganizados[clave].push({ id: e.id, nombre: e.nombre });
        });
        setEventos(eventosOrganizados);
      })
      .catch((err) => console.error("Error al obtener eventos:", err));
  }, []);

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
        esHoy:
          i === hoy.getDate() &&
          mes === hoy.getMonth() &&
          anio === hoy.getFullYear(),
      });
    }

    while (dias.length % 7 !== 0) {
      dias.push({
        dia: dias.length - ultimoDiaMes - primerDiaSemana + 1,
        esMesActual: false,
      });
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
    if (!esProfesor) return;

    const clave = `${anioActual}-${String(mesActual + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const eventosDia = eventos[clave] || [];

    setDiaSeleccionado(dia);

    if (eventosDia.length > 0) {
      // 🔸 Día con evento → modo eliminar
      setModoEliminar(true);
      setEventoSeleccionado({ ...eventosDia[0], clave });
      setMostrarPopup(true);
    } else {
      // 🔸 Día sin evento → modo agregar
      const fechaSeleccionada = new Date(anioActual, mesActual, dia);
      if (fechaSeleccionada < new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())) {
        alert("No se puede agregar un evento en días anteriores al día de hoy.");
        return;
      }
      setModoEliminar(false);
      setTextoEvento("");
      setMostrarPopup(true);
    }
  };

  // 🔹 Guardar evento en backend
  const guardarEvento = async () => {
    const fecha = `${anioActual}-${String(mesActual + 1).padStart(2, "0")}-${String(diaSeleccionado).padStart(2, "0")}`;
    const nuevoEvento = { nombre: textoEvento, fecha };

    try {
      const res = await fetch("https://localhost:7140/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoEvento),
      });

      if (!res.ok) throw new Error("Error al guardar el evento");

      const data = await res.json();
      const clave = fecha;
      setEventos({ ...eventos, [clave]: [{ id: data.id, nombre: data.nombre }] });
      setMostrarPopup(false);
      setTextoEvento("");
    } catch (err) {
      console.error(err);
      alert("Hubo un problema al guardar el evento.");
    }
  };

  // 🔹 Eliminar evento del backend
  const eliminarEvento = async () => {
    try {
      const res = await fetch(`https://localhost:7140/api/event/${eventoSeleccionado.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error al eliminar evento");

      const copia = { ...eventos };
      delete copia[eventoSeleccionado.clave];
      setEventos(copia);
      setMostrarPopup(false);
    } catch (err) {
      console.error(err);
      alert("Hubo un problema al eliminar el evento.");
    }
  };

  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="flex-1 mt-5">
      <div className="pt-6 bg-white rounded-2xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <button onClick={manejarMesAnterior}>
            <img src={flechaIzq} alt="Flecha Izquierda" className="w-5 h-5 ml-3" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {nombresMeses[mesActual]} {anioActual}
          </h2>
          <button onClick={manejarMesSiguiente}>
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
              <button key={i} onClick={() => manejarClicDia(d.dia)}>
                <div
                  className={`relative bg-white p-1 h-14 text-right ${
                    d.esMesActual ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {d.esHoy ? (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
                      {d.dia}
                    </span>
                  ) : (
                    <span>{d.dia}</span>
                  )}
                  {eventosDia.map((e, idx) => (
                    <div
                      key={idx}
                      className="absolute bottom-1 left-1 right-1 bg-yellow-200 text-xs text-gray-800 rounded px-1 truncate mt-1"
                    >
                      {e.nombre}
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {mostrarPopup && (
        <div className="fixed inset-0 flex backdrop-blur-sm items-center justify-center bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            {modoEliminar ? (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  ¿Eliminar evento "{eventoSeleccionado.nombre}"?
                </h3>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setMostrarPopup(false)}
                    className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={eliminarEvento}
                    className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </>
            ) : (
              <>
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
                  <button
                    onClick={() => setMostrarPopup(false)}
                    className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={guardarEvento}
                    className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Agregar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
