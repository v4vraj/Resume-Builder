export const ProjectsInputs = ({
  project,
  index,
  handleProjectChange,
  removeProject,
}) => {
  return (
    <div key={index}>
      <h2>Projects Information</h2>
      <div className="form-group">
        <label htmlFor={`projectTitle${index}`}>Project Title:</label>
        <input
          type="text"
          id={`projectTitle${index}`}
          name={`projectTitle${index}`}
          value={project.projectTitle}
          onChange={(e) => handleProjectChange(e, index, "projectTitle")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`githubLink${index}`}>Github Link:</label>
        <input
          type="text"
          id={`githubLink${index}`}
          name={`githubLink${index}`}
          value={project.githubLink}
          onChange={(e) => handleProjectChange(e, index, "githubLink")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`projectDescription${index}`}>
          Project Description:
        </label>
        <textarea
          id={`projectDescription${index}`}
          name={`projectDescription${index}`}
          value={project.projectDescription}
          onChange={(e) => handleProjectChange(e, index, "projectDescription")}
          className="form-control"
        />
      </div>
      {index > 0 && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeProject(index)}
        >
          Remove
        </button>
      )}
    </div>
  );
};
