"use client";

import Image from "next/image";
import spinner from "@/public/Spinner.svg";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Image src={spinner} alt="Loading spinner" />
      <p>Loading Please Wait</p>
    </div>
  );
}
