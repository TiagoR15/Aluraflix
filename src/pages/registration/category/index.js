import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'

import './styles.css'
import Loading from '../../../components/Loading';

function RegistrationCategory() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categorias"
      : "https://tiagoflix.herokuapp.com/categorias"

    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories(response)
      });

  }, [])


  return (
    <PageDefault>
      <h1>
        Registration Category:
        {' '}
        {values.name}
      </h1>
      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategories([...categories, values]);
          clearForm();
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

        <Button>Registration</Button>
      </form>

      {categories.length === 0 && (
        <Loading />
      )}

      <table className="table">
        <thead>
          <tr>
            <th><h2>Category</h2></th>
            <th><h2>Description</h2></th>
            <th><h2>Color</h2></th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category, index) =>
            <tr>
              <td>{category.titulo}</td>
              {category.link_extra ? <td>{category.link_extra.text}</td> : <td></td>}
              <td> <input type="color" value={category.cor} disabled /></td>

            </tr>)}
        </tbody>
      </table>

      <Link to="/">Go to home</Link>
    </PageDefault>
  );
}
export default RegistrationCategory;
