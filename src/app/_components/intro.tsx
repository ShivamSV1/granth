"use client"; // This line indicates that this component is a client component

import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/_components/footer";

export function Intro() {
  return (
    <section className="flex-col flex items-start mt-16 mb-16 md:mb-12">
      <div className="flex justify-between w-full">
        <nav className="flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/work-in-progress" className="hover:underline">Science</Link>
          <Link href="/work-in-progress" className="hover:underline">Entertainment</Link>
          <Link href="/work-in-progress" className="hover:underline">About</Link>
        </nav>
      </div>
      <div>
        <h1 className="text-5xl mt-10 md:text-8xl font-bold tracking-tighter leading-tight text-color-black">
          Granth
        </h1>
        <h4 className="text-lg mt-5 ml-3 text-center">
          Let's Explore Ancient.....
        </h4>
      </div>
     
    </section>
  );
}