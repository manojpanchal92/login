import React, { useContext, useState } from 'react'
import './Login.css';
import { UserContext } from '../Context/Usercontext';
// import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Signup = () => {
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData)

    // const [signupclass, setSignupclass] = useState(false);

    // function handleSignup() {
    //     setSignupclass(true);
    // }

    // function handleSignin() {
    //     setSignupclass(false);
    // }


    const formik = useFormik({
        initialValues: {
            firstName: '',
            // lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            // lastName: Yup.string()
            //     .max(20, 'Must be 20 characters or less')
            //     .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min(6),
            passwordConfirmation: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {

            alert(JSON.stringify(values, null, 2));
            let user = JSON.stringify(values, null, 2);
            // setCurrentUser(user);
            setUserData(para => {
                if (userData.includes(user)) {
                    alert('user already exist')
                    return [...para]
                } else {
                    return [...para, user]
                }
            });

            console.log(userData);

            formik.resetForm();

        },
    });


    //sign in submit
    // function handleChange(event){
    //     console.log(event.target.value)

    // }

    // function handleSignInSubmit(event){
    //     event.preventDefault()
    //     console.log(event.target)
    //     let key= "firstName"
    //    for(let each of userData){
    //    if (each.hasOwnProperty(key ) && each[key] === event.target[0].value) {
    //     console.log('yes')
    //         return true; // Return true if found
    //     }else{
    //         console.log("error");
    //     }
    //    }
    // }

    return (
        <div>

            <div className="login-box">

                <h2>Sign Up</h2>

                <form onSubmit={formik.handleSubmit}>

                    <div className="user-box">

                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            required=""
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}

                        <label htmlFor="firstName">Firstname</label>


                    </div>

                    <div className="user-box">

                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            required=""
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}

                        <label htmlFor="email">Email</label>

                    </div>

                    <div className="user-box">

                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            required=""
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}

                        <label>Password</label>

                    </div>

                    <div className="user-box">

                        <input
                            type="password"
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirmation}
                            required=""
                        />
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                            <div>{formik.errors.passwordConfirmation}</div>
                        ) : null}

                        <label>Confirm Password</label>

                    </div>

                    <button type="submit">
                        <a>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign Up
                        </a>
                    </button>
                    <p>
                        Have an already an account?
                        <a href="/Login">Log in here</a>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Signup