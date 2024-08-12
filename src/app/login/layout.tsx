import { type ReactNode, Suspense } from 'react';

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
