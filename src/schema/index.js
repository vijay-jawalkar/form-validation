import * as Yup from "yup"


export const SignupSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    contact: Yup.string().min(10).required("mobile number must be 10 digits"),
    age: Yup.string().required("Please enter your age"),
    city: Yup.string().required("Please enter your city"),
    company: Yup.string().required("Please enter your company name"),
    email: Yup.string().email().required("Email must be valid"),
    password: Yup.string().min(8).required("Password must be minimum 8 characters"),
    confirm_password: Yup.string().required("Re enter your password").oneOf([Yup.ref("password"), null], "Password must match")
    
})