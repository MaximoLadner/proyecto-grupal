import { useState } from "react";
import * as z from "zod";
import { useClassesStore } from "../../stores/classes-store"; // ya está usando el store correcto

const classSchema = z.object({
  name: z.string().min(1, "El nombre no puede estar vacío"),
});

export default function Classes() {
  // Store de zustand con persistencia configurada
  const classes = useClassesStore((state) => state.classes);
  const addClass = useClassesStore((state) => state.addClass);
  const deleteClass = useClassesStore((state) => state.deleteClass);

  const [showForm, setShowForm] = useState(false);
  const [newClass, setNewClass] = useState("");

  const handleAddClass = () => {
    const result = classSchema.safeParse({ name: newClass });
    if (!result.success) {
      alert(result.error.errors[0].message);
      return;
    }
    addClass(newClass);
    setNewClass("");
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Mis Clases</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex items-center"
          >
            Añadir Clase Nueva
          </button>
        </header>
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">Nueva Clase</h3>
            <input
              type="text"
              placeholder="Nombre de la clase"
              value={newClass}
              onChange={(e) => setNewClass(e.target.value)}
              className="p-2 border rounded w-full"
            />
            <button
              onClick={handleAddClass}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Guardar
            </button>
          </div>
        )}
        <div className="space-y-6">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">
                    {cls.name}
                  </h3>
                </div>
                <button
                  onClick={() => deleteClass(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4 flex space-x-4">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <span className="ml-2 text-sm font-medium">
                    Añadir Estudiante
                  </span>
                </button>
                <div className="border-l border-gray-200 h-6"></div>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <span className="ml-2 text-sm font-medium">
                    Agregar Evaluación
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
