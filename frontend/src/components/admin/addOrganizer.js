import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

const AddOrganiser = () => {
  const signupStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const userForm = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    age: 0,
  };

  //   2. Create a submit function
  const formSubmit = (formdata) => {
    console.log(formdata);

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format to send

    // asynchronous function returns promise
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully!!",
        });
      });
  };

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          className="w-100 mt-4"
          variant="outlined"
          label="Name"
          type="text"
          id="name"
          onChange={handleChange}
          value={values.name}
        />
        <TextField
          className="w-100 mt-4"
          variant="outlined"
          label="Email"
          type="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />
        <TextField
          className="w-100 mt-4"
          variant="outlined"
          label="Mobile"
          type="text"
          id="mobile"
          onChange={handleChange}
          value={values.mobile}
        />

        <TextField
          className="w-100 mt-4"
          variant="outlined"
          label="Address"
          id="address"
          multiline
          rows={4}
          onChange={handleChange}
          value={values.address}
        />

        <TextField
          className="w-100 mt-4"
          variant="outlined"
          label="Age"
          type="number"
          id="age"
          onChange={handleChange}
          value={values.age}
        />

        <TextField
          className="w-100 mt-4"
          variant="outlined"
          label="Password"
          type="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />

        <Button type="submit" variant="contained" className="mt-5">
          Submit
        </Button>
      </form>
    );
  };

  return (
    <Container>
      <Formik initialValues={userForm} onSubmit={formSubmit}>
        {formBody}
      </Formik>
    </Container>
  );
};

export default AddOrganiser;