import { Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import { LoginForm } from "./LoginPage.styled";
import SendIcon from "@mui/icons-material/Send";
import { setCredentials, useLoginMutation } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function LoginPage() {
  const [loginUser, { data, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    try {
      const user = await loginUser(values).unwrap();
      dispatch(setCredentials(user));
    } catch (e) {
      if (e.status === 400 && Object.keys(e.data).length === 0) {
        toast.error("Invalid email or password");
        return;
      }
      console.log("e", e);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <LoginForm autoComplete="off">
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
        </LoginForm>
      </Formik>
    </>
  );
}

export default LoginPage;
