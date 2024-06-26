import React, { useState, useEffect } from "react";
import axios from "axios";
import { EducationInputs } from "../components/EducationInput";
import { ExperienceInputs } from "../components/ExperienceInput";
import "../scss/_resumeBuilderForm.scss";
import { ProjectsInputs } from "../components/ProjectInput";
export const ResumeBuilderForm = () => {
  const [formData, setFormData] = useState({
    firstName: "Chris",
    lastName: "Candidate",
    professionalTitle: "Full stack developer",
    email: "email@youremail.com",
    phone: "(469) 385-2948",
    linkedIn: "www.linkedin.com/in/vraj-shah23",
    city: "Plano",
    state: "TX",
    country: "USA",
    description:
      "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
    educations: [
      {
        university: "The University of Texas at Dallas",
        degree: "Masters in Human Resources",
        year: "September 2007 - May 2011",
      },
    ],
    skills:
      "Detail oriented, Well-versed in Texas employment law, Excellent written and oral communication skills, Develops positive workplace relationships",
    experience: [
      {
        company: "Jim's Widget Factory",
        role: "Human Resources Manager",
        experienceDescription:
          "Implement effective company policies to ensure that all practices comply with labor and employment regulations. Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment. Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies. Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met.",
        joining: "January 2016",
        endDate: "Present",
      },
    ],
    projects: [
      {
        projectTitle: "E-commerce",
        githubLink: "https://github.com/v4vraj/ecommerce",
        projectDescription:
          "pwfdawijiawf nwo ndoaindi wid aoiwndoiawn waodn wioio wadw wiann anwoawd wn ouawnd uonawd o waedw a a",
      },
    ],
  });
  const [section, setSection] = useState(1);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await axios.get("/api/convert");
        setHtmlContent(response.data);
      } catch (error) {
        console.error("Error fetching HTML:", error);
      }
    };

    fetchHtmlContent();
  }, []);
  const generateHTMLContent = () => {
    return `
      <p style="font-family: Arial; font-size: 28px; color: #000;">${
        formData.firstName
      } ${formData.lastName}</p>
      <p style="font-family: Arial; font-size: 16px; color: #000;">${
        formData.professionalTitle
      }</p>
      <p style="font-family: Arial; font-size: 14px; color: #000;">${
        formData.phone
      } · ${formData.email} · ${formData.linkedIn} · ${formData.city}, ${
      formData.state
    }, ${formData.country}</p>
      <p style="font-family: Times New Roman; font-size: 14px; color: #666;">${
        formData.description
      }</p>
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">EDUCATION</h1>
      <hr style="border: 1px solid #000;">
      ${formData.educations
        .map(
          (education, index) => `
        <p style="font-family: Arial; font-size: 14px; color: #333;">
          <strong>${education.university}</strong>
          <span style="float: right;">${education.year}</span>
        </p>
        <p style="font-family: Arial; font-size: 14px; color: #333;">${education.degree}</p>
      `
        )
        .join("")}
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">EXPERIENCE</h1>
      <hr style="border: 1px solid #000;">
      ${formData.experience
        .map(
          (experience, index) => `
      <p style="font-family: Arial; font-size: 14px; color: #333;">
        <strong>${experience.company}</strong>
        <span style="float: right;">${experience.joining} – ${experience.endDate}</span>
      </p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${experience.role}</p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${experience.experienceDescription}</p>
      `
        )
        .join("")} 
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">PROJECTS</h1>
      <hr style="border: 1px solid #000;">
      ${formData.projects
        .map(
          (project, index) => ` 
          <p style="font-family: Arial; font-size: 14px; color: #333;">
          <span>${project.projectTitle}</span> |
          <span><a href="${project.githubLink}" style="color: #007bff;">${project.githubLink}</a></span>
      </p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${project.projectDescription}</p>
      `
        )
        .join("")}
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">TECHNICAL SKILLS</h1>
      <hr style="border: 1px solid #000;">
      <ul style="font-family: Arial; font-size: 14px; color: #333;">
        ${formData.skills
          .split(",")
          .map((skill) => `<li>${skill.trim()}</li>`)
          .join("")}
      </ul>
    `;
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      educations: [
        ...formData.educations,
        { university: "", degree: "", year: "" },
      ],
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          projectTitle: "",
          githubLink: "",
          projectDescription: "",
        },
      ],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          role: "",
          experienceDescription: "",
          joining: "",
          endDate: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const updatedEducations = [...formData.educations];
    updatedEducations.splice(index, 1);
    setFormData({ ...formData, educations: updatedEducations });
  };

  const removeExperience = (index) => {
    const updatedExperience = [...formData.experience];
    updatedExperience.splice(index, 1);
    setFormData({ ...formData, experience: updatedExperience });
  };

  const removeProject = (index) => {
    const updateProjects = [...formData.projects];
    updateProjects.splice(index, 1);
    setFormData({ ...formData, projects: updateProjects });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/generate-docx", formData, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.docx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating DOCX template:", error);
    }
  };

  const nextSection = () => {
    setSection(section + 1);
  };

  const previousSection = () => {
    setSection(section - 1);
  };
  const handleEducationChange = (e, index, field) => {
    const { value } = e.target;
    const updatedEducations = [...formData.educations];
    updatedEducations[index][field] = value;
    setFormData({ ...formData, educations: updatedEducations });
  };

  const handleExperienceChange = (e, index, field) => {
    const { value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleProjectChange = (e, index, field) => {
    const { value } = e.target;
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-5">Resume Builder</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="form-container">
            {section === 1 && (
              <>
                <h2>Personal Information</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name:</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name:</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="professionalTitle">
                        Professional Title:
                      </label>
                      <input
                        type="text"
                        id="professionalTitle"
                        name="professionalTitle"
                        value={formData.professionalTitle}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number:</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="linkedIn">LinkedIn Profile:</label>
                      <input
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="city">City:</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="state">State:</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="country">Country:</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            {section === 2 && (
              <>
                {formData.educations.map((education, index) => (
                  <EducationInputs
                    key={index}
                    education={education}
                    index={index}
                    handleEducationChange={handleEducationChange}
                    removeEducation={removeEducation}
                  />
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={addEducation}
                >
                  Add Education
                </button>
              </>
            )}
            {section === 3 && (
              <>
                {formData.experience.map((experience, index) => (
                  <ExperienceInputs
                    key={index}
                    experience={experience}
                    index={index}
                    handleExperienceChange={handleExperienceChange}
                    removeExperience={removeExperience}
                  />
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={addExperience}
                >
                  Add Experience
                </button>
              </>
            )}
            {section === 4 && (
              <>
                {formData.projects.map((project, index) => (
                  <ProjectsInputs
                    key={index}
                    project={project}
                    index={index}
                    handleProjectChange={handleProjectChange}
                    removeProject={removeProject}
                  />
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  onClick={addProject}
                >
                  Add Project
                </button>
              </>
            )}

            {section === 5 && (
              <>
                <div className="form-group">
                  <label htmlFor="skills">Skills:</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </>
            )}
            <div className="form-group mt-4">
              {section > 1 && (
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={previousSection}
                >
                  Previous
                </button>
              )}
              {section < 5 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={nextSection}
                >
                  Next
                </button>
              )}
              {section === 5 && (
                <button type="submit" className="btn btn-success ml-2">
                  Generate Resume
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="preview-container">
            <div className="word-document">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: generateHTMLContent() }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
