import LoginForm from "@/components/LoginForm/login-form";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage(){
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;
    
    if(token){
        redirect("/PostDetail")
    }
    
    return <LoginForm />
}