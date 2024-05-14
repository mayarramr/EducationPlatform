import React from "react";
import { useState } from "react";
import noneimg from "../../../Assets/blank-profile-picture-973460.svg";

const PersonalInfo = ({ formData, setFormData }) => {
  const [userImage, setUserImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div>
              {userImage ? (
                <img
                  src={URL.createObjectURL(userImage)}
                  alt="userImage"
                  className="w-50 d-flex justify-content-center"
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                <img
                  src={noneimg}
                  alt="noneimg"
                  className="w-50 d-flex justify-content-center"
                  style={{ borderRadius: "50%" }}
                />
              )}

              <input
                type="file"
                value={formData.image}
                onChange={(e) => setUserImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="mt-3">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-3">
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
