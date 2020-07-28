import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function registrationVideo() {
  return (
    <PageDefault>
      <h1>Video Registration</h1>
      <Link to="/cadastro/categoria">Register Category</Link>
    </PageDefault>
  );
}

export default registrationVideo;
