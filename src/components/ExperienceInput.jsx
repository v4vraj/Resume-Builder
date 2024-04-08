export const ExperienceInputs = ({
  experience,
  index,
  handleExperienceChange,
  removeExperience,
}) => {
  return (
    <div key={index}>
      <h2>Company Experience Information</h2>
      <div className="form-group">
        <label htmlFor={`company${index}`}>Company:</label>
        <input
          type="text"
          id={`company${index}`}
          name={`company${index}`}
          value={experience.company}
          onChange={(e) => handleExperienceChange(e, index, "company")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`role${index}`}>Role:</label>
        <input
          type="text"
          id={`role${index}`}
          name={`role${index}`}
          value={experience.role}
          onChange={(e) => handleExperienceChange(e, index, "role")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`experienceDescription${index}`}>
          Experience Description:
        </label>
        <textarea
          id={`experienceDescription${index}`}
          name={`experienceDescription${index}`}
          value={experience.experienceDescription}
          onChange={(e) =>
            handleExperienceChange(e, index, "experienceDescription")
          }
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`joining${index}`}>Joining Date:</label>
        <input
          type="text"
          id={`joining${index}`}
          name={`joining${index}`}
          value={experience.joining}
          onChange={(e) => handleExperienceChange(e, index, "joining")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`endDate${index}`}>End Date:</label>
        <input
          type="text"
          id={`endDate${index}`}
          name={`endDate${index}`}
          value={experience.endDate}
          onChange={(e) => handleExperienceChange(e, index, "endDate")}
          className="form-control"
        />
      </div>
      {index > 0 && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeExperience(index)}
        >
          Remove
        </button>
      )}
    </div>
  );
};
