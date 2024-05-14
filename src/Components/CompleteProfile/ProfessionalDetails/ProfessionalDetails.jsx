import React from "react";
import { useState } from "react";

const ProfessionalDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <div className="mt-3">
            <label>Current Job Title:</label>
            <input
              type="text"
              name="jobtitle"
              className="form-control"
              value={formData.jobtitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>Industry:</label>
            <input
              type="text"
              name="industry"
              className="form-control"
              value={formData.industry}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>Years of Experience:</label>
            <input
              type="text"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalDetails;
