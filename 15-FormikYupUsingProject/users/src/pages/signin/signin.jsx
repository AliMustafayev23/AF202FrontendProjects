import { useFormik } from "formik";
import { useRef } from "react";
import { signinSchema } from "../../schemas";

const Signin = () => {
  const serverdata = JSON.parse(localStorage.getItem("userdata"));
  const onSubmit = async (values, action) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    action.resetForm();
  };
  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit,
  });

  const inputName = useRef();
  const inputPassword = useRef();
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">Username</label>
      <input
        onBlur={handleBlur}
        value={values.name}
        onChange={handleChange}
        className={errors.name && touched.name ? "input-error" : ""}
        ref={inputName}
        id="name"
        type="text"
        placeholder="Enter your username"
      />
      {errors.name && touched.name && <p className="error">{errors.name}</p>}

      <label htmlFor="password">Password</label>
      <input
        onBlur={handleBlur}
        value={values.password}
        onChange={handleChange}
        ref={inputPassword}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          serverdata.some((element) => {
            // if (
            return element.name === inputName.current.value &&
              element.password === inputPassword.current.value
              ? (window.location = "/users-page")
              : console.log();;
            // ) {
            //   a++;
            // }
            // if (a === 1) {
            //   return window.location = "/users-page";
            // }
            // if (a === 0) {
            //   alert("unsucces");
            //   a = 0;
            // }

            // window.location = "/users-page";
          });
        }}
      >
        Sign In
      </button>
    </form>
  );
};
export default Signin;
