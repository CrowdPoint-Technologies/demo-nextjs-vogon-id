"use client";
import Nav from "@/components/Nav";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Nav />
      <div>
        <h1 className="text-5xl mb-20 ">Home</h1>
        <Link href="/restricted/page1" className="text-blue-400">Click here to access to a restricted page</Link>
      </div>
    </>
  );
}

export default Home;
