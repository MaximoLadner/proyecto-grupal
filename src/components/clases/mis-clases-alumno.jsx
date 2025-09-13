export default function ClasesAlumno() {
  const clases = [
    {
      id: 1,
      nombre: "Matemáticas Avanzadas",
      profesor: "Prof. Juan Pérez",
      horario: "Lunes y Miércoles 10:00 - 12:00",
      aula: "Aula 203",
      notas: { parcial1: 7, parcial2: 8, final: 7 },
    },
    {
      id: 2,
      nombre: "Física Moderna",
      profesor: "Prof. Ana Gómez",
      horario: "Martes 14:00 - 16:00",
      aula: "Aula 105",
      notas: { parcial1: 6, parcial2: 7, final: 8 },
    },
    {
      id: 3,
      nombre: "Historia Universal",
      profesor: "Prof. Carlos Ruiz",
      horario: "Viernes 08:00 - 10:00",
      aula: "Aula 301",
      notas: { parcial1: 9, parcial2: 8, final: 9 },
    },
  ];

  function getNotaColor(nota) {
    return nota >= 7 ? "#57a639" : "red";
  }
  return (
    <div className="flex">
      <main className="flex-1 p-4">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800">Mis Clases</h2>
        </header>
        <section>
          <div className="flex flex-col gap-4 pb-4">
            {clases.map((clase) => (
              <div
                key={clase.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-start border border-blue-200 hover:scale-[1.02] transition-transform duration-200"
              >
                {/* Datos de la materia */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {clase.nombre}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Profesor:</span>{" "}
                    {clase.profesor}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Horario:</span>{" "}
                    {clase.horario}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Aula:</span> {clase.aula}
                  </p>
                </div>

                {/* Notas */}
                <div className="grid grid-cols-3 gap-10 text-center mt-4 md:mt-0 md:ml-6">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      Parcial 1
                    </p>
                    <p
                      className="text-base"
                      style={{ color: getNotaColor(clase.notas.parcial1) }}
                    >
                      {clase.notas.parcial1}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      Parcial 2
                    </p>
                    <p
                      className="text-base"
                      style={{ color: getNotaColor(clase.notas.parcial2) }}
                    >
                      {clase.notas.parcial2}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">Final</p>
                    <p
                      className="text-base"
                      style={{ color: getNotaColor(clase.notas.final) }}
                    >
                      {clase.notas.final}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
