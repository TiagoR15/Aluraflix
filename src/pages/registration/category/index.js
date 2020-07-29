import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function RegistrationCategory() {
  const [categories, setCategories] = useState(["Teste"]);

  const initialValues = {
    name: "",
    description: "",
    color: "",
  };
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute("name"), e.target.value);
  }

  return (
    <PageDefault>
      <h1>Registration Category: {values.name}</h1>
      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategories([...categories, values]);
          setValues(initialValues);
        }}
      >
        <FormField
          label="Category Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>Registration</button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Go to home</Link>
    </PageDefault>
  );
}
export default RegistrationCategory;
