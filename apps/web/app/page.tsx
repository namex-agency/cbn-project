"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomePageContent from "@/components/home/HomePageContent";

export default function Home() {
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const access = localStorage.getItem("cbn-age-validated");

    if (access === "true") {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
      router.replace("/entry");
    }
  }, [router]);

  if (isAllowed === null) {
    return null; // évite flash
  }

  if (!isAllowed) {
    return null;
  }

  return <HomePageContent />;
}