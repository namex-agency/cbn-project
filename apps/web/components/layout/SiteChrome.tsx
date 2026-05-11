"use client";

import { usePathname } from "next/navigation";
import PersistentNewsletterCta from "@/components/home/PersistentNewsletterCta";
import StickyCuveesBar from "@/components/layout/StickyCuveesBar";

export default function SiteChrome() {
  const pathname = usePathname();

  const isEntryPage = pathname === "/entry";

  if (isEntryPage) {
    return null;
  }

  return (
    <>
      <StickyCuveesBar />
      <PersistentNewsletterCta />
    </>
  );
}