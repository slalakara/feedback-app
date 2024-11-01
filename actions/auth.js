"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email) {
    return { errors: { email: "E-posta alanı boş olamaz" } };
  }

  if (!password) {
    return { errors: { password: "Şifre alanı boş olamaz" } };
  }

  const response = await fetch("https://feedback.mkadirgulgun.com.tr/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    return { errors: { global: `API hatası: ${errorText}` } };
  }

  const data = await response.json();
  if (!data.accessToken) {
    return { errors: { global: "Giriş başarısız, tekrar deneyin." } };
  }

  cookies().set("accessToken", data.accessToken);
  redirect("/");
}

export async function signupAction(prevState, formData) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};
  if (!firstName) errors.firstName = "İsim alanı boş olamaz.";
  if (!lastName) errors.lastName = "Soyisim alanı boş olamaz.";
  if (!username) errors.username = "Kullanıcı adı boş olamaz.";
  if (!email) errors.email = "Email alanı boş olamaz.";
  if (!password) errors.password = "Şifre alanı boş olamaz.";
  
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const response = await fetch("https://feedback.mkadirgulgun.com.tr/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstName, lastName, username, email, password })
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    return { errors: { global: `API hatası: ${errorMessage}` } };
  }

  const data = await response.json();

  if (!data.accessToken) {
    return { errors: { global: "Kayıt başarısız, tekrar deneyin." } };
  }

  cookies().set("accessToken", data.accessToken);
  redirect("/");
}

export async function logout(data) {
  cookies().delete("accessToken")
  redirect("/login")
}