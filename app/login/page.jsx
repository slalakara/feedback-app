"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm/login-form";

export default async function LoginPage() {
  const token = cookies().get("accessToken")?.value;

  if (token) {
    redirect("/");
  }

  return <LoginForm />;
}