import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().min(5).required(),
  surname: yup.string().min(5).required(),
  country: yup.string().required(),
  city: yup.string().required(),
  password: 
  yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});
export const signinSchema = yup.object().shape({
  name: yup.string().min(1).required(),
  password: 
  yup.string().min(1).required()
    
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
