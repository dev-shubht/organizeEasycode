import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const url = app_config.backend_url;

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Login Success",
          });

          navigate("/manageuser");
        } else if (res.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
          });
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div className="container">
      <Formik initialValues={loginForm} onSubmit={loginSubmit}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              id="email"
              onChange={handleChange}
              value={values.email}
            />
            <TextField
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
