"use client"
import { signOut, useSession } from 'next-auth/react';


const SignInOut = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="inline-block">
        <div className="flex items-center space-x-2">
          <div className='text-foreground/70 text-sm'>Signed in as {session?.user?.email}</div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;
};
export default SignInOut;
