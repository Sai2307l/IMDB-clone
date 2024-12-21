"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Menu() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Menubar className="h-16 px-3 mb-1 space-x-5 justify-between items-center dark:bg-[#1C1C1C] dark:border-b-[#2B2B2B]">
      <MenubarMenu>
        <div className="flex items-center space-x-2 justify-center dark:text-white">
          <MenubarTrigger className="h-9">
            <Link href="/home">Home</Link>
          </MenubarTrigger>
          <MenubarTrigger className="h-9">
            <Link href="/about">About</Link>
          </MenubarTrigger>
        </div>
        <div className="flex items-center space-x-2 justify-center float-end ml-auto">
          <Button
            variant="outline"
            size="icon"
            className="text-accent-foreground"
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          >
            <Sun className={`${theme == "dark" ? "block" : "hidden"}`} />
            <Moon className={`${theme == "light" ? "block" : "hidden"}`} />
          </Button>
          <Link href="/" className="left-0 right-0 top-0 bottom-0">
            <span className="h-15 rounded-sm bg-[#DBA506] py-2 px-4 font-bold">
              IMDb
            </span>
          </Link>
        </div>
      </MenubarMenu>
    </Menubar>
  );
}
