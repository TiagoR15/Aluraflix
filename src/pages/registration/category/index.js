import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";

// import { Container } from './styles';

function registrationCategory() {
  let categoryName = useState("Movies");

  return (
    <PageDefault>
      <h1>Category Registration: {categoryName}</h1>

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
