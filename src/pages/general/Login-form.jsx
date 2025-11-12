import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import axios from "axios";
import imageRegister from "../../images/imageRegister.jpg";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7140/api/auth/login", formData);

      // Sacamos el rol guardado en el registro
      const role = localStorage.getItem(formData.email);

      if (role === "Teacher") setLocation("/Profesor");
      else if (role === "Student") setLocation("/Alumno");
      else setError("Rol desconocido. Inicia sesión con el rol correcto.");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error al iniciar sesión.");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-x-hidden p-6 bg-gray-50 md:flex-row md:items-center md:justify-center"
         style={{ fontFamily: "Roboto, sans-serif" }}>
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img src={imageRegister} alt="Login" className="max-w-sm rounded-xl shadow-lg" />
      </div>

      <div className="flex flex-col gap-1 w-full max-w-sm md:w-1/2 lg:w-2/5 ml-0">
        <div className="flex items-center justify-start">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center flex-grow pr-6">
            Iniciar Sesión
          </h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6 mt-4">
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <input type="email" placeholder="Correo Electrónico"
                 className="form-input border rounded-md px-4 py-3"
                 value={formData.email}
                 onChange={e => setFormData({ ...formData, email: e.target.value })}
                 required />

          <input type="password" placeholder="Contraseña"
                 className="form-input border rounded-md px-4 py-3"
                 value={formData.password}
                 onChange={e => setFormData({ ...formData, password: e.target.value })}
                 required />

          <button type="submit"
                  className="flex w-full h-12 items-center justify-center rounded-md bg-[#137fec] text-white text-base font-bold shadow-lg transition-all hover:bg-[#1069c9]">
            Entrar
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          ¿No tienes una cuenta?{" "}
          <Link className="font-semibold text-[#137fec] hover:underline" href="/Register">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
