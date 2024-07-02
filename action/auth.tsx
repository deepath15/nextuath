"use server";

import * as z from "zod"
import { LoginSchema, RegisterSchema } from "@/schemas"
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { defaultRoute } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (data: z.infer<typeof LoginSchema>) => {

    const validate = LoginSchema.safeParse(data);

    if (!validate.success) {
        console.log(validate.error);
        return { error: "Invalid Credentials" };
    }
    const { email, password } = validate.data;
    console.log(email, password);
    try {
        signIn("credentials", {
            email,
            password,
            redirectTo: defaultRoute
        })
        return { success: "Login Successful" };
    }
    catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" }
                default:
                    return { error: "Something went wrong" }
            }
        }
        throw error;
    }
}


export const Register = async (data: z.infer<typeof RegisterSchema>) => {
    console.log(data);
    const validate = RegisterSchema.safeParse(data);

    if (!validate.success) {
        console.log(validate.error);
        return { error: "Something Went Wrong" };
    }

    const { email, password, name } = validate.data;

    console.log(email, password, name);

    const hashedPassword = await bcrypt.hash(password, 10)


    const userExist = await db.user.findUnique({
        where: { email, },
    });
    console.log(userExist);
    if (userExist) {
        return { error: "User already exist" };
    }
    const create = await db.user.create({
        data: { email, password: hashedPassword, name },
    })
    console.log(create);

    return { success: "Account Created Successfully" }
}