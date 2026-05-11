"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type SelectionItem = {
  id: string;
  name: string;
  age: string;
  price: number;
  quantity: number;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value) + " FCFA";
}

export default function FinaliserCommandePage() {
  const [items, setItems] = useState<SelectionItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedSelection = localStorage.getItem("cbn-private-selection");

    if (!storedSelection) {
      setItems([]);
      setIsLoaded(true);
      return;
    }

    try {
      const parsedSelection = JSON.parse(storedSelection) as SelectionItem[];
      setItems(parsedSelection);
    } catch {
      setItems([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const totalAmount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const totalBottles = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const updateQuantity = (id: string, nextQuantity: number) => {
    if (nextQuantity < 1) return;

    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: nextQuantity } : item
    );

    setItems(updatedItems);
    localStorage.setItem("cbn-private-selection", JSON.stringify(updatedItems));
  };

  const removeItem = (id: string) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("cbn-private-selection", JSON.stringify(updatedItems));
  };

  const clearSelection = () => {
    setItems([]);
    localStorage.removeItem("cbn-private-selection");
  };

  return (
    <main className="min-h-screen bg-[#f4f4f1] text-[#101010]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] flex-col px-6 pb-32 pt-8 sm:px-10 lg:px-14 lg:pb-40 lg:pt-9 xl:px-16">
        {/* HEADER */}
        <header className="mb-14 flex items-start justify-between gap-6 lg:mb-20">
          <Link
            href="/menu"
            className="text-[11px] uppercase tracking-[0.28em] text-black/78 transition-opacity duration-300 hover:opacity-55"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Menu
          </Link>

          <Link
  href="/"
  className="absolute left-1/2 top-0 -translate-x-1/2 transition-opacity duration-300 hover:opacity-75"
  aria-label="Accueil Champagne Bernard Njandja"
>
  <div className="relative h-[32px] w-[200px] sm:h-[34px] sm:w-[220px]">
    <Image
      src="/images/brand/champagne-bernard-njandja-logo.svg"
      alt="Champagne Bernard Njandja"
      fill
      className="object-contain"
      sizes="220px"
      priority
    />
  </div>
</Link>

          <Link
            href="/#collections"
            className="text-[11px] uppercase tracking-[0.22em] text-black/82 underline decoration-[0.7px] underline-offset-[5px] transition-opacity duration-300 hover:opacity-55"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Retour
          </Link>
        </header>

        {/* TITLE */}
        <div className="mb-12 max-w-[760px] lg:mb-16">
          <h1
            className="text-[24px] font-normal uppercase leading-[1.5] tracking-[0.07em] text-[#111112] sm:text-[28px] lg:text-[31px]"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Finaliser la commande
          </h1>

          <p
            className="mt-5 max-w-[58ch] text-[15px] leading-[2.05] text-black/70"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Retrouvez ici votre sélection de cuvées. Ajustez les quantités avec
            précision, poursuivez votre découverte ou validez votre demande de
            commande dans un parcours sobre, fluide et confidentiel.
          </p>
        </div>

        {!isLoaded ? (
          <div className="flex flex-1 items-center justify-center py-24">
            <p
              className="text-[12px] uppercase tracking-[0.24em] text-black/44"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Chargement de votre sélection…
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 items-center">
            <div className="w-full border border-black/[0.06] bg-white/[0.32] px-6 py-10 sm:px-8 lg:max-w-[760px] lg:px-10 lg:py-12">
              <p
                className="text-[12px] uppercase tracking-[0.18em] text-black/55"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Aucune cuvée sélectionnée
              </p>

              <p
                className="mt-5 max-w-[48ch] text-[15px] leading-[2] text-black/72"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Votre sélection privée est vide pour le moment. Vous pouvez
                retourner à la collection et composer votre commande en toute
                liberté.
              </p>

              <div className="mt-8">
                <Link
                  href="/#collections"
                  className="inline-flex h-[52px] items-center justify-center bg-black px-7 text-[11px] uppercase tracking-[0.19em] text-white transition-colors duration-300 hover:bg-[#1a1a1a]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Continuer la sélection
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            {/* LEFT COLUMN */}
            <section>
              <div className="border-b border-black/[0.07] pb-4">
                <div className="grid grid-cols-[minmax(0,1fr)_120px_120px] gap-4">
                  <p
                    className="text-[10px] uppercase tracking-[0.28em] text-black/42"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Cuvée
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.28em] text-black/42"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Quantité
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.28em] text-black/42"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Montant
                  </p>
                </div>
              </div>

              <div className="divide-y divide-black/[0.06]">
                {items.map((item) => (
                  <article key={item.id} className="py-7">
                    <div className="grid items-start gap-6 lg:grid-cols-[minmax(420px,1fr)_120px_140px]">
                      <div className="flex items-start gap-5">
  <div className="relative h-[96px] w-[78px] shrink-0 overflow-hidden border border-black/[0.06] bg-white/[0.45]">
    <div className="absolute inset-0 flex items-center justify-center">
      <span
        className="text-[9px] uppercase tracking-[0.18em] text-black/26"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        Royal
      </span>
    </div>
  </div>

  <div className="min-w-0">
    <h2
      className="text-[18px] font-normal uppercase tracking-[0.06em] text-[#111112]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {item.name}
    </h2>

    <p
      className="mt-3 text-[12px] uppercase tracking-[0.16em] text-black/52"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {item.age}
    </p>

    <button
      type="button"
      onClick={() => removeItem(item.id)}
      className="mt-5 text-[11px] uppercase tracking-[0.18em] text-black/68 underline decoration-[0.7px] underline-offset-[4px] transition-opacity duration-300 hover:opacity-55"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      Retirer
    </button>
  </div>
</div>

                      <div>
                        <div className="flex h-[50px] w-[116px] items-center justify-between border border-black/[0.1] px-4">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-[24px] leading-none text-black/78 transition-opacity duration-300 hover:opacity-55"
                            aria-label={`Diminuer la quantité de ${item.name}`}
                          >
                            −
                          </button>

                          <span
                            className="text-[16px] text-[#111112]"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          >
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-[22px] leading-none text-black/78 transition-opacity duration-300 hover:opacity-55"
                            aria-label={`Augmenter la quantité de ${item.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="pt-[10px]">
                        <p
                          className="text-[16px] text-[#111112]"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/#collections"
                  className="text-[11px] uppercase tracking-[0.18em] text-black/78 underline decoration-[0.7px] underline-offset-[4px] transition-opacity duration-300 hover:opacity-55"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Continuer la sélection
                </Link>

                <button
                  type="button"
                  onClick={clearSelection}
                  className="text-left text-[11px] uppercase tracking-[0.18em] text-black/52 underline decoration-[0.7px] underline-offset-[4px] transition-opacity duration-300 hover:opacity-55 sm:text-right"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Vider la sélection
                </button>
              </div>
            </section>

            {/* RIGHT COLUMN */}
            <aside className="h-fit border border-black/[0.06] bg-white/[0.34] p-6 sm:p-8">
              <p
                className="text-[10px] uppercase tracking-[0.28em] text-black/42"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Résumé
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-[13px] text-black/68"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Nombre de bouteilles
                  </span>
                  <span
                    className="text-[14px] text-[#111112]"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {totalBottles}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-5">
                  <span
                    className="text-[13px] text-black/68"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Total estimatif
                  </span>
                  <span
                    className="text-[16px] text-[#111112]"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              <div className="mt-8">
  <Link
    href="/valider-la-demande"
    className="inline-flex h-[54px] w-full items-center justify-center bg-black px-6 text-[11px] uppercase tracking-[0.19em] text-white transition-colors duration-300 hover:bg-[#171717]"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
  >
    Valider ma demande
  </Link>
</div>
              <p
                className="mt-6 text-[12px] leading-[1.9] text-black/58"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Votre demande sera ensuite confirmée dans un parcours éditorial,
                confidentiel et cohérent avec l’univers de la Maison.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}