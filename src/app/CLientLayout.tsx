"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const publicRoutes = ["/login", "/register"];
    const token = localStorage.getItem("token");

    if (!token && !publicRoutes.includes(pathname)) {
      router.replace("/login");
      return;
    }

    if (token && publicRoutes.includes(pathname)) {
      router.replace("/project");
      return;
    }

    setIsAuthChecked(true);
  }, [pathname, router]);

  if (!isAuthChecked) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return <div className="w-screen h-screen">{children}</div>;
}
