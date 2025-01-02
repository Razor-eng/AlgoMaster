"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const routes = [
  {
    label: "Data Structures",
    href: "/data-structures",
  },
  {
    label: "Algorithms",
    href: "/algorithms",
  },
];

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center border-b bg-background px-4 md:px-6">
      {/* <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col space-y-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    pathname === route.href && "bg-accent text-accent-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet> */}
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold inline-block">AlgoMaster</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}
