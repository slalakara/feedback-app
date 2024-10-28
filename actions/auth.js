"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState, formData){
    console.log(formData);
    const username = formData.get("username");
    const password = formData.get("password");
    if(!username){
        return {
            errors: {
                username: "Kullanıcı adı boş olamaz"
            }
        }
    }
    if(!password){
        return {
            errors: {
                password: "Şifre alanı boş olamaz"
            }
        }
    }


    const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username,
            password,
            expiresInMins: 30
        })
    })

    const data = await response.json();
    if(data.message){
        return {
            errors: {
                global: data.message
            }
        }
    }


    cookies().set("accessToken", data.accessToken)

    redirect("/");

}


export async function logout(data) {
    cookies().delete("accessToken")

    redirect("/login")
}