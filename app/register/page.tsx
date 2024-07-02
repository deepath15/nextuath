'use client'
import React, { useState } from "react";
import * as z from "zod"
import CardWrapper from "../components/cardwrapper";
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
import { RegisterSchema } from "@/schemas";
import ErrorMessage from "../components/form-error";
import SuccessMessage from "../components/form-success";
import { Register } from "@/action/auth";

export default function Home() {

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");
    Register(data)
      .then((response) => {
        setError(response.error)
        setSuccess(response.success)
      })
    console.log(data);
  };
  
  return (
    <div className="flex items-center justify-center h-screen " >
      <CardWrapper
        headerName="Create an Account"
        backButtonContent="Already have an account?"
        backButtonHref="/login"
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Deepath" />
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
            <SuccessMessage message={success} />
            <Button className="w-full" type="submit">Register</Button>
          </form>
        </Form>

      </CardWrapper>
    </div>
  );
}
