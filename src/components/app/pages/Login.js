import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth-actions";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

let initialFormData = { email: "", password: "" };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const inputChangeHandler = (fieldName, event) => {
    setFormData((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  //   const isAuthenticated = useSelector(state=>{state.auth.isAuthenticated});
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // dispatch an action from the auth-actions file in redux/actions
    dispatch(login(formData)).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  };

  return (
    <main className={styles["form-container"]}>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={inputChangeHandler.bind(this, "email")}
            value={formData.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={inputChangeHandler.bind(this, "password")}
            value={formData.password}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
    </main>
  );
};
export default Login;
