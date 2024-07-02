import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password must be atleast 1 character long"
    }).max(255),
}
)

export const RegisterSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1, {
        message: "Name is required"
    }),
    password: z.string().min(1, {
        message: "Password must be atleast 1 character long"
    }).max(255),
}
)