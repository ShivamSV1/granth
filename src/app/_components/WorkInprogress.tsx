"use client";
import Link from "next/link";





export default function WorkInProgress() {
        
  return (
   <div className="m-6 pt-6">
   <nav className="flex space-x-6">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/work-in-progress" className="hover:underline">
      Science
    </Link>
    <Link href="/work-in-progress" className="hover:underline">Entertainment</Link>
    <Link href="/work-in-progress" className="hover:underline">About</Link>
  </nav>
    
    <div className="flex flex-col items-center justify-center min-h-screen">

      <h1 className="text-5xl font-bold mb-4">Work in Progress</h1>
      <p className="text-lg text-center">
        We're currently working on this section. Please check back later!
      </p>
      <p className="text-lg text-center">
        In the meantime, feel free to explore other sections of the site.
      </p>
    </div>
    </div>
  );
  
}

