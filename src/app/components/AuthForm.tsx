'use client';

import Link from "next/link"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "./CustomInput"
import { authFormSchema, parseStringify } from "../utils/utils"
import { Loader2 } from "lucide-react"
import { signIn, signUp } from "../../../lib/actions/user.action"
import { redirect } from "next/navigation";



function AuthForm({type}:{type:string}) {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: ""
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
    
        setIsLoading(true);
        
        try {
            //sign up with appwirte
            if(type === 'sign-up'){
                const userData = {
                    firstName: data.firstName!,
                    lastName: data.lastName!,
                    dateOfBirth: data.dateOfBirth!,
                    //ssn: data.ssn!,
                    email: data.email,
                    password: data.password
                }

                const newUser = await signUp(userData);
                setUser(newUser);
            }

            if(type === 'sign-in') {
                const response = await signIn({
                    email: data.email,
                    password: data.password
                })
                if(response){
                    redirect('/');
                }
                
            }

        } catch (error) {
            console.log(error)
        }
        finally{
            setIsLoading(false);
        }

    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-slate-300 dark:bg-[#18181b] ">
            <div className={`${type === 'sign-in' ? 'h-[480px]' : 'h-[780px]'} relative w-[380px]  rounded-lg overflow-hidden bg-[#a5a4a41f] dark:bg-[#333232ce] border-solid border-b-2 dark:border-[#3f3f4666]`}>
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right">
                </div>
                <div className="absolute w-[380px] h-[480px] bg-gradient-to-r from-lime-500 via-lime-500 
                to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right">
                </div>
                <div className="absolute w-full inset-1 rounded-lg z-10 p-5 bg-gray-200 dark:bg-[#333232] border-solid border-b-2 dark:border-[#3f3f4666]">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-1">
                            <h2 className="text-x1 font-semibold text-lime-500 text-center mb-12">
                                { type === 'sign-in' ? 'Sign-in' : 'Sign-up'}
                            </h2>
                            { type === 'sign-up' && (
                                <>
                                    <div className="flex gap-4">
                                        <CustomInput
                                            control={form.control}
                                            name={"firstName"}
                                            label={"First Name"}
                                            placeholder={"Enter your first name"}
                                        />
                                        <CustomInput
                                            control={form.control}
                                            name={"lastName"}
                                            label={"Last Name"}
                                            placeholder={"Enter your last name"}
                                        />
                                    </div>
                                    <CustomInput
                                        control={form.control}
                                        name={"dateOfBirth"}
                                        label={"Date of Birth "}
                                        placeholder={"YYYY-MM-DD"}
                                    />
                                </>
                            )}
                            <CustomInput
                                control={form.control}
                                name={"email"}
                                label={"Email"}
                                placeholder={"Enter your Email"}
                            />
                            <CustomInput
                                control={form.control}
                                name={"password"}
                                label={"Password"}
                                placeholder={"Enter your Password"}
                            />
                            <Button disabled={isLoading} type="submit" className="py-1.5 text-gray-100 bg-lime-500 w-full 
                                rounded hover:bg-lime-600 hover-scale-105 duration-300">{isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin"/> &nbsp; Loading...
                                    </>
                                ) : type === 'sign-in' ? 'Sign-in' : 'Sign-up'}
                            </Button>
                            <div className="flex flex-row gap-0 mt-1">
                                <p className="text-gray-500">
                                    {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
                                </p>
                                <Link href={type === 'sign-in' ? '../Register' : '../Login'} 
                                className="ml-1 text-lime-500 hover:underline"
                                >
                                    {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                                </Link>
                            </div>
                        </form>
                    </Form>
                    <div></div>
                </div>
            </div>
        </div>
    )

}



export default AuthForm