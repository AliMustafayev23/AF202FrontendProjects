import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { signupSchema } from "../../schemas";

const Signup = () => {
  const localData = JSON.parse(localStorage.getItem("userdata")) ?? [];
  const [country, setCountry] = useState([]);
  const baseURL = "https://restcountries.com/v2/all";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCountry(response.data);
    });
  }, []);
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
      surname: "",
      password: "",
      confirm: "",
      country: "",
      city: "",
      flag: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  });
  localData.push(values);
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="name">Name/Username</label>
      <input
        onBlur={handleBlur}
        value={values.name}
        onChange={handleChange}
        id="name"
        type="text"
        placeholder="Enter your name"
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.name && touched.name && <p className="error">{errors.name}</p>}
      <label htmlFor="surname">Surname</label>
      <input
        onBlur={handleBlur}
        value={values.surname}
        onChange={handleChange}
        id="surname"
        type="text"
        placeholder="Enter your surname"
        className={errors.surname && touched.surname ? "input-error" : ""}
      />
      {errors.surname && touched.surname && (
        <p className="error">{errors.surname}</p>
      )}

      <label htmlFor="password">Password</label>
      <input
        onBlur={handleBlur}
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirm">Confirm Password</label>
      <input
        onBlur={handleBlur}
        value={values.password}
        onChange={handleChange}
        id="confirm"
        type="password"
        placeholder="Confirm password"
        className={errors.password && touched.password ? "input-error" : ""}
      />

      <label htmlFor="confirm">Country</label>
      <select
        onBlur={handleBlur}
        value={values.country}
        onChange={handleChange}
        id="country"
        type="text"
        placeholder="Enter your country"
        className={errors.country && touched.country ? "input-error" : ""}
      >
        {errors.country && touched.country && (
          <p className="error">{errors.country}</p>
        )}

        <option value="country">Country</option>
        {country.map((e, i) => {
          return (
            <option key={i} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>

      <label htmlFor="confirm">City</label>
      <select
        onBlur={handleBlur}
        value={values.city}
        onChange={handleChange}
        id="city"
        type="text"
        placeholder="Enter your city"
        className={errors.city && touched.city ? "input-error" : ""}
      >
        {errors.city && touched.city && <p className="error">{errors.city}</p>}

        <option value="city">City</option>
        {country.map((e, i) => {
          if (values.country === e.name) {
            values.city = e?.capital;
          }
          return (
            <option key={i} value={e.capital}>
              {e.capital}
            </option>
          );
        })}
      </select>
      <button
        disabled={isSubmitting}
        type="submit"
        onClick={() => {
          localStorage.setItem("userdata", JSON.stringify(localData));
        }}
      >
        Submit
      </button>
    </form>
  );
};
export default Signup;
