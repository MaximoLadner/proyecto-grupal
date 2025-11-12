import { useState, useEffect } from "react";
import * as z from "zod";
import alumno from "../../images/graduado.png";
import clasesIcon from "../../images/clases-icon.png";
import PopupEstudiantes from "../popup-component/popupEstudiantes";

export default function Classes() {
  const API_URL = "https://localhost:7140/api/class"; // ✅ tu endpoint del back

  const classSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
  });

  // Estados
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [newName, setNewName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newClass, setNewClass] = useState("");
  const [loading, setLoading] = useState(true);

  // Popup alumnos
  const [showStudentsModal, setShowStudentsModal] = useState(false);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [currentClassIndex, setCurrentClassIndex] = useState(null);

  // ✅ Traer clases del backend
  const fetchClasses = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setClasses(data);
    } catch (error) {
      console.error("Error al obtener las clases:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  // ✅ Agregar clase
  const handleAddClass = async () => {
    const result = classSchema.safeParse({ name: newClass });
    if (!result.success) {
      alert(result.error.errors[0].message);
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: newClass }),
      });
      if (res.ok) {
        await fetchClasses(); // recargar lista
        setNewClass("");
        setShowForm(false);
      }
    } catch (error) {
      console.error("Error al agregar clase:", error);
    }
  };

  // ✅ Editar clase
  const handleEdit = async () => {
    if (!newName.trim() || !editId) return;

    try {
      const res = await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: newName }),
      });

      if (res.ok) {
        await fetchClasses(); // recargar lista
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error al editar clase:", error);
    }
  };

  // ✅ Eliminar clase
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que querés eliminar esta clase?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.ok) {
        await fetchClasses();
      }
    } catch (error) {
      console.error("Error al eliminar clase:", error);
    }
  };

  // Abrir modal edición
  const openModal = (id, name) => {
    setEditId(id);
    setNewName(name);
    setShowModal(true);
  };

  // Popup alumnos
  const handleViewStudents = (clsIndex) => {
    setCurrentClassIndex(clsIndex);
    setCurrentStudents(classes[clsIndex].students || []);
    setShowStudentsModal(true);
  };

  const handleDeleteStudent = (studentIndex) => {
    const updatedStudents = [...currentStudents];
    updatedStudents.splice(studentIndex, 1);
    setCurrentStudents(updatedStudents);
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
      </header>

      {/* Modal nueva clase */}
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

      {loading ? (
        <p className="text-gray-500 text-center">Cargando clases...</p>
      ) : classes.length === 0 ? (
        <div className="flex justify-center items-center h-115">
          <p className="text-gray-500 font-bold text-center">
            No hay clases creadas
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {classes.map((cls, i) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-row justify-between items-center border border-blue-200 hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center gap-5">
                <img
                  src={clasesIcon}
                  alt="Imagen general de clases"
                  className="h-15 w-15 rounded-full border-3 border-blue-400"
                />
                <h3 className="text-lg font-semibold text-blue-700">
                  {cls.nombre}
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleViewStudents(i)}
                  className="flex items-center gap-2 bg-blue-100 text-black font-semibold px-4 py-2 rounded-xl border border-blue-300 shadow-sm hover:bg-blue-600 hover:text-white transition-colors duration-200 mr-4"
                >
                  <img src={alumno} alt="icono de alumno" className="w-5 h-5" />
                  Ver Alumnos
                </button>
                <button
                  onClick={() => openModal(cls.id, cls.nombre)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(cls.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal editar clase */}
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

      {/* Popup alumnos */}
      {showStudentsModal && (
        <PopupEstudiantes
          students={currentStudents}
          onClose={() => setShowStudentsModal(false)}
          onDelete={handleDeleteStudent}
        />
      )}
    </div>
  );
}
