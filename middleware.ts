import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
    defaultRoute,
    publicRoute,
    apiAuth,
    authRoutes,
} from "@/routes"


const { auth } = NextAuth(authConfig)

export default auth((req) => {

    const { nextUrl } = req
    const isLoggedIn = !!req.auth;
    console.log("login", isLoggedIn);


    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuth)
    console.log(isApiAuthRoute);
    const isPublicRoute = publicRoute.includes(nextUrl.pathname);
    console.log(isPublicRoute);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    console.log(isAuthRoute);


    if (isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(defaultRoute, nextUrl));

        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        console.log("working");

        return Response.redirect(new URL('/', nextUrl));
    }


})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}