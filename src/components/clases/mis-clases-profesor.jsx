import { useState } from "react";
import { useClassesStore } from "../../stores/classes-store";
import * as z from "zod";
import alumno from "../../images/graduado.png";
import clasesIcon from "../../images/clases-icon.png";

export default function Classes() {
  //codigo para verificar el nombre de la clase
  const classSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
  });
  // traigo las acciones del store que uso abajo
  const addClass = useClassesStore((state) => state.addClass);
  const classes = useClassesStore((state) => state.classes);
  const deleteClass = useClassesStore((state) => state.deleteClass);
  const editClass = useClassesStore((state) => state.editClass);

  // Estados para el modal
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newName, setNewName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newClass, setNewClass] = useState("");

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
  // Agregar nueva clase
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
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Mis Clases</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex items-center"
        >
          Añadir Clase Nueva
        </button>
        {/* Forma en la cual se pueden añadir clases */}

        {showForm && (
          <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 min-w-[300px] flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Nueva Clase</h3>
              <input
                type="text"
                placeholder="Nombre de la clase"
                value={newClass}
                onChange={(e) => setNewClass(e.target.value)}
                className="p-2 border rounded w-full mb-4"
                autoFocus
              />
              <div className="flex gap-4">
                <button
                  onClick={handleAddClass}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Guardar
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      {classes.length === 0 ? (
        <div className="flex justify-center items-center h-115">
          <p className="text-gray-500 font-bold text-center">
            No hay clases creadas
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-row justify-between items-center border border-blue-200 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center gap-5">
                <img
                  src={clasesIcon}
                  alt="Imagen general de clases"
                  className="h-15 w-15 rounded-full border-3 border-blue-400"
                />
                <h3 className="text-lg font-semibold text-blue-700">
                  {cls.name}
                </h3>
                {/* si hay mas datos se agregan acá */}
              </div>
              <div className="flex gap-2">
                {/* boton que despues permite ver la lista del alumnos que hay en cada clase*/}
                <button className="flex items-center gap-2 bg-blue-100 text-black font-semibold px-4 py-2 rounded-xl border border-blue-300 shadow-sm hover:bg-blue-600 hover:text-white transition-colors duration-200 mr-4">
                  <img src={alumno} alt="icono de alumno" className="w-5 h-5" />
                  Ver Alumnos
                </button>
                <button
                  onClick={() => openModal(i, cls.name)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteClass(i)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
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
