
import { useDispatch } from "react-redux";
import { projectRemoved } from "../store/projects";

const Project = (project) => {
  const dispatch = useDispatch();
  const { name, id } = project.project;

  return (
    <div className="col-sm-3 py-3">
      <div className="card shadow">
        <div className="card-header">id: {id}</div>
        <div className="card-body">name: {name}</div>
        <button
          onClick={()=>dispatch(projectRemoved({ id: id }))}
          className="btn btn-sm btn-danger"
        >
          {" "}
          delete
        </button>
      </div>
    </div>
  );
};

export default Project;
