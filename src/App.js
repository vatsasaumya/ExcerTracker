import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbarComponents";
import ExercisesList from "./components/exercisesListComponents";
import EditExercise from "./components/editExercisesComponents";
import CreateExercise from "./components/createExercisesComponents";
import CreateUser from "./components/createUsersComponents";

//mapping url paths to specific components that we shall view on page
function App() {
    return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
      </Router>
    );
}
export default App;
