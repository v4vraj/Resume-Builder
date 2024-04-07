import React, { useState, useEffect } from "react";
import axios from "axios";

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
    university: "The University of Texas at Dallas",
    degree: "Masters in Human Resources",
    year: "September 2007 - May 2011",
    skills:
      "Detail oriented, Well-versed in Texas employment law, Excellent written and oral communication skills, Develops positive workplace relationships",
    company: "Jim's Widget Factory",
    role: "Human Resources Manager",
    experienceDescription:
      "Implement effective company policies to ensure that all practices comply with labor and employment regulations. Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment. Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies. Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met.",
    joining: "January 2016",
    endDate: "Present",
    projectTitle: "E-commerce",
    githubLink: "https://github.com/v4vraj/ecommerce",
    projectDescription:
      "pwfdawijiawf nwo ndoaindi wid aoiwndoiawn waodn wioio wadw wiann anwoawd wn ouawnd uonawd o waedw a a",
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
    // Generate HTML content dynamically based on form data
    return `
      <p style="font-family: Arial; font-size: 28px; color: #000;">${
        formData.firstName
      } ${formData.lastName}</p>
      <p style="font-family: Arial; font-size: 16px; color: #000;">${
        formData.professionalTitle
      }</p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${
        formData.phone
      } · ${formData.email} · ${formData.linkedIn} ${formData.city}, ${
      formData.state
    }, ${formData.country}</p>
      <p style="font-family: Times New Roman; font-size: 14px; color: #666;">${
        formData.description
      }</p>
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">EDUCATION AND CERTIFICATIONS</h1>
      <hr style="border: 1px solid #000;">
      <p style="font-family: Arial; font-size: 14px; color: #333;">
      <span>${formData.university}</span>
      <span style="float: right;">${formData.year}</span>
      </p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${
        formData.degree
      }</p>
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">PROFESSIONAL EXPERIENCE</h1>
      <hr style="border: 1px solid #000;">
      <p style="font-family: Arial; font-size: 14px; color: #333;">
      <span>${formData.company}</span>
      <span style="float: right;">${formData.joining} – ${
      formData.endDate
    }</span>
    </p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${
        formData.role
      }</p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${
        formData.experienceDescription
      }</p>
      <h1 style="font-family: Arial; font-size: 20px; color: #000;">PROJECTS</h1>
      <hr style="border: 1px solid #000;">
      <p style="font-family: Arial; font-size: 14px; color: #333;">
      <span>${formData.projectTitle} |</span>
      <span">${formData.githubLink}</span>
    </p>
      <p style="font-family: Arial; font-size: 14px; color: #333;">${
        formData.projectDescription
      }</p>
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit form data to generate updated HTML content
      const response = await axios.post("/api/generate-docx", formData);
      setHtmlContent(response.data);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <h2>Resume Builder</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {section === 1 && (
              <>
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
                <div className="form-group">
                  <label htmlFor="professionalTitle">Professional Title</label>
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
              </>
            )}
            {section === 2 && (
              <>
                <div className="form-group">
                  <label htmlFor="university">University:</label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Degree:</label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="year">Graduation Year:</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </>
            )}
            {section === 3 && (
              <>
                <div className="form-group">
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role:</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experienceDescription">
                    Experience Description:
                  </label>
                  <textarea
                    id="experienceDescription"
                    name="experienceDescription"
                    value={formData.experienceDescription}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="joining">Joining Date:</label>
                  <input
                    type="date"
                    id="joining"
                    name="joining"
                    value={formData.joining}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </>
            )}
            {section === 4 && (
              <>
                <div className="form-group">
                  <label htmlFor="skills">Project Title:</label>
                  <input
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Github Link:</label>
                  <input
                    type="text"
                    id="githubLink"
                    name="githubLink"
                    value={formData.githubLink}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="skills">Project Description:</label>
                  <input
                    type="text"
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
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
            <div className="form-group">
              {section > 1 && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={previousSection}
                >
                  Previous
                </button>
              )}
              {section < 4 && (
                <button
                  type="button"
                  className="btn btn-primary ml-2"
                  onClick={nextSection}
                >
                  Next
                </button>
              )}
              {section === 4 && (
                <button type="submit" className="btn btn-primary ml-2">
                  Generate Resume
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div
            dangerouslySetInnerHTML={{ __html: generateHTMLContent() }}
          ></div>
        </div>
      </div>
    </div>
  );
};
