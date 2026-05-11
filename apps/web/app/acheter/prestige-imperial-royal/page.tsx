"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AcheterRoyalPage() {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

 const handleOrder = () => {
  const existingSelection = localStorage.getItem("cbn-private-selection");

  const parsedSelection = existingSelection
    ? JSON.parse(existingSelection)
    : [];

  const newItem = {
    id: "prestige-imperial-royal",
    name: "Prestige Imperial Royal",
    age: "11 ans",
    price: 120000,
    quantity,
  };

  const existingItemIndex = parsedSelection.findIndex(
    (item: {
      id: string;
      name: string;
      age: string;
      price: number;
      quantity: number;
    }) => item.id === newItem.id
  );

  if (existingItemIndex >= 0) {
    parsedSelection[existingItemIndex].quantity += quantity;
  } else {
    parsedSelection.push(newItem);
  }

  localStorage.setItem(
    "cbn-private-selection",
    JSON.stringify(parsedSelection)
  );

  setAdded(true);
};

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-black">
      
      {/* HEADER */}
      <div className="flex justify-between items-center px-8 pt-8">
        <Link href="/" className="text-[11px] tracking-[0.25em] uppercase">
          MENU
        </Link>

        <Link href="/cuvees/prestige-imperial-royal" className="text-[11px] tracking-[0.25em] uppercase underline">
          RETOUR
        </Link>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-20 px-8 pt-20 pb-32">

        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <div className="relative w-[320px] h-[420px]">
            <Image
              src="/images/royal/royal-slide-1.png"
              alt="Prestige Imperial Royal"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* INFOS */}
        <div className="max-w-[420px]">

          <h1 className="text-[18px] uppercase tracking-[0.08em] leading-[1.6] mb-12">
            Prestige Imperial Royal — 11 ans
          </h1>

          {/* PRICE */}
          <p className="text-[16px] mb-10">
            120 000 FCFA
          </p>

          {/* QUANTITY */}
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-3 text-black/60">
              Quantité
            </p>

            <div className="flex items-center border border-black/10 w-[140px] h-[50px] justify-between px-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleOrder}
            className="w-full h-[52px] bg-black text-white uppercase tracking-[0.2em] text-[11px] mb-6"
          >
            COMMANDER
          </button>

          {/* CONFIRMATION */}
{added && (
  <div className="mb-2 border border-black/8 bg-black/[0.02] px-5 py-4">
    <p className="text-[12px] text-black/72">
      Votre sélection a été ajoutée.
    </p>

    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <Link
        href="/#collections"
        className="text-[11px] uppercase tracking-[0.18em] text-black/78 underline decoration-[0.7px] underline-offset-[4px] transition-opacity duration-300 hover:opacity-55"
      >
        Continuer la sélection
      </Link>

      <Link
        href="/finaliser-la-commande"
        className="text-[11px] uppercase tracking-[0.18em] text-black/78 underline decoration-[0.7px] underline-offset-[4px] transition-opacity duration-300 hover:opacity-55"
      >
        Finaliser la commande
      </Link>
    </div>
  </div>
)}

          {/* DESCRIPTION */}
          <div className="mt-14">
            <h2 className="text-[12px] uppercase tracking-[0.15em] mb-6">
              Détails
            </h2>

            <p className="text-[14px] leading-[1.9] text-black/80">
              Cuvée de prestige vieillie pendant 11 ans. Une expression rare du
              champagne, destinée aux moments les plus exclusifs.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}