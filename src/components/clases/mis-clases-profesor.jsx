import { useState } from "react";
import { useClassesStore } from "../../stores/classes-store";

export default function MisClasesProfesor() {
  const classes = useClassesStore((state) => state.classes);
  const deleteClass = useClassesStore((state) => state.deleteClass);
  const editClass = useClassesStore((state) => state.editClass);

  // Estados para el modal
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newName, setNewName] = useState("");

  // Abrir modal y cargar datos
  const openModal = (i, name) => {
    setEditIndex(i);
    setNewName(name);
    setShowModal(true);
  };

  // Guardar cambios
  const handleEdit = () => {
    if (newName.trim()) {
      editClass(editIndex, newName.trim());
      setShowModal(false);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Clases Creadas</h2>
      {classes.length === 0 ? (
        <p className="text-gray-500">No hay clases creadas</p>
      ) : (
        <div className="flex flex-col gap-6">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-row justify-between items-center border border-blue-200 hover:scale-[1.02] transition-transform duration-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-blue-700">
                  {cls.name}
                </h3>
                {/* Puedes agregar más datos aquí si tienes */}
              </div>
              <button
                onClick={() => openModal(i, cls.name)}
                className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded-xl font-semibold transition-colors duration-200"
              >
                Editar
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 min-w-[300px] flex flex-col items-center">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Editar nombre de la clase
            </h3>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border border-blue-300 rounded-lg px-4 py-2 mb-4 w-full"
              autoFocus
            />
            <div className="flex gap-4">
              <button
                onClick={handleEdit}
                className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded-xl font-semibold transition-colors duration-200"
              >
                Guardar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-xl font-semibold transition-colors duration-200"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
