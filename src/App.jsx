import { Route, Router } from "wouter";
import React, { Suspense, lazy } from "react";
import Spinner from "./component/spinners/spinner-global"

// Aca cargamos los componentes que van a tener el spinner.
const HomeGeneral = lazy(() => import("./component/home/home-general"));
const RegisterForm = lazy(() => import("./component/register/Register-form"));
const LoginForm = lazy(() => import("./component/login/Login-form"));
const HomeAlumno = lazy(() => import("./component/alumno/Home-Alumno"));
const HomeProfesor = lazy(() => import("./component/profesor/Home-Profesor"));

function App()
{
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