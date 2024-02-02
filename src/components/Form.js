import React, { useState } from "react";
import { useFormik } from "formik";
import { SignupSchema } from "../schema";
import { useNavigate } from "react-router";

function Form() {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    contact: "",
    age: "",
    city: "",
    company: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values) => {
        if (values) {
          navigate("/success");
        }
      },
    });

  function onNext() {
    setStep((prev) => prev + 1);
  }

  function onPrevious() {
    setStep((prev) => prev - 1);
  }

  return (
    <div className="flex justify-center items-center ">
      {/* hero image */}
      <div className="flex max-w-96 items-center justify-center bg-hero md:h-screen overflow-hidden py-12">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="md:max-w-md   bg-white shadow-lg rounded-xl overflow-hidden  ">
            <div className=" py-4 px-6 bg-gray-900 text-white text-center font-bold ">
              <span className="font-bold text-2xl"> Sign Up</span>{" "}
            </div>

            <form className="py- my-6 px-6 " onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <div className="mb-4">
                    <label
                      className="inline-block text-gray-700 font-bold mb-2"
                      for="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your name"
                      required
                    />
                    {errors.name && touched.name ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="mb-4 ">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="text"
                      name="contact"
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your phone number"
                    />
                    {errors.contact && touched.contact ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.contact}
                      </p>
                    ) : null}
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="age"
                    >
                      Age
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="age"
                      type="text"
                      name="age"
                      placeholder="Enter your age"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.age && touched.age ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.age}
                      </p>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="city"
                    >
                      City
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="city"
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.city}
                      </p>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="company"
                    >
                      Company
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="company"
                      type="text"
                      name="company"
                      placeholder="Enter your company"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.company && touched.company ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.company}
                      </p>
                    ) : null}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      for="confirm_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="confirm_password"
                      type="password"
                      name="confirm_password"
                      placeholder="Enter your Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="text-xs text-red-600 font-semibold">
                        {errors.confirm_password}
                      </p>
                    ) : null}
                  </div>
                </>
              )}

              <div
                className={`flex justify-between items-center ${
                  step === 1 ? "flex-row-reverse" : "flex-row"
                } `}
              >
                {step > 1 && (
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline a"
                  >
                    {" "}
                    Previous{" "}
                  </button>
                )}

                {step < 3 && (
                  <button
                    type="button"
                    onClick={onNext}
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline "
                  >
                    {" "}
                    Next{" "}
                  </button>
                )}

                {step === 3 && (
                  <button
                    className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit Form
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
