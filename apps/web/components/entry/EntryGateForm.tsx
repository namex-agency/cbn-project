"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EntryGateForm() {
  const router = useRouter();

  const [yearDigits, setYearDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleDigitChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const nextDigits = [...yearDigits];
    nextDigits[index] = value;
    setYearDigits(nextDigits);
    setError("");

    if (value && index < 3) {
      const nextInput = document.getElementById(`entry-year-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !yearDigits[index] && index > 0) {
      const prevInput = document.getElementById(`entry-year-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();

    const pastedText = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);

    if (!pastedText) return;

    const nextDigits = ["", "", "", ""];
    pastedText.split("").forEach((char, index) => {
      if (index < 4) {
        nextDigits[index] = char;
      }
    });

    setYearDigits(nextDigits);
    setError("");

    const nextIndex = Math.min(pastedText.length, 3);
    const nextInput = document.getElementById(`entry-year-${nextIndex}`);
    nextInput?.focus();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const yearString = yearDigits.join("");

    if (yearString.length !== 4) {
      setError("Veuillez renseigner votre année de naissance complète.");
      return;
    }

    const birthYear = Number(yearString);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (birthYear < 1900 || birthYear > currentYear) {
      setError("Veuillez entrer une année valide.");
      return;
    }

    if (age < 21) {
      setError("L’accès au site est réservé aux personnes âgées de 21 ans ou plus.");
      return;
    }
    localStorage.setItem("cbn-age-validated", "true");
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[660px] flex-col items-center"
    >
      <div
        onPaste={handlePaste}
        className="flex h-[132px] w-full max-w-[660px] overflow-hidden border border-white/18 bg-black/12 backdrop-blur-[2px] sm:h-[160px]"
      >
        {yearDigits.map((digit, index) => (
          <div
            key={index}
            className="relative flex flex-1 items-center justify-center border-r border-white/14 last:border-r-0"
          >
            {!digit && (
              <span className="pointer-events-none absolute text-[72px] font-light uppercase leading-none text-white/18 sm:text-[108px]">
                Y
              </span>
            )}

            <input
              id={`entry-year-${index}`}
              type="text"
              inputMode="numeric"
              autoComplete="bday-year"
              maxLength={1}
              value={digit}
              onChange={(event) => handleDigitChange(event.target.value, index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="relative z-10 h-full w-full bg-transparent text-center text-[44px] font-light text-white outline-none sm:text-[62px]"
              aria-label={`Chiffre ${index + 1} de l’année de naissance`}
            />
          </div>
        ))}
      </div>

      {error ? (
        <p className="mt-4 text-center text-[12px] uppercase tracking-[0.05em] text-[#d7b36a] sm:text-[13px]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-10 inline-flex min-h-[54px] min-w-[254px] items-center justify-center border border-white/22 bg-black/24 px-8 text-[14px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white/40 hover:bg-black/34"
      >
        Accéder au site
      </button>
    </form>
  );
}