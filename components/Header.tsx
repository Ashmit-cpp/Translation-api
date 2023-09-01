"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Menu, Moon, Gem, Sun } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const routes = [
    {
      href: "/",
      label: "Translator",
    },
    {
      href: "/",
      label: "Documentation",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">LangBridge</h1>
            </Link>
          </div>
          <nav className="mx-6 items-center space-x-4 lg:space-x-6  md:block">
            {routes.map((route, i) => (
              <Button asChild variant="ghost">
                <Link
                  key={i}
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
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
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;