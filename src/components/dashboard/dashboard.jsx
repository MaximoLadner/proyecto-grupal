import React from "react";

export default function DashBoard() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="ml-4">Cosas a mostrar</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="ml-4">Cosas a mostrar</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="ml-4">Cosas a mostrar</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="ml-4">Cosas a mostrar</div>
            </div>
          </div>
        </div>

        {/* Tareas + Eventos */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabla de Tareas */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tareas Pendientes
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-600">
                    <th className="py-2 font-medium">Curso</th>
                    <th className="py-2 font-medium">Tarea</th>
                    <th className="py-2 font-medium">Fecha Límite</th>
                    <th className="py-2 font-medium">Estado</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          {/* Eventos */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Próximos Eventos
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
