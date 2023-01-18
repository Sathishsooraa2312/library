import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { API } from './global';
// import { toast, ToastContainer } from 'react-toastify';
import * as yup from "yup"

const signupValidationSchema = yup.object({
  username: yup.string().required("Why not fill this User-Name?").min(1),
  phone: yup.string().required("Why not fill this Phone Number?").min(10).max(10),
  email: yup.string().required("Why not fill this e-mail ID?").min(8),
  password: yup.string().required("Why not fill this Password?").min(8),
})

export function Signup() {
  const navigate = useNavigate();

  const {handleSubmit, values, handleBlur, handleChange, touched, errors} = useFormik({
    initialValues: {
      username: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (newList) => {
      console.log("User details", newList)
      addUser(newList)
    },
  })
  const addUser = (newList) => {
    fetch(`${API}/users/signup`, {
      method:"POST",
      body: JSON.stringify(newList),
      headers: {"Content-Type" : "application/json"}
    })
    .then((data) => data.json())
    .then(() => navigate(`/users/login`));
  }

  return (
    <Card sx={{backgroundColor:"whitesmoke"}} className='auth-container'>
      <form onSubmit={handleSubmit} className='auth-form'>
        <h2>SIGNUP</h2>

        <TextField
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && errors.username}
          helperText={touched.username && errors.username ? errors.username : null}

          className='textfield-auth'
          // type='text'
          label="User-Name"
          variant="outlined"
        />

        <TextField
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && errors.phone}
          helperText={touched.phone && errors.phone ? errors.phone : null}

          className='textfield-auth'
          // type='text'
          label="Phone Number"
          variant="outlined"
        />

        <TextField
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email ? errors.email : null}

          className='textfield-auth'
          // type='text'
          label="e-mail ID"
          variant="outlined"
        />

        <TextField
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          helperText={touched.password && errors.password ? errors.password : null}

          className='textfield-auth'
          type='password'
          label="Password"
          variant="outlined"
        />

        <Button
          type='submit'
          className='button-auth'
          variant="contained"
          // onClick={() => navigate('/products')}
        >
          S<span>ignup</span>
        </Button>

        <Link className='auth-link' to="/users/login">Already have an account</Link>
      </form>
      {/* <ToastContainer /> */}
    </Card>
  );
}
