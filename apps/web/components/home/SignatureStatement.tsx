"use client";

import { Great_Vibes } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const REVEAL_INTERVAL = 24000;
const GLOW_DURATION = 2600;

export default function SignatureStatement() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasStartedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const glowTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [glowActive, setGlowActive] = useState(false);

  useEffect(() => {
    const runReveal = () => {
      setIsVisible(false);
      setGlowActive(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
          setGlowActive(true);

          if (glowTimeoutRef.current) {
            clearTimeout(glowTimeoutRef.current);
          }

          glowTimeoutRef.current = setTimeout(() => {
            setGlowActive(false);
          }, GLOW_DURATION);
        });
      });
    };

    const startSequence = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      runReveal();

      intervalRef.current = setInterval(() => {
        runReveal();
      }, REVEAL_INTERVAL);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          startSequence();
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (glowTimeoutRef.current) {
        clearTimeout(glowTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="For the Love of Champagne"
      className="relative overflow-hidden bg-[#efede8] text-black"
    >
      {/* Halo premium très subtil */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          glowActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.52)_0%,_rgba(255,255,255,0.16)_28%,_rgba(255,255,255,0)_62%)]" />
      </div>

      <div className="mx-auto max-w-[1720px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28 xl:px-16 xl:py-32">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[1180px] text-center">
            <p
              className={`${greatVibes.className} text-[#151515] antialiased text-[44px] leading-[1.04] tracking-[0.005em] sm:text-[60px] md:text-[84px] lg:text-[108px] xl:text-[128px]`}
            >
              <span
                className={`block transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-4 opacity-0 blur-[8px]"
                }`}
              >
                For the love
              </span>

              <span
                className={`mt-2 block transition-all duration-[2200ms] delay-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-3 md:mt-4 ${
                  isVisible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-5 opacity-0 blur-[10px]"
                }`}
              >
                of Champagne
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}