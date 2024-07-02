'use client'
import React, { useState } from "react";
import * as z from "zod"
import CardWrapper from "@/app/components/cardwrapper";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/schemas";
import ErrorMessage from "@/app/components/form-error";
import SuccessMessage from "@/app/components/form-success";
import { login } from "@/action/auth";
import { useRouter } from "next/navigation";

export default function Home() {

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

/*   const [success, setSuccess] = useState<string | undefined>("");
 */  const [error, setError] = useState<string | undefined>("");
  const { push } = useRouter();

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log("enterd");
/*     setSuccess("");
 */    setError("");
    login(data)
      .then((response) => {
        setError(response?.error)
/*         setSuccess(response?.success ? response.success : "")
 */        push("/dashboard")

      })
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center h-screen " >
      <CardWrapper
        headerName="Enter Login Credentials"
        backButtonContent="Don't have an account"
        backButtonHref="/register"
        showSocial={true}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="deepath@gmail.com" />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="*******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ErrorMessage message={error} />
{/*             <SuccessMessage message={success} />
 */}            <Button className="w-full" type="submit">Login</Button>
          </form>
        </Form>

      </CardWrapper>
    </div>
  );
}
