"use client";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import SignInOut from "./SignInOut";

const Nav = () => {
  return (
    <SessionProvider>
      <nav className="flex justify-between border-b mb-20">
        <Link href="/">Home</Link>
        <SignInOut />
      </nav>
    </SessionProvider>
  );
}

export default Nav;
