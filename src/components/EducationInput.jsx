export const EducationInputs = ({
  education,
  index,
  handleEducationChange,
  removeEducation,
}) => {
  return (
    <div key={index}>
      <h2>Educational Information</h2>
      <div className="form-group">
        <label htmlFor={`university${index}`}>University:</label>
        <input
          type="text"
          id={`university${index}`}
          name={`university${index}`}
          value={education.university}
          onChange={(e) => handleEducationChange(e, index, "university")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`degree${index}`}>Degree:</label>
        <input
          type="text"
          id={`degree${index}`}
          name={`degree${index}`}
          value={education.degree}
          onChange={(e) => handleEducationChange(e, index, "degree")}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`year${index}`}>Graduation Year:</label>
        <input
          type="text"
          id={`year${index}`}
          name={`year${index}`}
          value={education.year}
          onChange={(e) => handleEducationChange(e, index, "year")}
          className="form-control"
        />
      </div>
      {index > 0 && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeEducation(index)}
        >
          Remove
        </button>
      )}
    </div>
  );
};
