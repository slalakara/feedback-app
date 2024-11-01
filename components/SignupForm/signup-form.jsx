"use client"
import React, { useState } from 'react';
import { signupAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import "@/components/SignupForm/signup-form.css"

const SignupForm = () => {
  const [state, action] = useFormState(signupAction, {
    errors: { username: null, password: null }
  });
    const [formData, setFormData] = useState({
        email: '',
        lastname: '',
        password: '',
        username: '',
        firstname: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const signupData = {
            email: formData.email,
            lastname: formData.lastname,
            password: formData.password,
            username: formData.username,
            firstName: formData.firstName,
        };

        try {
            const response = await signupAction(signupData);
            console.log("Kayıt başarılı:", response);
        } catch (error) {
            console.error("Kayıt hatası:", error);
        }
    };

    return (
      <div className="LoginContent">
        <h1>Sign<span className="login-span">Up</span></h1>
        <div className="login-form-box">
          {state?.errors?.global && (
            <div className="bg-red-500 py-2 text-white px-3">
              <p>{state.errors.global}</p>
            </div>
          )}
        <form onSubmit={handleSubmit}>
            <input type="text" name="FirstName" placeholder="Ad" onChange={handleChange} required />
            <input type="text" name="LastName" placeholder="Soyadı" onChange={handleChange} required />
            <input type="text" name="Username" placeholder="Kullanıcı Adı" onChange={handleChange} required />
            <input type="email" name="Email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="Password" placeholder="Şifre" onChange={handleChange} required />
            <button type="submit">Kayıt Ol</button>
        </form>
      </div>
    </div>
    );
};

export default SignupForm;
