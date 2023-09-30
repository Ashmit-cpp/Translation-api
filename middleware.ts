import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow access to these public routes
  publicRoutes: ["/api/:path*", "/"], 
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
