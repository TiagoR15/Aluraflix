import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function registrationCategory() {
  return (
    <PageDefault>
      <h1>Category Registration</h1>

      <form>
        <label>
          Category Name:
          <input type="text" />
        </label>
        <button>Register</button>
      </form>
    </PageDefault>
  );
}

export default registrationCategory;
