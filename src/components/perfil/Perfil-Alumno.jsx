import React from "react";
import editarPerfil from "../../images/editar-informacion.png";
import cambiarContraseña from "../../images/cambiarContraseña.png";

export default function PerfilAlumno() {
  return (
    <>
      <main className="px-40 flex justify-center py-5">
        <section className="flex flex-col w-full max-w-md py-5 gap-6">
          {/* Perfil */}
          <section className="flex flex-col items-center gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" />
            <div>
              <img
                src=""
                alt="Foto del Alumno"
                className="object-cover rounded-full shadow-lg border-2 border-gray-200 mx-auto"
              />
            </div>
            <div className="text-center">
              <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                Ambar Marcone
              </h2>
              <p className="text-[#617589] text-base">
                ambimarcone@HOTmail.com
              </p>
            </div>
          </section>

          {/* Opciones */}
          <section>
            <h3 className="text-[#111418] text-lg font-bold px-4 pb-2">
              Cuenta
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer flex items-center justify-between bg-white px-4 min-h-14 rounded-md shadow-sm">
                <button className="cursor-pointer text-[#111418] text-base truncate">
                  Editar perfil
                </button>
                <span className="cursor-pointer">
                  <img src={editarPerfil} alt="" className="w-10" />
                </span>
              </li>

              <li className=" cursor-pointer flex items-center justify-between bg-white px-4 min-h-14 rounded-md shadow-sm">
                <button className=" cursor-pointer text-[#111418] text-base truncate">
                  Cambiar contraseña
                </button>
                <span className="cursor-pointer">
                  <img
                    src={cambiarContraseña}
                    alt=""
                    className="w-10 cursor-pointer"
                  />
                </span>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}
