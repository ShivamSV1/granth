"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function WorkInProgress() {
  useEffect(() => {
    // Create a script element for the first counter script
    const firstScript = document.createElement('script');
    firstScript.src = 'https://www.freevisitorcounters.com/auth.php?id=c972a27d48ecbc443c8e023756dbbfaf39cd8c55';
    firstScript.async = true;
    document.body.appendChild(firstScript);

    // Create a script element for the second counter script
    const secondScript = document.createElement('script');
    secondScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1252317/t/13';
    secondScript.async = true;
    document.body.appendChild(secondScript);

    return () => {
      // Clean up scripts on unmount
      document.body.removeChild(firstScript);
      document.body.removeChild(secondScript);
    };
  }, []);

  return (
    <div className="m-6 pt-6">
      <a href='http://www.freevisitorcounters.com'></a>
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
