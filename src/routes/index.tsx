import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ClipboardCheck,
  Radar,
  Wrench,
  ShoppingBag,
  Sun,
  Zap,
  ShieldCheck,
  Thermometer,
  Gauge,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/mlm-logo.svg";
import heroImage from "@/assets/hero-elektro.jpg";

import excavator from "@/assets/excavator.webp";
import skidSteer from "@/assets/skid_steer.webp";
import boomLift from "@/assets/boom_lift.webp";
import generator from "@/assets/generator.webp";
import drillPhoto from "@/assets/drill.webp";
import makitaPhoto from "@/assets/makita.webp";
import knipexPhoto from "@/assets/knipex_tools.webp";
import distributionBoxPhoto from "@/assets/rozvadzac.webp";
import materialPhoto from "@/assets/material.webp";
import bleskozvodPhoto from "@/assets/bleskozvod.webp";


const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "ELEKTRO - MLM, s.r.o.",
  url: "https://www.elektro-mlm.sk",
  telephone: "+421918812027",
  email: "info@elektro-mlm.sk",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stavbárov 12",
    postalCode: "971 01",
    addressLocality: "Prievidza",
    addressCountry: "SK",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
  areaServed: "Prievidza",
  hasCredential: "ISO 9001:2008",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELEKTRO-MLM Prievidza | Revízie, elektroinštalácie, prenájom techniky" },
      {
        name: "description",
        content:
          "Revízie a merania do 52 kV, elektroinštalácie a fotovoltika, predaj elektromateriálu a prenájom bágrov, UNC nakladačov, plošín a elektrocentrál. Prievidza od roku 2007.",
      },
      { property: "og:title", content: "ELEKTRO-MLM Prievidza — napätie, ktoré nesklame" },
      {
        property: "og:description",
        content:
          "Revízne správy podľa STN, lokalizácia porúch, montáže a fotovoltika. Prenájom bágrov, UNC, plošín a elektrocentrál.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: logo },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.elektro-mlm.sk/" }],
  }),
  component: Index,
});

const nav = [
  { href: "#revizie", label: "Revízie" },
  { href: "#sluzby", label: "Služby" },
  { href: "#predaj", label: "Predaj" },
  { href: "#prenajom", label: "Prenájom" },
  { href: "#montaze", label: "Montáže" },
  { href: "#kontakt", label: "Kontakt" },
];

const montaze = [
  "Elektroinštalácie silnoprúdu",
  "Slaboprúdové rozvody",
  "Prípojky NN (nízke napätie)",
  "Bleskozvody a uzemnenie",
  "Vnútorné a vonkajšie osvetlenie",
  "Elektrické vykurovanie",
  "Rozvádzače a ich osadenie",
  "Elektronické zabezpečovacie systémy",
  "Meranie a regulácia",
  "Údržba, servis a opravy",
  "Elektroprojekty a dokumentácia",
  "Poradenská a inžinierska činnosť",
];

const preco = [
  {
    title: "Od roku 2007 na trhu",
    text: "Domáca prievidzská firma — poznáte nás z predajní, z revízií aj z techniky na stavbách v celom regióne.",
  },
  {
    title: "Všetko na jednom mieste",
    text: "Projekt, montáž, revízna správa, materiál aj stroje. Nemusíte volať štyrom firmám — stačí jeden telefonát.",
  },
  {
    title: "Papiere, ktoré obstoja",
    text: "Revízne správy podľa platných STN, protokoly z termovízie a meraní — pripravené pre poisťovňu aj kolaudáciu.",
  },
  {
    title: "Rýchle termíny",
    text: "Havária alebo porucha? Ozvite sa — lokalizáciu poruchy riešime prednostne, technika ide na stavbu do 24 hodín.",
  },
];

const referencie = [
  { name: "Priemyselné haly a výrobné prevádzky", text: "NN rozvody, osvetlenie, bleskozvody a elektromontážne práce vrátane východiskových revízií." },
  { name: "Bytové domy a novostavby", text: "Kompletné elektroinštalácie, prípojky NN, rozvádzače a odovzdanie s revíznou správou." },
  { name: "Stavebné firmy a živnostníci", text: "Dlhodobý prenájom bágrov, UNC nakladačov, plošín a elektrocentrál vrátane dovozu na stavbu." },
];


