import { Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { RegistrationForm } from "./Registration.styled";
import { setCredentials, useRegisterMutation } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

function Registration() {
  const [registerUser, { data, error }] = useRegisterMutation();
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    try {
      const user = await registerUser(values).unwrap();
      dispatch(setCredentials(user));
    } catch (e) {
      console.log(error);
    }
  };

  //ffffaaaffff@mail.com
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <RegistrationForm autoComplete="off">
        <Field
          name="name"
          type="text"
          as={TextField}
          label="name"
          variant="standard"
        />
        <Field
          name="email"
          type="email"
          as={TextField}
          label="email"
          variant="standard"
        />
        <Field
          name="password"
          type="password"
          as={TextField}
          label="password"
          variant="standard"
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </RegistrationForm>
    </Formik>
  );
}

export default Registration;
