import React from "react";
import { Link } from "wouter";

export default function LoginForm()
{
  return (
    <div
      className="relative flex min-h-screen flex-col justify-between overflow-x-hidden p-6 bg-gray-50 md:flex-row md:items-center md:justify-center"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      {/* Columna izquierda (imagen opcional) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img
          src="https://via.placeholder.com/400x400.png?text=Login"
          alt="Login"
          className="max-w-sm rounded-xl shadow-lg"
        />
      </div>

      {/* Columna derecha (formulario) */}
      <div className="flex flex-col gap-1 w-full max-w-sm md:w-1/2 lg:w-2/5 ml-0">
        {/* Header */}
        <div className="flex items-center justify-start">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center flex-grow pr-6">
            Iniciar Sesión
          </h1>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              className="form-input w-full rounded-md border border-gray-300 px-4 py-3"
              id="email"
              placeholder="tucorreo@ejemplo.com"
              type="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="form-input w-full rounded-md border border-gray-300 px-4 py-3"
              id="password"
              placeholder="Ingresa tu contraseña"
              type="password"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-4 w-full">
          <button className="flex w-full h-12 items-center justify-center rounded-md bg-[#137fec] text-white text-base font-bold shadow-lg transition-all hover:bg-[#1069c9]">
            Entrar
          </button>
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{" "}
            <Link
              className="font-semibold text-[#137fec] hover:underline"
              href="/Register"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}