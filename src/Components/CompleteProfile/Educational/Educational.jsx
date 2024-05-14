import React from "react";
import { useState } from "react";

const Educational = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <div className="mt-3">
            <label>Collage:</label>
            <input
              type="text"
              name="collage"
              className="form-control"
              value={formData.collage}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              className="form-control"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>feild of study:</label>
            <input
              type="text"
              name="feild"
              className="form-control"
              value={formData.feild}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Educational;