const strip = [
  {
    icon: ClipboardCheck,
    label: "Revízie & merania",
    desc: "Revízne správy podľa STN 33 1500, termovízia, cos φ, kvalita siete — do 52 kV.",
  },
  {
    icon: Radar,
    label: "Lokalizácia porúch",
    desc: "Nájdeme skrat či prerušenie kábla na desiatky centimetrov. Kopete len tam, kde treba.",
  },
  {
    icon: Wrench,
    label: "Montáže & fotovoltika",
    desc: "Inštalácie bez obmedzenia napätia, rozvádzače, bleskozvody, FVE na kľúč.",
  },
  {
    icon: ShoppingBag,
    label: "Predaj & prenájom",
    desc: "Elektromateriál, svietidlá, MAKITA a KNIPEX. Bágre, UNC, plošiny, elektrocentrály.",
  },
];

const revizie = [
  {
    icon: ShieldCheck,
    title: "Odborné prehliadky a skúšky do 52 kV",
    desc: "Byty, haly, sklady, priestory s nebezpečenstvom výbuchu aj bleskozvody. Výsledkom je revízna správa podľa STN 33 1500 — bez nej zariadenie legálne neprevádzkujete.",
  },
  {
    icon: Thermometer,
    title: "Termovízne merania",
    desc: "Prehriaty spoj, preťažený istič či chybná izolácia sa odhalia skôr, než spôsobia požiar. Meriame počas plnej prevádzky, bez vypínania a prestojov.",
  },
  {
    icon: Gauge,
    title: "Účinník cos φ a kvalita siete",
    desc: "Platíte za jalový výkon? Zmeriame účinník, harmonické skreslenie a výkyvy napätia a navrhneme kompenzáciu — investícia sa zvyčajne vráti do 12 mesiacov.",
  },
];

const rentals = [
  {
    img: excavator,
    title: "Bágre",
    slogan: "Kopeme presne tam, kde treba",
    desc: "Výkopové a zemné práce pre prípojky, stavby aj terénne úpravy.",
  },
  {
    img: skidSteer,
    title: "UNC nakladače",
    slogan: "Sila do úzkych miest",
    desc: "Kompaktné šmykom riadené nakladače na presun materiálu a úpravy terénu.",
  },
  {
    img: boomLift,
    title: "Plošiny",
    slogan: "Bezpečne aj tam, kde rebrík nestačí",
    desc: "Vysokozdvižné plošiny na montáže, osvetlenie a prácu vo výškach.",
  },
  {
    img: generator,
    title: "Elektrocentrály",
    slogan: "Prúd aj tam, kde nie je zásuvka",
    desc: "Mobilné zdroje energie pre stavby, akcie a záložné napájanie prevádzok.",
  },
];

const sortiment = [
  {
    img: materialPhoto,
    title: "Elektroinštalačný materiál",
    tags: "Káble · Ističe · Zásuvky · Bleskozvody",
    desc: "Od vypínača a kábla cez ističe, DIN lišty a skrutky až po sadrokartónové príchytky a PU penu — nájdete u nás naozaj všetko, čo elektroinštalácia potrebuje.",
  },
  {
    img: drillPhoto,
    title: "Svietidlá a LED osvetlenie",
    tags: "Interiér · Exteriér · Priemysel",
    desc: "Máme celý rad svietidiel pre interiér aj exteriér a radi vám poradíme, aby ste si vybrali presne to, s čím budete spokojní.",
  },
  {
    img: makitaPhoto,
    title: "Náradie MAKITA",
    tags: "Akumulátorové · Sieťové · Príslušenstvo",
    desc: "Široký výber akumulátorového aj sieťového náradia MAKITA a príslušenstva pre profesionálov aj domácich majstrov.",
  },
  {
    img: knipexPhoto,
    title: "KNIPEX a profi náradie",
    tags: "Kvalita · Spoľahlivosť · Odolnosť",
    desc: "Kliešte, cvakačky, štiepačky a ďalšie profesionálne náradie KNIPEX — a omnoho viac.",
  },
  {
    img: distributionBoxPhoto,
    title: "Rozvádzače na mieru",
    tags: "Certifikácia · Výroba na mieru",
    desc: "Rozvádzače vyrábame s certifikáciou, na mieru podľa projektu aj podľa vašich vlastných požiadaviek.",
  },
  {
    img: bleskozvodPhoto,
    title: "Bleskozvodná technika",
    tags: "Materiál · Projekt · Revízia",
    desc: "Búrka sa nepýta. Poradíme, navrhneme aj namontujeme ochranu na mieru vašej strechy — od zvodov a svoriek až po uzemnenie a revíznu správu na konci.",
  },
];

