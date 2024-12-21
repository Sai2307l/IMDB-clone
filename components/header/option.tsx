import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function Option() {
  return (
    <Menubar className="h-16 px-3 space-x-5 flex justify-center bg-gradient-to-r from-red-400 to-rose-600 dark:border-[#2B2B2B] text-slate-200">
      <MenubarMenu>
        <MenubarTrigger className="h-11">
          <Link href="/trends">Trending</Link>
        </MenubarTrigger>
        <MenubarTrigger className="h-11">
          <Link href="/top-rated">Top Rated</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
