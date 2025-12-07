"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    // Auto-navigate to home page after 2 seconds
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="page page-1">
      <div className="background-gradient">
        <div className="fog-balloon"></div>
      </div>
      <main className="main-content" role="main">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="main-title" id="main-title">You can be great.</h1>
          <p className="main-subtitle">For your development</p>
        </div>
      </main>
    </div>
  );
}







