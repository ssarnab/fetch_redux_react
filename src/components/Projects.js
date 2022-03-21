import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { projectAdded } from "../store/projects";
import Project from "./Project";
const Projects = () => {
  const [name,setName] = useState(null)
  const projects = useSelector((state) => state.entities.projects);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Total Project: {projects.length}</h1>
       <input type="text" onMouseLeave={e=>setName(e.target.value)}/> 
      <button className="btn btn-success" onClick={() => dispatch(projectAdded({ name: name }))}>
        Add Project
      </button>
      <div className="row">
      {projects.map(p=> <Project project={p} key={p.id}/>)}
      </div>
    </div>
  );
};

export default Projects;
