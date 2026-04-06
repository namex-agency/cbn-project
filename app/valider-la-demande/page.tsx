"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function ValiderLaDemandePage() {
  const [items, setItems] = useState<SelectionItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Yaoundé");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [note, setNote] = useState("");

  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [requestSent, setRequestSent] = useState(false);

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

  const canContinueToPayment =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    city.trim() !== "" &&
    deliveryAddress.trim() !== "";

  const handleContinueToPayment = () => {
    if (!canContinueToPayment) return;
    setShowPaymentForm(true);
    setRequestSent(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      customer: {
        fullName,
        email,
        phone,
        city,
        deliveryAddress,
        note,
      },
      payment: {
        cardholderName,
        cardNumber,
        expiryDate,
        cvv,
      },
      items,
      totalAmount,
      totalBottles,
      submittedAt: new Date().toISOString(),
      paymentMode: "online",
      delivery: {
        zone: "Cameroun",
        yaoundeDeliveryFree: city.trim().toLowerCase() === "yaounde" || city.trim().toLowerCase() === "yaoundé",
      },
    };

    localStorage.setItem("cbn-final-order-request", JSON.stringify(payload));
    setRequestSent(true);
  };

  return (
    <main className="min-h-screen bg-[#f2f0ea] text-[#111111]">
      <div className="mx-auto min-h-screen w-full max-w-[1600px] px-6 pb-24 pt-8 sm:px-10 lg:px-14 lg:pb-32 lg:pt-9 xl:px-16">
        <header className="relative mb-14 flex items-start justify-between gap-6 lg:mb-20">
          <Link
            href="/menu"
            className="text-[11px] uppercase tracking-[0.28em] text-black/82 transition-opacity duration-300 hover:opacity-55"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Menu
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 top-0 -translate-x-1/2 transition-opacity duration-300 hover:opacity-75"
            aria-label="Accueil Champagne Bernard Njandja"
          >
            <div className="relative h-[40px] w-[220px] sm:h-[44px] sm:w-[250px]">
              <Image
                src="/images/brand/champagne-bernard-njandja-logo.svg"
                alt="Champagne Bernard Njandja"
                fill
                priority
                sizes="250px"
                className="object-contain"
              />
            </div>
          </Link>

          <Link
            href="/finaliser-la-commande"
            className="text-[11px] uppercase tracking-[0.22em] text-black/82 underline decoration-[0.7px] underline-offset-[5px] transition-opacity duration-300 hover:opacity-55"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Retour
          </Link>
        </header>

        {!isLoaded ? (
          <div className="flex min-h-[60vh] items-center justify-center">
            <p
              className="text-[12px] uppercase tracking-[0.24em] text-black/44"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Chargement de votre commande…
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="flex min-h-[60vh] items-center">
            <div className="w-full max-w-[760px] border border-black/[0.07] bg-white/[0.42] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
              <p
                className="text-[12px] uppercase tracking-[0.18em] text-black/55"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Aucune sélection disponible
              </p>

              <p
                className="mt-5 max-w-[48ch] text-[15px] leading-[2] text-black/72"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Votre sélection privée est actuellement vide. Retournez à la
                collection pour choisir votre cuvée avant de procéder au
                règlement.
              </p>

              <div className="mt-8">
                <Link
                  href="/#collections"
                  className="inline-flex h-[54px] items-center justify-center bg-black px-7 text-[11px] uppercase tracking-[0.19em] text-white transition-colors duration-300 hover:bg-[#1a1a1a]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Continuer la sélection
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <section className="mb-14 max-w-[980px] lg:mb-16">
              <p
                className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#8d7a3e]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Paiement sécurisé
              </p>

              <h1
                className="text-[28px] font-normal uppercase leading-[1.38] tracking-[0.075em] text-[#111112] sm:text-[34px] lg:text-[44px] xl:text-[50px]"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Finaliser votre commande privée
              </h1>
            </section>

            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-20">
              <section>
                <div className="border-b border-black/[0.07] pb-4">
                  <div className="grid grid-cols-[minmax(0,1fr)_120px_160px] gap-4">
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
                    <article key={item.id} className="py-8">
                      <div className="grid items-start gap-6 lg:grid-cols-[minmax(420px,1fr)_120px_160px]">
                        <div className="flex items-start gap-5">
                          <div className="relative h-[108px] w-[86px] shrink-0 overflow-hidden border border-[#b79b47]/20 bg-[linear-gradient(180deg,rgba(210,186,115,0.12),rgba(255,255,255,0.5))]">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span
                                className="text-[9px] uppercase tracking-[0.2em] text-[#b79b47]/75"
                                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                              >
                                Royal
                              </span>
                            </div>
                          </div>

                          <div className="min-w-0">
                            <h2
                              className="text-[22px] font-normal uppercase tracking-[0.06em] text-[#111112]"
                              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                            >
                              {item.name}
                            </h2>

                            <p
                              className="mt-3 text-[12px] uppercase tracking-[0.18em] text-[#8d7a3e]"
                              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                            >
                              {item.age}
                            </p>

                            <p
                              className="mt-5 max-w-[44ch] text-[13px] leading-[2] text-black/62"
                              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                            >
                              Commande privée avec règlement en ligne sécurisé,
                              traitement prioritaire et livraison offerte à
                              Yaoundé.
                            </p>
                          </div>
                        </div>

                        <div className="pt-[10px]">
                          <p
                            className="text-[18px] text-[#111112]"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          >
                            {item.quantity}
                          </p>
                        </div>

                        <div className="pt-[10px]">
                          <p
                            className="text-[18px] text-[#111112]"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          >
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-12 border border-[#b79b47]/14 bg-[linear-gradient(135deg,rgba(193,165,79,0.08),rgba(255,255,255,0.4))] px-6 py-6 sm:px-8">
                  <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.28em] text-[#8d7a3e]"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Total de la commande
                      </p>

                      <p
                        className="mt-4 text-[28px] font-normal tracking-[0.02em] text-[#111112]"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {formatPrice(totalAmount)}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p
                        className="text-[10px] uppercase tracking-[0.28em] text-[#8d7a3e]"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Nombre de bouteilles
                      </p>

                      <p
                        className="mt-4 text-[28px] font-normal tracking-[0.02em] text-[#111112]"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        {totalBottles}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-6 max-w-[56ch] text-[13px] leading-[1.95] text-black/62"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Paiement en ligne uniquement. Livraison offerte à Yaoundé.
                    Pour toute demande spéciale de livraison au Cameroun, écrivez
                    à <span className="text-black">contact@champagnebernardnjandja.com</span>.
                  </p>
                </div>
              </section>

              <aside className="h-fit border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(195,168,84,0.12),rgba(255,255,255,0.62)_20%,rgba(255,255,255,0.58)_100%)] p-6 shadow-[0_20px_70px_rgba(117,95,37,0.08)] sm:p-8 lg:p-10">
                <p
                  className="text-[10px] uppercase tracking-[0.3em] text-[#8d7a3e]"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  Validation et règlement
                </p>

                <div className="mt-8 border border-[#b79b47]/14 bg-white/55 p-5">
                  <p
                    className="text-[10px] uppercase tracking-[0.26em] text-[#8d7a3e]"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    Résumé sécurisé
                  </p>

                  <div className="mt-5 space-y-4">
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

                    <div className="flex items-center justify-between gap-4 border-b border-black/[0.06] pb-4">
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

                    <p
                      className="text-[12px] leading-[1.9] text-black/62"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      Livraison offerte à Yaoundé pour toute commande réglée en
                      ligne. Traitement prioritaire de votre demande.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  {!showPaymentForm ? (
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Nom complet
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(event) => setFullName(event.target.value)}
                          className="h-[54px] w-full border border-black/[0.08] bg-white/30 px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          E-mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="h-[54px] w-full border border-black/[0.08] bg-white/30 px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Téléphone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="h-[54px] w-full border border-black/[0.08] bg-white/30 px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Ville
                        </label>
                        <input
                          id="city"
                          type="text"
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          className="h-[54px] w-full border border-black/[0.08] bg-white/30 px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="deliveryAddress"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Adresse de livraison
                        </label>
                        <textarea
                          id="deliveryAddress"
                          rows={4}
                          value={deliveryAddress}
                          onChange={(event) =>
                            setDeliveryAddress(event.target.value)
                          }
                          className="w-full resize-none border border-black/[0.08] bg-white/30 px-4 py-4 text-[14px] leading-[1.8] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="note"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Note complémentaire
                        </label>
                        <textarea
                          id="note"
                          rows={4}
                          value={note}
                          onChange={(event) => setNote(event.target.value)}
                          className="w-full resize-none border border-black/[0.08] bg-white/30 px-4 py-4 text-[14px] leading-[1.8] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={handleContinueToPayment}
                        disabled={!canContinueToPayment}
                        className={`mt-2 inline-flex h-[56px] w-full items-center justify-center px-6 text-[11px] uppercase tracking-[0.22em] text-white transition-all duration-300 ${
                          canContinueToPayment
                            ? "bg-[#111111] hover:bg-black"
                            : "cursor-not-allowed bg-black/30"
                        }`}
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Continuer vers le paiement sécurisé
                      </button>

                      <p
                        className="text-[12px] leading-[1.9] text-black/58"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Renseignez d’abord vos informations personnelles et de
                        livraison. Le formulaire de paiement premium apparaîtra
                        immédiatement après.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(201,173,88,0.18),rgba(255,255,255,0.5))] p-5">
                        <p
                          className="text-[10px] uppercase tracking-[0.28em] text-[#8d7a3e]"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Paiement gold sécurisé
                        </p>

                        <p
                          className="mt-3 text-[13px] leading-[1.9] text-black/64"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Votre commande entre maintenant dans l’étape de
                          règlement premium, avec livraison offerte à Yaoundé.
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="cardholderName"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Nom sur la carte
                        </label>
                        <input
                          id="cardholderName"
                          type="text"
                          value={cardholderName}
                          onChange={(event) =>
                            setCardholderName(event.target.value)
                          }
                          className="h-[56px] w-full border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(211,186,113,0.08),rgba(255,255,255,0.42))] px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cardNumber"
                          className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        >
                          Numéro de carte
                        </label>
                        <input
                          id="cardNumber"
                          type="text"
                          value={cardNumber}
                          onChange={(event) => setCardNumber(event.target.value)}
                          className="h-[56px] w-full border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(211,186,113,0.08),rgba(255,255,255,0.42))] px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="expiryDate"
                            className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          >
                            Expiration
                          </label>
                          <input
                            id="expiryDate"
                            type="text"
                            placeholder="MM/AA"
                            value={expiryDate}
                            onChange={(event) =>
                              setExpiryDate(event.target.value)
                            }
                            className="h-[56px] w-full border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(211,186,113,0.08),rgba(255,255,255,0.42))] px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="cvv"
                            className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-black/42"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          >
                            CVV
                          </label>
                          <input
                            id="cvv"
                            type="password"
                            value={cvv}
                            onChange={(event) => setCvv(event.target.value)}
                            className="h-[56px] w-full border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(211,186,113,0.08),rgba(255,255,255,0.42))] px-4 text-[14px] text-[#111112] outline-none transition-colors duration-300 focus:border-[#b79b47]/45"
                            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-2 inline-flex h-[58px] w-full items-center justify-center bg-[linear-gradient(90deg,#8b6b1f,#c8a953,#8b6b1f)] px-6 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_16px_40px_rgba(122,94,23,0.18)] transition-opacity duration-300 hover:opacity-92"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Payer et confirmer la commande
                      </button>

                      <div className="space-y-4">
  
<div className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:flex-nowrap">
  <div className="relative h-[18px] w-[56px] shrink-0">
    <Image
      src="/images/payments/visa.svg"
      alt="Visa"
      fill
      sizes="56px"
      className="object-contain object-left"
    />
  </div>

  <div className="relative h-[20px] w-[84px] shrink-0">
    <Image
      src="/images/payments/mastercard.svg"
      alt="Mastercard"
      fill
      sizes="84px"
      className="object-contain object-left"
    />
  </div>

  <div className="relative h-[20px] w-[78px] shrink-0">
    <Image
      src="/images/payments/apple-pay.svg"
      alt="Apple Pay"
      fill
      sizes="78px"
      className="object-contain object-left"
    />
  </div>

  <div className="relative h-[20px] w-[72px] shrink-0">
    <Image
      src="/images/payments/paypal.svg"
      alt="PayPal"
      fill
      sizes="72px"
      className="object-contain object-left"
    />
  </div>
</div>

  <p
    className="text-[12px] leading-[1.9] text-black/58"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
  >
    Paiement en ligne sécurisé via une infrastructure premium compatible
    avec Stripe. Livraison offerte à Yaoundé pour toute commande réglée
    en ligne.
  </p>

  <p
    className="text-[12px] leading-[1.9] text-black/52"
    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
  >
    Livraison disponible au Cameroun. Pour toute demande particulière,
    écrivez à <span className="text-black">contact@champagnebernardnjandja.com</span>.
  </p>
</div>
                    </div>
                  )}

                  {requestSent && (
                    <div className="mt-6 border border-[#b79b47]/18 bg-[linear-gradient(180deg,rgba(211,186,113,0.08),rgba(255,255,255,0.5))] px-5 py-4">
                      <p
                        className="text-[12px] leading-[1.9] text-black/72"
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        Votre commande premium a été préparée avec succès. La
                        prochaine étape pourra intégrer la validation finale du
                        paiement sécurisé et la confirmation logistique de votre
                        livraison.
                      </p>
                    </div>
                  )}
                </form>
              </aside>
            </div>
          </>
        )}
      </div>
    </main>
  );
}