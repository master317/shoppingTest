import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { directive } from "@babel/types";
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
