import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex w-full  items-center space-x-2 justify-center py-2 h-16">
      <Input
        type="search"
        placeholder="Search the Name of the Movie"
        className="max-w-sm dark:bg-gradient-to-tl from-zinc-100 to-slate-200 placeholder:text-cyan-700 text-cyan-950"
      />
      <Button type="submit" variant="outline" size="icon">
        <Search className="text-accent-foreground" />
      </Button>
    </div>
  );
}
