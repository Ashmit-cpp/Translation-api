import { SignIn } from "@clerk/nextjs";

import "tailwindcss/tailwind.css"; 

const SignInPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <SignIn />
  </div>
);

export default SignInPage;
