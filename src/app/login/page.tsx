'use client';
import { getCsrfToken } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import Nav from '@/components/Nav';
import { useSearchParams } from 'next/navigation';

const SignIn: React.FC = () => {
  const callbackUrl = useSearchParams().get('callbackUrl') || '';
  const [csrfToken, setCsrfToken] = useState<string | undefined>();
  useEffect(() => {
    const fetchCsrfToken = async () => {
      const token = await getCsrfToken();
      setCsrfToken(token);
    };

    fetchCsrfToken();
  }, []);

  return (
    <div>
      <Nav />
      <div className="text-center flex flex-col justify-center  ">
        <p className="text-center mt-0 mb-8 text-foreground/60">
          You have to be authenticated.
        </p>
        <div className="flex justify-center align-center">
          <form method="post" action="/api/auth/signin/unidy">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <input type="hidden" name="callbackUrl" value={callbackUrl}></input>
            <button className='bg-black text-white rounded p-2 hover:bg-black/70'>Connect with Vogon ID</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
