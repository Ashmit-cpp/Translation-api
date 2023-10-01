"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Menu, Moon, Gem, Sun } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const routes = [
    {
      href: "/translator",
      label: "Translator",
    },
    {
      href: "/documentation",
      label: "Documentation",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1
              className="text-xl p-2 font-bold text-center rounded-xl backdrop-filter backdrop-sepia"
              style={{
                padding: "20px",
              }}
            >
              LangBridge
            </h1>
          </Link>
        </div>
        {/* <nav className="mx-6 items-center space-x-4 lg:space-x-6  md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav> */}
        <div className="flex items-center">
          <div className="ml-4 lg:ml-0">
            <Button
              variant="destructive"
              size="icon"
              className="mr-2 bg-green-600 hover:bg-green-500 h-8 w-30 p-2"
              aria-label="Premium"
            >
              <Gem />
              Upgrade to Premium
              <span className="sr-only">Premium</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <div>
            <SignedOut>
              <Button
                variant="default"
                size="icon"
                className="mr-2 bg-[#103FEF] 103FEF hover:bg-blue-500 h-8 w-30 p-2"
              >
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton
                userProfileMode="navigation"
                userProfileUrl="/user"
                afterSignOutUrl="/"
                afterMultiSessionSingleSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
