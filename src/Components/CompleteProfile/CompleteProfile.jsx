import React from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ProfessionalDetails from "./ProfessionalDetails/ProfessionalDetails";
import Educational from "./Educational/Educational";
import { useNavigate } from 'react-router-dom';

const CompleteProfile = ({ onCompleteProfile, onClose }) => {
  const [formData, setFormData] = useState({
    image: "",
    fullName: "",
    phoneNumber: "",
    country: "",
    city: "",
    collage: "",
    degree: "",
    feild: "",
    jobtitle: "",
    industry: "",
    experience: "",

  });
  let navigate = useNavigate();


  function navigateToLogin() {
    navigate("/");
  }

  const [page, setPage] = useState(0);
  const Formtitle = ["Personal Info", "Professional Details", "Other"];
  const PageDesplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <ProfessionalDetails formData={formData} setFormData={setFormData} />
      );
    } else {
      return <Educational formData={formData} setFormData={setFormData} />;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    onClose();
  };

  return (
    <>
      <div className="vh-100 fixed-top d-flex justify-content-center align-items-center inset bg-black bg-opacity-25">
        <div className=" w-50">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="porgressbar w-100 rounded-5">
              <div
                className=" rounded-5"
                style={{
                  width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
                }}
              ></div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded-5"
                onClick={onClose}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="header d-flex justify-content-center">
              <h3 className="fw-bold">{Formtitle[page]}</h3>
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-75 overflow-scroll" style={{ height: "360px" ,scrollbarWidth: "none" }}>
                <div className="body">{PageDesplay()}</div>
                <div className="footer d-flex justify-content-center my-3">
                  <button
                    className="btn btn-success mx-3"
                    onClick={() => setPage((currPage) => currPage - 1)}
                    disabled={page == 0}
                  >
                    Previous
                  </button>

                  {page == Formtitle.length - 1 ? (
                    <button className="btn btn-success mx-3 " onClick={()=> navigateToLogin()}>Confirm</button>
                  ) : (
                    <button
                      className="btn btn-success mx-3"
                      onClick={() => setPage((currPage) => currPage + 1)}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
