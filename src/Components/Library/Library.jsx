import React from "react";
import Style from "./Library.module.css";
import Lessons from "../Lessons/Lessons";
import Favorites from "../Favorites/Favorites";
import Recommended from "../Recommended/Recommended";
import Choices from "../Choices/Choices";
import Personal from "../Personal/Personal";
import Views from "../Views/Views";




export default function Library() {
  return (
    <>
      <Lessons />
      <Favorites />
      <Recommended />
      <Choices />
      <Personal />
      <Views />
    </>
  );
}
