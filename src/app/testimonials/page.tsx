"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestimonialsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/technologies");
  }, [router]);

  return null;
}
