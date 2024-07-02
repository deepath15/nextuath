import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas";
import db from "./lib/db";
import bcrypt from "bcryptjs";


export default {
    providers: [Credentials({
        
        async authorize(credentials) {
            const validateFields = LoginSchema.safeParse(credentials);
            if (validateFields.success) {
                const { email, password } = validateFields.data;
                console.log(email, password);
                const user = await db.user.findUnique({
                    where: { email }
                })
                console.log(user);

                if (!user || !password) {
                    return null;
                }
                const userPassword = user?.password ? user.password : ""
                const mathPassword = await bcrypt.compare(
                    password,
                    userPassword
                )
                console.log(mathPassword);

                if (mathPassword) return user
                
            }
            return null;
        }
    })]
} satisfies NextAuthConfig;
