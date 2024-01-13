import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormUse = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
  } = useForm(
    // {
    //         defaultValues: {
    //             firstName: 'Kalvium', // Default value for firstName
    //             lastName: 'Raj',   // Default value for lastName
    //             email: 'aman@gmail.com',         // Default value for email (empty string in this case)
    //             //  Add default values for other form fields here
    //         }
    //     }
    );

  console.log(isSubmitSuccessful, isSubmitted)
  const formSubmitHandler = (data) => {
    console.log(data);
    toast.success("Form Submitted!")
  };

  return (
    <div className="form-container">
    <ToastContainer />
      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {/* Success Message */}
          {isSubmitSuccessful && <div className="success">
            <p>Registration Sucessfull! ✅</p>
          </div>}

          <label>First Name :</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: "Fill first name",
              minLength: {
                value: 4,
                message: "Minimum 4 characted required!",
              },
              maxLength: {
                value: 8,
                message: "Max 8 characted required!",
              },
            })}
          />
          {errors.firstName && <p className="err">{errors.firstName.message}</p>}
          {/* <p className="err">{errors.firstName?.message}</p> */}


          <label>Last Name :</label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", {
              required: "Fill last name",
              minLength: {
                value: 4,
                message: "Minimum 4 characted required!",
              },
              maxLength: {
                value: 8,
                message: "Max 8 characted required!",
              },
            })}
          />
          {errors.lastName && <p className="err">{errors.lastName.message}</p>}

          <label>Email Name :</label>
          <input
            type="email"
            name="email"
            {...register("email", { 
              required: "Email Required!",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid Email",
              }
            }
              
              )}
          />
          {errors.email && <p className="err">{errors.email.message}</p>}

          <label>Password :</label>
          <input
            type="password"
            name="password"
            {...register("password", { 
                required: "Fill Password!",
              minLength: {
                value: 8,
                message: "Min 8 characted required!",
              },
              pattern:{
                value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:"Password Not Valid"
            }
            })}
          />
          {errors.password && <p className="err">{errors.password.message}</p>}

          <input type="submit" value={"Register"} />
          <button onClick={()=>{reset()}}>
            Reset
            
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default FormUse;