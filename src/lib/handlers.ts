'use server'
import { redirect } from "next/navigation"
import { login } from "./lib"

export const submitLogin = async (formData: FormData) => {
    await login(formData)
    redirect('/')
  
}