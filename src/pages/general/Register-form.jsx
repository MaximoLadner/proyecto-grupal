import React, { useState } from "react";
import { Link } from "wouter";
import PopupRol from "../../components/popup-component/PopupRol";
import imageRegister from "../../images/imageRegister.jpg";

export default function RegisterForm() {
  const [role, setRole] = useState("Teacher");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="relative flex  flex-col items-center justify-center overflow-x-hidden bg-gray-50 p-4 md:flex-row md:items-center md:justify-center md:p-6"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {/* Columna izquierda (imagen en desktop pero desaparece en mobile) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img
            src={imageRegister}
            alt="Registro"
            className="w-64 h-auto rounded-xl shadow-lg md:w-56 lg:max-w-64"
          />
        </div>

        {/* Columna derecha (formulario) */}
        <div className="flex w-full h-full md:h-auto flex-col gap-2 justify-center md:w-1/2 lg:w-2/5 md:max-w-md">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-start">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Crear Cuenta
            </h1>
          </div>

          {/* Form */}
          <div className="mt-6 flex flex-col gap-6 justify-start">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="firstName"
                >
                  Nombre
                </label>
                <input
                  className="form-input w-full rounded-md border border-gray-300 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base"
                  id="firstName"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="lastName"
                >
                  Apellido
                </label>
                <input
                  className="form-input w-full rounded-md border border-gray-300 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base"
                  id="lastName"
                  placeholder="Ingresa tu apellido"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  className="form-input w-full rounded-md border border-gray-300 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base"
                  id="email"
                  placeholder="tucorreo@ejemplo.com"
                  type="email"
                />
              </div>

              {/* Solo para Profesor */}
              {role === "Teacher" && (
                <>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      className="form-input w-full rounded-md border border-gray-300 px-3 py-3 text-sm sm:px-4 sm:py-3 sm:text-base"
                      id="password"
                      placeholder="Crea una contraseña segura"
                      type="password"
                    />
                  </div>

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
          </div>

          {/* Footer */}
          <div className="mt-6 flex w-full flex-col items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex h-12 w-full items-center justify-center rounded-md bg-[#137fec] text-sm font-bold text-white shadow-lg transition-all hover:bg-[#1069c9] sm:h-14 sm:text-base"
            >
              Registrarse
            </button>
            <p className="text-center text-xs text-gray-600 sm:text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link
                className="font-semibold text-[#137fec] hover:underline"
                href="/Login"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Popup */}
      <PopupRol
        showModal={showModal}
        setShowModal={setShowModal}
        setRole={setRole}
      />
    </>
  );
}
