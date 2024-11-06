"use client";
import { loginAction } from "@/actions/auth";
import { useFormState } from "react-dom";
import "@/components/LoginForm/login-form.css";
import Link from "next/link";

export default function LoginForm() {
const [state, action] = useFormState(loginAction, {
  errors: { username: null, password: null }
});

  return (
    <div className="LoginContent">
      <h1>Log<span className="login-span">In</span></h1>
      <div className="login-form-box">
        {state?.errors?.global && (
          <div className="bg-red-500 py-2 text-white px-3">
            <p>{state.errors.global}</p>
          </div>
        )}
        <form action={action}>
          <input type="text" name="username" placeholder="Email adresinizi yazınız" /> <br />
          {state?.errors?.username && (<small>{state.errors.username}</small>)} <br />
          <input type="password" name="password" placeholder="*********" /> <br />
          {state?.errors?.password && (<small>{state.errors.password}</small>)} <br />
          <button>Giriş Yap</button>
        </form>
      </div>
    </div>
  );
}