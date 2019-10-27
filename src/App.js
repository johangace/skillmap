import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import SkillsList from "./components/skills-list.component";
import EditSkill from "./components/edit-skill.component";
import CreateSkill from "./components/create-skill.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className ="container "> 
      <Navbar />
      <br/>
      <Route path="/" exact component={SkillsList} />
      <Route path="/edit/:id" component={EditSkill} />
      <Route path="/create" component={CreateSkill} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  
  );
}

export default App;