const stats = [
  { num: "17+", label: "Rokov skúseností" },
  { num: "52 kV", label: "Revízie do napätia" },
  { num: "ISO", label: "Certifikát 9001" },
  { num: "2", label: "Predajne v Prievidzi" },
];

const OWNER_PHONE = "0918 812 027";

const shops = [
  {
    id: "01",
    name: "Predajňa Stavbárov",
    note: "Svietidlá & elektromateriál",
    address: "Stavbárov 12, 971 01 Prievidza",
    phones: [
      { label: "Predajňa svietidiel", num: "0948 344 377" },
      { label: "Predajňa elektromateriálu", num: "0948 344 378" },
    ],
  },
  {
    id: "02",
    name: "Predajňa Zápotôčky",
    note: "Maloobchodná predajňa, vedľa nadchodu",
    address: "L. N. Tolstého 1885/8, 971 01 Prievidza",
    phones: [{ label: "Predajňa", num: "0948 162 842" }],
  },
];



const ticker = [
  "Revízie do 52 kV",
  "Termovízia",
  "Lokalizácia porúch",
  "Fotovoltika na kľúč",
  "Bleskozvody",
  "Prenájom bágrov",
  "UNC nakladače",
  "Vysokozdvižné plošiny",
  "Elektrocentrály",
  "MAKITA · KNIPEX",
];

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [openSortiment, setOpenSortiment] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "Revízia / meranie",
    message: "",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="ELEKTRO-MLM Prievidza" width={160} height={120} className="h-11 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+421918812027"
              className="rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brand-dark"
            >
              0918 812 027
            </a>
          </nav>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em]"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="tel:+421918812027"
                className="mt-4 rounded-full bg-primary px-5 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                Zavolať 0918 812 027
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(color-mix(in_oklab,var(--foreground)_16%,transparent)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_70%_60%_at_75%_25%,#000,transparent_75%)]"
        />
        <div
          aria-hidden
          className="glow-blob pointer-events-none absolute -right-24 -top-10 h-[26rem] w-[26rem] rounded-full"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            <span className="text-primary">M</span>eranie · <span className="text-primary">L</span>okalizácia ·{" "}
            <span className="text-primary">M</span>ontáž
          </p>
          <h1 className="mt-7 max-w-[16ch] text-5xl uppercase italic leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Napätie, ktoré{" "}
            <span className="relative inline-block text-primary">
              nesklame
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[6px] w-full bg-primary/25 [clip-path:polygon(0_60%,100%_0,100%_100%,0%_100%)]"
              />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted-foreground">
            Revízie a merania do 52 kV, lokalizácia porúch bez zbytočných výkopov, elektroinštalácie a fotovoltika.
            K tomu predajne elektromateriálu a prenájom bágrov, UNC, plošín a elektrocentrál. Prievidza od roku 2007.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="btn-shine rounded-full bg-primary px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_14px_30px_-14px_color-mix(in_oklab,var(--brand-red)_80%,transparent)] transition-colors hover:bg-brand-dark"
            >
              Nezáväzná ponuka
            </a>
            <a
              href="#revizie"
              className="rounded-full border-2 border-foreground px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
            >
              Objednať revíziu →
            </a>
          </div>
            </div>
            <div className="frame-brand relative overflow-hidden shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--brand-red)_75%,transparent)]">
              <img
                src={heroImage}
                alt="Mini báger, rozvádzače a fotovoltické panely — ELEKTRO-MLM Prievidza"
                width={1600}
                height={1008}
                className="h-full w-full rounded-2xl object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-foreground/40 via-transparent to-primary/15"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                Revízie · Prenájom · Fotovoltika
              </div>
            </div>
          </div>
          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">

            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="card-lift h-full rounded-xl border border-border bg-secondary px-5 py-4">
                  <div className="font-mono text-2xl font-bold leading-none text-primary">{s.num}</div>
                  <div className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-border bg-foreground py-3.5 text-background">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {ticker.map((t) => (
                <span
                  key={`${k}-${t}`}
                  className="flex items-center gap-3 whitespace-nowrap px-6 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em]"
                >
                  <Zap className="h-3.5 w-3.5 text-primary" fill="currentColor" strokeWidth={0} />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* STRIP */}
      <div id="sluzby" className="grid border-b border-border bg-secondary sm:grid-cols-2 lg:grid-cols-4">
        {strip.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.label} delay={i * 90} className="group border-b border-r border-border last:border-r-0">
              <div className="relative h-full overflow-hidden border-t-[3px] border-t-transparent bg-secondary p-8 transition-colors duration-300 group-hover:border-t-primary group-hover:bg-card">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_10px_22px_-12px_color-mix(in_oklab,var(--brand-red)_90%,transparent)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </div>
                <h3 className="relative mt-4 text-xl uppercase">{s.label}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* REVÍZIE */}
      <section id="revizie" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Robíme revízie — profesionálne
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
            Revízna správa, ktorá obstojí <span className="text-primary">pri kontrole aj pri poistke</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {revizie.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 110} className="h-full">
                <article className="card-lift frame-brand h-full p-7">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/25">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-2xl uppercase leading-tight">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-border bg-secondary px-7 py-5">
            {["Revízie bytov a domov", "Priemysel a haly", "Bleskozvody", "FVE a nabíjacie stanice", "Periodické revízie"].map(
              (t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {t}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </section>


      {/* PREDAJ */}
      <section id="predaj" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Predaj
          </p>
          <h2 className="mt-3 text-4xl uppercase italic leading-[1] md:text-5xl">
            Všetko pre elektrinu <span className="text-primary">pod jednou strechou</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortiment.map((c, i) => {
            const isOpen = openSortiment === i;
            return (
              <Reveal key={c.title} delay={i * 90} className="h-full">
                <article className="card-lift h-full overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpenSortiment(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full flex-col text-left"
                  >
                    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-secondary p-5">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-6 bottom-2 h-14 rounded-[50%] bg-primary/10 blur-xl transition-opacity duration-500 group-hover:bg-primary/25"
                      />
                      <img
                        src={c.img}
                        alt={c.title}
                        loading="lazy"
                        width={800}
                        height={800}
                        className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 [filter:drop-shadow(0_8px_10px_color-mix(in_oklab,var(--foreground)_18%,transparent))]"
                      />
                      <span className="absolute bottom-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-md bg-background/80 shadow-sm backdrop-blur-sm">
                        <Zap className="h-3.5 w-3.5 fill-primary text-primary" strokeWidth={2.4} />
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl uppercase leading-tight">{c.title}</h3>
                        <span
                          aria-hidden
                          className={`mt-1 shrink-0 font-mono text-lg text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>
                      <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                        {c.tags}
                      </p>
                      <p
                        className={`grid text-sm text-muted-foreground transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <span className="overflow-hidden">{c.desc}</span>
                      </p>
                    </div>
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={100}>
          <div className="relative mt-6 flex flex-col gap-5 overflow-hidden rounded-2xl border-2 border-primary bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
            <span
              aria-hidden
              className="glow-blob pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50"
            />
            <div className="relative flex items-start gap-4">
              <Sun className="h-10 w-10 shrink-0 text-primary" strokeWidth={1.9} />
              <div>
                <h3 className="text-2xl uppercase leading-tight">Fotovoltika na kľúč</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Návrh, montáž, revízna správa aj papierovačky so ZSD — slnko, ktoré sa vám vráti.
                </p>
              </div>
            </div>
            <a
              href="#kontakt"
              className="btn-shine relative shrink-0 rounded-full bg-primary px-6 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-brand-dark"
            >
              Dopyt na FVE
            </a>
          </div>
        </Reveal>
      </section>

      {/* PRENÁJOM */}
      <section id="prenajom" className="relative overflow-hidden border-y border-border bg-secondary py-20 md:py-24">
        <div
          aria-hidden
          className="glow-blob pointer-events-none absolute -left-32 top-1/3 h-[22rem] w-[22rem] rounded-full opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Prenájom mechanizácie
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
              Bágre · UNC · Plošiny · <span className="text-primary">Elektrocentrály</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Požičiame na deň aj na celú stavbu. Stroje sú pripravené v Prievidzi — stačí zavolať.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rentals.map((r, i) => (
              <Reveal key={r.title} delay={i * 90} className="h-full">
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden p-4">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-8 bottom-4 h-24 rounded-[50%] bg-primary/10 blur-xl transition-opacity duration-500 group-hover:bg-primary/25"
                    />
                    <img
                      src={r.img}
                      alt={`Prenájom — ${r.title}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 [filter:drop-shadow(0_10px_14px_color-mix(in_oklab,var(--foreground)_22%,transparent))]"
                    />
                  </div>
                  <div className="p-6 pt-0">
                    <h3 className="text-2xl uppercase leading-none">{r.title}</h3>
                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-primary">{r.slogan}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <a
            href="tel:+421918812027"
            className="btn-shine mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_14px_30px_-14px_color-mix(in_oklab,var(--brand-red)_80%,transparent)] transition-colors hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" /> Dohodnúť termín prenájmu
          </a>
        </div>
      </section>

      {/* MONTÁŽE */}
      <section id="montaze" className="border-y border-border bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Elektroinštalácie a montáže
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
              Od projektu po <span className="text-primary">revíznu správu</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Robíme kompletné elektroinštalačné práce a všetko, čo s nimi súvisí — pre rodinné domy,
              bytovky, firmy aj priemyselné haly. Navrhneme, namontujeme, odskúšame a odovzdáme
              s platnou dokumentáciou.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {montaze.map((m, i) => (
              <Reveal key={m} delay={i * 45}>
                <div className="flex items-center gap-3 border-b border-border py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.2} />
                  <span className="text-sm font-medium">{m}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PREČO MY + REFERENCIE */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Prečo ELEKTRO-MLM
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
            Sme tu pre vás — <span className="text-primary">bez zbytočných rečí</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {preco.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <article className="frame-brand card-lift h-full rounded-2xl bg-card p-7">
                <h3 className="text-xl uppercase leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <p className="eyebrow-line mt-20 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Referencie
          </p>
          <h2 className="mt-3 text-4xl uppercase italic leading-[1] md:text-5xl">
            Kde sme už <span className="text-primary">svietili</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {referencie.map((r, i) => (
            <Reveal key={r.name} delay={i * 90} className="h-full">
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                <Zap className="h-7 w-7 text-primary" strokeWidth={2.2} />
                <h3 className="mt-4 text-lg uppercase leading-tight">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-foreground px-7 py-10 text-background sm:flex sm:items-center sm:justify-between sm:gap-8">
            <span aria-hidden className="glow-blob pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-60" />
            <div className="relative">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Potrebujete poradiť?
              </p>
              <h3 className="mt-3 max-w-xl text-3xl uppercase italic leading-[1.05] md:text-4xl">
                Neváhajte nás kontaktovať — radi vás privítame v našich predajniach.
              </h3>
            </div>
            <a
              href="#kontakt"
              className="btn-shine relative mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-brand-dark sm:mt-0"
            >
              <Phone className="h-4 w-4" /> Kontaktujte nás
            </a>
          </div>
        </Reveal>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="border-t border-border bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Kde nás nájdete
            </p>
            <h2 className="mt-3 text-4xl uppercase italic leading-[1] md:text-5xl">
              Dve predajne <span className="text-primary">v Prievidzi</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {shops.map((s) => (
              <article key={s.id} className="card-lift frame-brand p-7">
                <span className="font-mono text-xs font-bold tracking-widest text-primary">{s.id}</span>
                <h3 className="mt-2 text-2xl uppercase leading-tight">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                <ul className="mt-5 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(s.address)}`}
                      className="hover:text-primary"
                    >
                      {s.address}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Po – Pia 7:00 – 17:00 · So 8:00 – 12:00 · Ne zatvorené</span>
                  </li>
                  {s.phones.map((p) => (
                    <li key={p.num} className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                          {p.label}
                        </span>
                        <a
                          href={`tel:+421${p.num.replace(/\s|^0/g, "")}`}
                          className="font-semibold hover:text-primary"
                        >
                          {p.num}
                        </a>
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        Majiteľ / obhliadky
                      </span>
                      <a href="tel:+421918812027" className="font-semibold hover:text-primary">
                        {OWNER_PHONE}
                      </a>
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <a href="mailto:info@elektro-mlm.sk" className="hover:text-primary">
                      info@elektro-mlm.sk
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>

          {/* KONTAKTNÝ FORMULÁR */}
          <div className="mt-16 grid gap-8 rounded-2xl border border-border bg-card p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">Napíšte nám</p>
              <h3 className="mt-3 text-3xl uppercase italic leading-[1]">
                Nezáväzný dopyt <span className="text-primary">na e-mail</span>
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Revízia, oprava, fotovoltika alebo prenájom techniky? Napíšte, čo potrebujete, a ozveme sa spravidla do
                24 hodín.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@elektro-mlm.sk" className="hover:text-primary">
                    info@elektro-mlm.sk
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+421918812027" className="hover:text-primary">
                    0918 812 027
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Po – Pia 7:00 – 17:00 · So 8:00 – 12:00</span>
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const body = [
                  `Meno: ${form.name}`,
                  `Telefón: ${form.phone}`,
                  `E-mail: ${form.email}`,
                  `Služba: ${form.topic}`,
                  "",
                  form.message,
                ].join("\n");
                window.location.href = `mailto:info@elektro-mlm.sk?subject=${encodeURIComponent(
                  `Dopyt z webu — ${form.topic}`,
                )}&body=${encodeURIComponent(body)}`;
              }}
              className="grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    Meno a priezvisko
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    Telefón
                  </span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    E-mail
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    Čo potrebujete
                  </span>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  >
                    <option>Revízia / meranie</option>
                    <option>Lokalizácia poruchy</option>
                    <option>Elektroinštalácia</option>
                    <option>Fotovoltika</option>
                    <option>Prenájom techniky</option>
                    <option>Iné</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">Správa</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="justify-self-start rounded-full bg-primary px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brand-dark"
              >
                Odoslať dopyt
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-12 text-background">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-xl bg-background px-4 py-2">
              <img src={logo} alt="ELEKTRO-MLM Prievidza" width={160} height={120} className="h-11 w-auto" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
              Prievidza · od 2007
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-background/15 py-5 font-mono text-xs uppercase tracking-widest">
            <a href="#kontakt" className="flex items-center gap-2 hover:text-primary">
              <MapPin className="h-4 w-4 text-primary" /> Prievidza
            </a>
            <a href="https://www.elektro-mlm.sk" className="flex items-center gap-2 hover:text-primary">
              <Globe className="h-4 w-4 text-primary" /> www.elektro-mlm.sk
            </a>
            <a href="tel:+421918812027" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> 0918 812 027
            </a>
          </div>
          <p className="mt-6 text-xs opacity-70">
            © {new Date().getFullYear()} ELEKTRO – MLM, s.r.o. · Stavbárov 12, Prievidza · IČO: 36 725 463 · ISO 9001
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
    </div>
  );
}
