export default function ClasesAlumno() {
  const clases = [
    {
      id: 1,
      nombre: "Matemáticas Avanzadas",
      profesor: "Prof. Juan Pérez",
      horario: "Lunes y Miércoles 10:00 - 12:00",
      aula: "Aula 203",
    },
    {
      id: 2,
      nombre: "Física Moderna",
      profesor: "Prof. Ana Gómez",
      horario: "Martes 14:00 - 16:00",
      aula: "Aula 105",
    },
    {
      id: 3,
      nombre: "Historia Universal",
      profesor: "Prof. Carlos Ruiz",
      horario: "Viernes 08:00 - 10:00",
      aula: "Aula 301",
    },
  ];

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 ">Mis Clases</h2>
        </header>
        <section>
          <div className="flex flex-col gap-6 pb-4">
            {clases.map((clase) => (
              <div
                key={clase.id}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-blue-200 hover:scale-[1.02] transition-transform duration-200"
              >
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
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
