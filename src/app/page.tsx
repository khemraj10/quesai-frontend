// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-8">
//       <h1 className="text-4xl font-bold">Welcome to Ques AI</h1>
//       <p className="mt-4 text-lg text-gray-600">Built by Khemraj Gupta 🚀</p>
//     </main>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/project");
    } else {
      router.push("/login");
    }
  }, [router]);

  return null; // or a loading spinner
}
