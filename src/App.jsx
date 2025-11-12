import { Route, Router } from "wouter";
import React, { Suspense, lazy } from "react";
import Spinner from "./components/spinners/spinner-global";
import RegisterForm from "./pages/general/Register-form";
import LoginForm from "./pages/general/Login-form";
import HomeProfesor from "./pages/profesor/Home-profesor";
import HomeAlumno from "./pages/alumno/Home-alumno";



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
