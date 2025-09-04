import { Route, Router } from "wouter";
import React, { Suspense, lazy } from "react";
import Spinner from "./components/spinners/spinner-global";

// Aca cargamos los componentes que van a tener el spinner.
const HomeGeneral = lazy(() => import("./pages/general/home-general"));
const RegisterForm = lazy(() => import("./pages/general/Register-form"));
const LoginForm = lazy(() => import("./pages/general/Login-form"));
const HomeAlumno = lazy(() => import("./pages/alumno/Home-Alumno"));
const HomeProfesor = lazy(() => import("./pages/profesor/Home-Profesor"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Route path="/" component={HomeGeneral} />
        <Route path="Register" component={RegisterForm} />
        <Route path="Login" component={LoginForm} />
        <Route path="Profesor" component={HomeProfesor} />
        <Route path="Alumno" component={HomeAlumno} />
      </Suspense>
    </Router>
  );
}

export default App;
