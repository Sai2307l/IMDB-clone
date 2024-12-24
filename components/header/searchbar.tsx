"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, FormEvent } from "react";
import { redirect } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!searchTerm) return;
    console.log("hello");
    redirect(`/search/${searchTerm}`);
  }
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex w-full  items-center space-x-2 justify-center py-2 h-16"
    >
      <Input
        type="search"
        placeholder="Search the Name of the Movie"
        className="max-w-sm dark:bg-gradient-to-tl from-zinc-100 to-slate-200 placeholder:text-cyan-700 text-cyan-950"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Button type="submit" variant="outline" size="icon">
        <Search className="text-accent-foreground" />
      </Button>
    </form>
  );
}
