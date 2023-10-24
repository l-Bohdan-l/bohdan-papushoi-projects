import { Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { RegistrationForm } from "./Registration.styled";
import { setCredentials, useRegisterMutation } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

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
      if (values.password.length < 7) {
        toast.error("Password min length - 7");
        return;
      }
      const user = await registerUser(values).unwrap();
      dispatch(setCredentials(user));
    } catch (e) {
      console.log("e", e);
      if (e.data.code === 11000) {
        toast.error("Email is already registered");
        return;
      }
      console.log("error msg", e);
      toast.error(e.data.message);
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
