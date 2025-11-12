import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import PopupRol from "../../components/popup-component/PopupRol";
import axios from "axios";
import imageRegister from "../../images/imageRegister.jpg";

export default function RegisterForm() {
  const [role, setRole] = useState("Teacher");
  const [showModal, setShowModal] = useState(false);
  const [, setLocation] = useLocation();

  // Datos del formulario
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Guardamos temporalmente los datos hasta que se elige rol
  const [tempData, setTempData] = useState(null);

  // Botón "Registrarse"
  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || (role === "Teacher" && (!password || !confirmPassword))) {
      alert("Completa todos los campos.");
      return;
    }
    if (role === "Teacher" && password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    setTempData({ firstName, lastName, email, password, confirmPassword });
    setShowModal(true);
  };

  // Se llama desde el PopupRol cuando se elige el rol
  const handleSelectRole = async (selectedRole) => {
    setShowModal(false);

    try {
      // Admin = Profesor, User = Alumno
      const roleToSend = selectedRole === "Teacher" ? "Admin" : "User";

      await axios.post("https://localhost:7140/api/auth/register", {
        name: tempData.firstName,
        surname: tempData.lastName,
        email: tempData.email,
        password: tempData.password,
        confirmPassword: tempData.confirmPassword,
        role: roleToSend
      });

      // Guardamos el rol en localStorage para login
      localStorage.setItem(tempData.email, selectedRole);

      alert("Registro exitoso. Ahora inicia sesión.");
      setLocation("/Login");
    } catch (error) {
      console.error(error);
      alert("Error al registrar usuario.");
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center overflow-y-hidden bg-gray-50 p-4 md:flex-row md:items-center md:justify-center md:p-6"
           style={{ fontFamily: "Roboto, sans-serif" }}>
        {/* Columna izquierda */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img src={imageRegister} alt="Registro" className="w-64 h-auto rounded-xl shadow-lg md:w-80 lg:w-96" />
        </div>

        {/* Columna derecha (formulario) */}
        <div className="flex w-full md:w-1/2 lg:w-2/5 flex-col gap-2 justify-center md:max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center md:text-left">
            Crear Cuenta
          </h1>

          <div className="mt-6 flex flex-col gap-6">
            {/* Campos generales */}
            <input placeholder="Nombre" className="form-input border rounded-md px-3 py-3 text-sm sm:text-base"
                   value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input placeholder="Apellido" className="form-input border rounded-md px-3 py-3 text-sm sm:text-base"
                   value={lastName} onChange={e => setLastName(e.target.value)} />
            <input placeholder="Correo Electrónico" type="email"
                   className="form-input border rounded-md px-3 py-3 text-sm sm:text-base"
                   value={email} onChange={e => setEmail(e.target.value)} />

            {/* Campos solo para Profesor */}
            {role === "Teacher" && (
              <>
                <input placeholder="Contraseña" type="password"
                       className="form-input border rounded-md px-3 py-3 text-sm sm:text-base"
                       value={password} onChange={e => setPassword(e.target.value)} />
                <input placeholder="Confirmar Contraseña" type="password"
                       className="form-input border rounded-md px-3 py-3 text-sm sm:text-base"
                       value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                <div className="flex items-center gap-3 rounded-md border border-dashed border-gray-400 bg-gray-100 p-1.5 sm:p-1">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gray-200 text-gray-500 sm:size-12">
                    📷
                  </div>
                  <p className="flex-1 text-xs font-medium text-gray-700 sm:text-sm">
                    Sube tu foto de perfil
                  </p>
                  <button className="text-xs font-semibold text-[#137fec] hover:text-[#1069c9] sm:text-sm">
                    Subir
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex w-full flex-col items-center gap-3">
            <button onClick={handleRegisterClick}
                    className="flex h-12 w-full items-center justify-center rounded-md bg-[#137fec] text-sm font-bold text-white shadow-lg transition-all hover:bg-[#1069c9] sm:h-14 sm:text-base">
              Registrarse
            </button>
            <p className="text-center text-xs text-gray-600 sm:text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link className="font-semibold text-[#137fec] hover:underline" href="/Login">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Popup para elegir rol */}
      <PopupRol showModal={showModal} setShowModal={setShowModal} setRole={handleSelectRole} />
    </>
  );
}
