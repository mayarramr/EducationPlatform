import React from "react";
import Style from "./Favorites.module.css";

const categories = [
  {
    title: "Design",
    icon: "fa-solid fa-paintbrush",
    color: "#48BABC",
    backgroundColor: "#C8EBEB",
  },
  {
    title: "Development",
    icon: "fa-solid fa-display",
    color: "#5E74EE",
    backgroundColor: "#CED5FA",
  },
  {
    title: "Marketing",
    icon: "fa-solid fa-chart-simple",
    color: "#F48E0D",
    backgroundColor: "#FCDDB4",
  },
  {
    title: "Photography",
    icon: "fa-solid fa-book",
    color: "#EE665D",
    backgroundColor: "#FAD0CE",
  },
  {
    title: "Acting",
    icon: "fa-solid fa-film",
    color: "#4B4C62",
    backgroundColor: "#BEBEC6",
  },
  {
    title: "Business",
    icon: "fa-solid fa-briefcase",
    color: "#48BABC",
    backgroundColor: "#C8EBEB",
  },
  {
    title: "Music",
    icon: "fa-solid fa-music",
    color: "#F48E0D",
    backgroundColor: "#FCDDB4",
  },
  {
    title: "Language Learning",
    icon: "fa-solid fa-globe",
    color: "#48BABC",
    backgroundColor: "#C8EBEB",
  },
  // ... and so on
];

export default function Favorites() {
  return (
    <>
      <div className="container py-5">
        <h4 className="fw-bold">
          Choose <span className="text-color">favourite</span> course from top
          category
        </h4>
        <div className="row mt-5 gy-4">
          {categories.map((category) => (
            <div key={category.title} className="col-md-3 text-center d-flex justify-content-center">
              <div className="flex-column d-flex shadowbox align-items-center w-75 py-4 px-3 rounded-3">
                <div
                  className="w-25 rounded-3 mb-3"
                  style={{ backgroundColor: category.backgroundColor }}
                >
                  <i
                    className={`fa-solid my-3 ${category.icon}`}
                    style={{ color: category.color }}
                  ></i>
                </div>
                <h5 className="fw-bold">{category.title}</h5>
                <p className="small-font gray-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                  velit necessitatibus dignissimos accusantium, sapiente quis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
