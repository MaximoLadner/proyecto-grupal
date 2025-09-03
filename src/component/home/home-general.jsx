import React from 'react'
import { Link } from 'wouter';
import groupIcon from '../../images/group.png';
import file from '../../images/file.png'; analysis
import analysis from '../../images/analysis.png';

export default function HomeGeneral() {
  return (
    <div className="bg-white">
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 bg-white/80 px-10 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-gray-800">
            <svg
              className="h-8 w-8 text-[var(--primary-color)]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              EduConnect
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
           <Link href="/Login">
             <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md px-4 text-sm font-semibold text-[var(--primary-color)] transition-colors hover:bg-[var(--secondary-color)]">
              <span className="truncate">Iniciar Sesión</span>
            </button>
           </Link>
            <Link href="/Register">
                <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[#137fec] px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-white-600 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
              <span className="truncate">Registrarse</span>
            </button>
            </Link>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          {/* Hero */}
          <section className="py-20 px-4 md:px-10 lg:px-20 mt-[30px] mb-[80px]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6 text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight tracking-tighter text-[var(--text-primary)] sm:text-5xl md:text-6xl">
                  Conecta, colabora y califica con facilidad
                </h1>
                <p className="text-lg text-[var(--text-secondary)]">
                  EduConnect es la plataforma definitiva para profesores y estudiantes,
                  que simplifica la gestión de calificaciones y fomenta un entorno de
                  aprendizaje colaborativo.
                </p>
                <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
    
                  <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md border border-gray-300 bg-[#137fec] px-6 text-base font-semibold text-white shadow-sm transition-transform hover:scale-105">
                    <span className="truncate">Empezar</span>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <img
                  alt="Estudiantes colaborando en un proyecto"
                  className="aspect-video w-full rounded-xl object-cover shadow-2xl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIct9ksQJxn_jVZZp32sBpMJVkldLb4Pg3mts_ZoEp7IP50vji8MftREqFsURGCaUPrfb9KcXhHPMkPxnybyapK4uctipF80TB-g_2HXeeztR43rOgE-POwHgzSp4uQlwMWcUXZp4ow64a_6LYoyv_Ugf9tFYaxqzGA6dRqEoWEYpVJHS59L5uHQ0NY4cH_8slef001wuantA04SMtR9NdVKY1ahzpWcdBzFaDa8LhDuHtYC84d8pSH_hy0JzGTZU8-PN_1nY_p_AE"
                />
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-gray-50 py-20 px-4 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                  Características Clave
                </h2>
                <p className="mt-4 text-lg text-[var(--text-secondary)]">
                  EduConnect ofrece un conjunto completo de herramientas diseñadas para
                  mejorar la experiencia de enseñanza y aprendizaje.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[var(--primary-color)]">
                    <img src={groupIcon} alt="icono simbolico de alumnos" className="h-6 w-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Gestión de Estudiantes
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Administra fácilmente la información de tus estudiantes y realiza un
                    seguimiento de su progreso académico.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[var(--primary-color)]">
                    <img src={file} alt="icono simbolico de carga de notas" className="h-6 w-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Carga de Calificaciones
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Carga y organiza las calificaciones de los estudiantes de forma
                    eficiente, con opciones de importación y exportación.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-[var(--primary-color)]">
                    <img src={analysis} alt="icono simbolico de analytics" className="h-6 w-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Análisis de Rendimiento
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Obtén información valiosa sobre el rendimiento de los estudiantes con
                    herramientas de análisis integradas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-4 md:px-10 lg:px-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Transforma tu experiencia de enseñanza con EduConnect
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                Regístrate hoy y descubre cómo EduConnect puede simplificar la gestión de
                calificaciones y mejorar la colaboración en el aula.
              </p>
              <div className="mt-8">
                {/* <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md bg-[var(--primary-color)] px-8 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105">
                  <span className="truncate">Comenzar ahora</span>
                </button> */}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:order-2">
                <a className="text-sm text-gray-500 hover:text-gray-900" href="#">
                  Acerca de
                </a>
                <a className="text-sm text-gray-500 hover:text-gray-900" href="#">
                  Contacto
                </a>
                <a className="text-sm text-gray-500 hover:text-gray-900" href="#">
                  Términos de Servicio
                </a>
                <a className="text-sm text-gray-500 hover:text-gray-900" href="#">
                  Política de Privacidad
                </a>
              </div>
              <div className="mt-8 flex justify-center space-x-6 md:order-3 md:mt-0">
                {/* Redes */}
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <span className="sr-only">Twitter</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <span className="sr-only">Facebook</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-gray-500" href="#">
                  <span className="sr-only">Instagram</span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-sm text-gray-500">
                  © 2024 EduConnect. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
