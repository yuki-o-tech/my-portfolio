import * as Yup from "yup"

export const validateContactForm = () => {
  return {
    fullName: Yup.string()
      .min(2, "Must be 2 characters or more")
      .max(50, "Must be 50 characters or less")
      .required("Please in put your name"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Please in put your Email"),
    message: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Please in put a messaage"),
  }
}
