import React, { useContext } from 'react'
import './Login.css';
import { UserContext } from '../Context/Usercontext';
// import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Login = () => {

    const { loggedIn, setLoggedin, userData, setCurrentUser } = useContext(UserContext);

    const formik = useFormik({
        initialValues: {
            // firstName: '',
            // lastName: '',
            email: '',
            password: '',
            // passwordConfirmation: '',
        },

        validationSchema: Yup.object({
            // firstName: Yup.string()
            //     .max(15, 'Must be 15 characters or less')
            //     .required('Required'),
            // lastName: Yup.string()
            //     .max(20, 'Must be 20 characters or less')
            //     .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min(6),
            // passwordConfirmation: Yup.string()
            //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));
            let user = JSON.stringify(values, null, 2);
            setCurrentUser(user);
            console.log(values)


            const userDataArray = userData.map(user => JSON.parse(user));

            // Access the "firstName" value from each object
            function check() {
                const foundUser = userDataArray.find(user => user.email === values.email);
                if (foundUser) {
                    console.log("Found user with firstName 'abc'");
                    alert("SuccessFull Login");
                    setLoggedin(true)
                    return true;
                } else {
                    alert("No user Found");
                    return false;
                }
            }

            check();

            // user.firstName === values.firstName);
            //   if (userExists) {
            //       console.log("User exists!");
            //       // Set user as logged in or perform any other actions
            //   } else {
            //       console.log("User does not exist!");
            //       // Handle case when user does not exist
            //   }


            formik.resetForm();

        },
    });

    return (
        <div>
            <div className="login-box">

                <h2>Login</h2>

                <form onSubmit={formik.handleSubmit}>

                    <div className="user-box">

                        <input
                            type="text"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required=""
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                        ) : null}
                        <label>Email</label>

                    </div>

                    <div class="user-box">

                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            required=""
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-danger'>{formik.errors.password}</div>
                        ) : null}
                        <label>Password</label>

                    </div>

                    <button type="submit">
                        <a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Log In
                        </a>
                    </button>
                    <p>
                        Don't have an account?
                        <a href="/Signup">Sign up here</a>
                    </p>
                </form>
            </div>


        </div>
    )
}

export default Login