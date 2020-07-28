import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function registrationCategory() {
  return (
    <PageDefault>
      <h1>Category Registration</h1>
      <Link to="/registration/category">Register Category</Link>
    </PageDefault>
  );
}

export default registrationCategory;
