import Container from "@/components/ui/container";
import Translator from "@/components/Translator";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Main = () => (
  <main className="p-2">
    <h1 >Welcome to your new app</h1>
    <SignedIn>
      <p >You have successfully signed in</p>
    </SignedIn>
    <SignedOut>
      <p >Sign up for an account to get started</p>
    </SignedOut>
  </main>
);

export default function Home() {
  return (
    <Container>
      <Main />
      {/* <Translator/> */}
    </Container>
  );
}
