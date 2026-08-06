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
  Handshake,
  CalendarDays,
  Truck,
  Factory,
  Home,
  Camera,
  FileText,
  Layers,
  Timer,
  Award,
} from "lucide-react";
import logo from "@/assets/mlm-logo.svg";


import excavator from "@/assets/rent-excavator.png";
import manCrane from "@/assets/rent-man.png";
import skidSteer from "@/assets/rent-locust.png";
import boomLift from "@/assets/rent-boomlift.png";
import generator from "@/assets/rent-generator.png";
import drillPhoto from "@/assets/drill.webp";
import makitaPhoto from "@/assets/makita.webp";
import knipexPhoto from "@/assets/knipex_tools.webp";
import distributionBoxPhoto from "@/assets/rozvadzac.webp";
import materialPhoto from "@/assets/material.webp";
import bleskozvodPhoto from "@/assets/bleskozvod.png";


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

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ako často treba robiť revíziu elektrického zariadenia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interval závisí od typu priestoru a prostredia podľa STN 33 1500 — byt má iný cyklus ako sklad, hala alebo priestor s nebezpečenstvom výbuchu.",
      },
    },
    {
      "@type": "Question",
      name: "Čo presne je odborná prehliadka a odborná skúška?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Odborná prehliadka je vizuálna a meracia kontrola stavu zariadenia, odborná skúška overuje jeho funkčnosť a bezpečnosť v prevádzke. Spolu tvoria revíziu a výsledkom je revízna správa.",
      },
    },
    {
      "@type": "Question",
      name: "Potrebujem revíziu aj na bleskozvod?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, bleskozvod je samostatné zariadenie s vlastnou periodickou kontrolou.",
      },
    },
    {
      "@type": "Question",
      name: "Robíte revízie aj pre firmy, haly a priemyselné prevádzky?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, meriame a revidujeme zariadenia do 52 kV — od bytov cez sklady až po výrobné haly a priestory s nebezpečenstvom výbuchu.",
      },
    },
    {
      "@type": "Question",
      name: "Ako rýchlo sa mi ozvete po odoslaní dopytu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spravidla do 24 hodín, telefonicky alebo e-mailom.",
      },
    },
    {
      "@type": "Question",
      name: "Vozíte prenajatú techniku aj mimo Prievidze?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, dovoz stroja priamo na stavbu vieme dohodnúť aj do okolitých obcí.",
      },
    },
    {
      "@type": "Question",
      name: "Dá sa u vás zaparkovať?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, pri oboch predajniach je možnosť zaparkovať priamo na mieste.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELEKTRO-MLM Prievidza | Revízie, elektroinštalácie, prenájom techniky" },
      {
        name: "description",
        content:
          "Revízie a merania do 52 kV, elektroinštalácie a fotovoltika, predaj elektromateriálu a prenájom bágrov, Locust nakladačov, plošín a elektrocentrál. Prievidza od roku 2007.",
      },
      { property: "og:title", content: "ELEKTRO-MLM Prievidza — napätie, ktoré nesklame" },
      {
        property: "og:description",
        content:
          "Revízne správy podľa STN, lokalizácia porúch, montáže a fotovoltika. Prenájom bágrov, Locust, plošín a elektrocentrál.",
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
  { href: "#predaj", label: "Predaj" },
  { href: "#prenajom", label: "Prenájom" },
  { href: "#revizie", label: "Revízie" },
  { href: "#sluzby", label: "Služby" },
  { href: "#montaze", label: "Montáže" },
  { href: "#kontakt", label: "Kontakt" },
];

const montazeCategories = [
  {
    category: "Priemyselné inštalácie",
    icon: Factory,
    items: [
      "Silnoprúd a slaboprúd",
      "Prípojky NN a rozvádzače",
      "VN trafostanice — partner SSD",
      "Údržba a servis prevádzok",
      "Pretlaky pod cestou",
    ],
  },
  {
    category: "Domáce a inteligentné inštalácie",
    icon: Home,
    items: [
      "Domy, byty, novostavby",
      "Vnútorné a vonkajšie osvetlenie",
      "Elektrické vykurovanie",
      "Bleskozvody a uzemnenie",
      "Smart riadenie, meranie a regulácia",
    ],
  },
  {
    category: "Zabezpečovacie a kamerové systémy",
    icon: Camera,
    items: [
      "Kamerové systémy CCTV",
      "EZS — zabezpečovacia signalizácia",
      "EPS — požiarna signalizácia",
      "HSP — hlasová signalizácia požiaru",
    ],
  },
  {
    category: "Projekty a dokumentácia",
    icon: FileText,
    items: [
      "Projekty vedení nn · vn · vvn · zvn",
      "Návrhy podporných bodov",
      "Statické posúdenia a výpočty",
      "Fotovoltika na kľúč vrátane povolení",
      "Inžiniering a komunikácia s úradmi",
    ],
  },
];

const preco = [
  {
    icon: CalendarDays,
    title: "Domáca firma z Prievidze",
    text: "Od roku 2007 v regióne. Poznáte nás z predajní aj zo stavieb v okolí.",
  },
  {
    icon: Layers,
    title: "Jeden dodávateľ",
    text: "Projekt, montáž, revízia, materiál aj technika — bez koordinovania piatich firiem.",
  },
  {
    icon: Award,
    title: "Oprávnenia a kvalita",
    text: "ISO 9001, zmluvný partner SSD a oprávnení revízni technici pre nn aj vn.",
  },
  {
    icon: Timer,
    title: "Reagujeme rýchlo",
    text: "Poruchy riešime prednostne, techniku dovezieme na stavbu spravidla do 24 hodín.",
  },
];

const referencie = [
  {
    name: "Priemysel a výrobné haly",
    text: "Trafostanice, rozvody NN, priemyselné osvetlenie a periodické revízie počas prevádzky.",
  },
  {
    name: "Bytové domy a novostavby",
    text: "Prípojky NN, stúpačky, spoločné priestory, bleskozvod a odovzdanie ku kolaudácii.",
  },
  {
    name: "Stavebné firmy a živnostníci",
    text: "Bágre, Locust, plošiny, elektrocentrály a MAN s hydraulickou rukou vrátane dovozu.",
  },
];



const strip = [
  {
    icon: ClipboardCheck,
    label: "Revízie & merania",
    points: ["Revízne správy do 52 kV", "Termovízia", "Kvalita siete a cos φ"],
    href: "#revizie",
    cta: "Revízie",
  },
  {
    icon: Radar,
    label: "Lokalizácia porúch",
    points: ["Presnosť na centimetre", "Bez zbytočného kopania", "Výjazd po dohode"],
    href: "#kontakt",
    cta: "Nahlásiť poruchu",
  },
  {
    icon: Wrench,
    label: "Montáže & fotovoltika",
    points: ["Elektroinštalácie na kľúč", "Bleskozvody a rozvádzače", "FVE s dokumentáciou"],
    href: "#montaze",
    cta: "Montáže",
  },
  {
    icon: ShoppingBag,
    label: "Predaj & prenájom",
    points: ["2 predajne v Prievidzi", "MAKITA · KNIPEX", "Bágre, plošiny, centrály"],
    href: "#prenajom",
    cta: "Predaj a prenájom",
  },
];



const revizie = [
  {
    icon: ShieldCheck,
    title: "Prehliadky a skúšky do 52 kV",
    desc: "Byty, haly, sklady, bleskozvody, FVE. Výstupom je revízna správa podľa STN 33 1500.",
  },
  {
    icon: Thermometer,
    title: "Termovízne merania",
    desc: "Prehriate spoje a chybnú izoláciu nájdeme počas plnej prevádzky, bez odstávky.",
  },
  {
    icon: Gauge,
    title: "Kvalita siete a cos φ",
    desc: "Meranie účinníka, harmonických a výkyvov napätia s protokolom a odporúčaniami.",
  },
  {
    icon: Zap,
    title: "Kompenzácie a dekompenzácie",
    desc: "Návrh rozvádzača na mieru podľa reálnych meraní vášho odberu.",
  },
];


const faq = [
  {
    q: "Ako často treba robiť revíziu elektrického zariadenia?",
    a: "Interval závisí od typu priestoru a prostredia podľa STN 33 1500 — byt má iný cyklus ako sklad, hala alebo priestor s nebezpečenstvom výbuchu. Radi vám na mieste povieme presný interval pre váš konkrétny prípad.",
  },
  {
    q: "Čo presne je odborná prehliadka a odborná skúška?",
    a: "Odborná prehliadka je vizuálna a meracia kontrola stavu zariadenia, odborná skúška overuje jeho funkčnosť a bezpečnosť v prevádzke. Spolu tvoria revíziu a výsledkom je revízna správa.",
  },
  {
    q: "Potrebujem revíziu aj na bleskozvod?",
    a: "Áno, bleskozvod je samostatné zariadenie s vlastnou periodickou kontrolou. Bez platnej revíznej správy naň sa poisťovňa pri škode môže odvolávať.",
  },
  {
    q: "Robíte revízie aj pre firmy, haly a priemyselné prevádzky?",
    a: "Áno, meriame a revidujeme zariadenia do 52 kV — od bytov cez sklady až po výrobné haly a priestory s nebezpečenstvom výbuchu.",
  },
  {
    q: "Ako rýchlo sa mi ozvete po odoslaní dopytu?",
    a: "Spravidla do 24 hodín, telefonicky alebo e-mailom, podľa toho, čo si vyberiete v kontaktnom formulári nižšie.",
  },
  {
    q: "Vozíte prenajatú techniku aj mimo Prievidze?",
    a: "Áno, dovoz stroja priamo na stavbu vieme dohodnúť aj do okolitých obcí — dostupnosť a podmienky preberieme telefonicky podľa vzdialenosti.",
  },
  {
    q: "Dá sa u vás zaparkovať?",
    a: "Áno, pri oboch predajniach je možnosť zaparkovať priamo na mieste.",
  },
];

type RentalItem = {
  title: string;
  slogan: string;
  desc: string;
  img?: string;
  icon?: typeof Truck;
};

const rentals: RentalItem[] = [
  {
    img: excavator,
    title: "Bágre",
    slogan: "Kopeme presne tam, kde treba",
    desc: "Výkopy pre prípojky, stavby a terénne úpravy.",
  },
  {
    img: skidSteer,
    title: "Locust nakladače",
    slogan: "Sila do úzkych miest",
    desc: "Presun materiálu a úpravy terénu.",
  },
  {
    img: boomLift,
    title: "Plošiny",
    slogan: "Bezpečne aj tam, kde rebrík nestačí",
    desc: "Montáže a práca vo výškach.",
  },
  {
    img: generator,
    title: "Elektrocentrály",
    slogan: "Prúd aj tam, kde nie je zásuvka",
    desc: "Mobilné a záložné napájanie.",
  },
  {
    img: manCrane,
    title: "MAN TGS 41.500 8x6",
    slogan: "Hydraulická ruka Palfinger PK92002",
    desc: "Preprava a presná manipulácia s ťažkými bremenami.",
  },
];


const sortiment = [
  {
    img: materialPhoto,
    title: "Elektroinštalačný materiál",
    tags: "Káble · Ističe · Zásuvky",
    desc: "Všetko pre elektroinštaláciu na jednom mieste.",
  },
  {
    img: drillPhoto,
    title: "Svietidlá a LED",
    tags: "Interiér · Exteriér · Priemysel",
    desc: "Široký výber svietidiel vrátane poradenstva.",
  },
  {
    img: makitaPhoto,
    title: "Náradie MAKITA",
    tags: "Aku · Sieťové · Príslušenstvo",
    desc: "Profesionálne náradie a príslušenstvo MAKITA.",
  },
  {
    img: knipexPhoto,
    title: "KNIPEX náradie",
    tags: "Kvalita · Odolnosť",
    desc: "Kliešte, štiepačky a profi ručné náradie.",
  },
  {
    img: distributionBoxPhoto,
    title: "Rozvádzače na mieru",
    tags: "Certifikácia · Výroba",
    desc: "Výroba podľa projektu, s certifikáciou.",
  },
  {
    img: bleskozvodPhoto,
    title: "Bleskozvodná technika",
    tags: "Materiál · Projekt · Revízia",
    desc: "Ochrana strechy od zvodov po revíznu správu.",
  },
];


const stats = [
  { icon: CalendarDays, text: "17+ rokov" },
  { icon: Zap, text: "52 kV" },
  { icon: ShieldCheck, text: "ISO 9001" },
  { icon: MapPin, text: "2 predajne" },
  { icon: Handshake, text: "SSD partner" },
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
  "Locust nakladače",
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold uppercase italic leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                Elektroinštalácie, revízie a prenájom techniky
              </h1>
              <p className="mt-4 text-xl font-medium italic text-primary md:text-2xl">
                Napätie, ktoré nesklame
              </p>
              <p className="mt-6 max-w-xl text-sm font-mono font-semibold uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                Od roku 2007 · Revízie do 52 kV · Fotovoltika · Prenájom bágrov, plošín a elektrocentrál · Zmluvný
                partner SSD
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2 md:flex-nowrap">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.text}
                      className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                      <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-foreground">
                        {s.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <a
                  href="#revizie"
                  className="btn-shine rounded-full bg-primary px-6 py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_14px_30px_-14px_color-mix(in_oklab,var(--brand-red)_80%,transparent)] transition-colors hover:bg-brand-dark"
                >
                  Revízie
                </a>
                <a
                  href="#prenajom"
                  className="rounded-full border-2 border-foreground px-6 py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background"
                >
                  Prenájom
                </a>
                <a
                  href="#montaze"
                  className="rounded-full border border-border bg-card px-6 py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  Fotovoltika
                </a>
                <a
                  href="#kontakt"
                  className="rounded-full border border-border bg-card px-6 py-3.5 text-center font-mono text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                >
                  Kontakt
                </a>
              </div>
            </div>

            <div className="frame-brand relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted via-background to-secondary shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--brand-red)_75%,transparent)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 [background-image:radial-gradient(color-mix(in_oklab,var(--foreground)_6%,transparent)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
              />
              <img
                src={manCrane}
                alt="MAN TGS 41.500 8x6 s rukou Palfinger PK92002 — prenájom techniky Prievidza"
                width={1600}
                height={1008}
                className="relative z-10 h-full w-full rounded-2xl object-contain p-4 md:p-6"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-foreground/20 via-transparent to-primary/10"
              />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3 rounded-xl bg-background/92 px-4 py-2.5 shadow-lg backdrop-blur">
                <img src={logo} alt="ELEKTRO-MLM" width={160} height={80} className="h-7 w-auto md:h-8" />
                <span className="hidden font-mono text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.16em] text-muted-foreground sm:block">
                  Revízie · Prenájom
                  <br />
                  Fotovoltika
                </span>
              </div>
            </div>
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


      {/* VSTUPNÉ KARTY */}
      <section id="sluzby" className="border-b border-border bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Čo pre vás robíme
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl uppercase italic leading-[1] md:text-5xl">
              Vyberte si, s čím potrebujete pomôcť
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strip.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 90} className="h-full">
                  <div className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/50">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div className="relative flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_10px_22px_-12px_color-mix(in_oklab,var(--brand-red)_90%,transparent)] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Icon className="h-7 w-7" strokeWidth={1.9} />
                      </div>
                      <span className="font-mono text-3xl font-semibold leading-none text-muted-foreground/25">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-xl uppercase leading-tight">{s.label}</h3>
                    <ul className="relative mt-4 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={s.href}
                      className="btn-shine relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-brand-dark"
                    >
                      {s.cta}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
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
          {sortiment.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="h-full">
              <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
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
                </div>
                <div className="flex flex-1 flex-col border-t border-border p-6">
                  <h3 className="text-xl uppercase leading-tight">{c.title}</h3>
                  <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-widest text-primary">{c.tags}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
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
                  Návrh, montáž, revízna správa aj papierovačky so ZSD — vrátane vybavenia dotácie
                  Zelená domácnostiam. Slnko, ktoré sa vám vráti.
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
              Bágre · Locust · Plošiny · <span className="text-primary">Elektrocentrály</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Požičiame na deň aj na celú stavbu. Stroje sú pripravené v Prievidzi — stačí zavolať.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {rentals.map((r, i) => (
              <Reveal key={r.title} delay={i * 90} className="h-full">
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative flex h-40 items-center justify-center overflow-hidden bg-secondary/60 p-4">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-8 bottom-4 h-20 rounded-[50%] bg-primary/10 blur-xl transition-opacity duration-500 group-hover:bg-primary/25"
                    />
                    <span className="absolute left-3 top-3 font-mono text-[0.7rem] font-semibold text-muted-foreground/40">
                      0{i + 1}
                    </span>
                    <img
                      src={r.img}
                      alt={`Prenájom — ${r.title}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 [filter:drop-shadow(0_10px_14px_color-mix(in_oklab,var(--foreground)_22%,transparent))]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-border p-6">
                    <h3 className="text-2xl uppercase leading-none">{r.title}</h3>
                    <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-primary">{r.slogan}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                    <a
                      href="tel:+421918812027"
                      className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-primary hover:text-primary"
                    >
                      <Phone className="h-3.5 w-3.5" /> Dopyt
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Zavoláte alebo napíšete",
                desc: "Poviete nám, aký stroj potrebujete a na ako dlho.",
              },
              {
                n: "02",
                title: "Dohodneme termín a podmienky",
                desc: "Vrátane toho, či treba aj obsluhu — cenu vždy riešime individuálne podľa potreby.",
              },
              {
                n: "03",
                title: "Dovezieme stroj na stavbu",
                desc: "Alebo sa dohodneme na vyzdvihnutí priamo u nás v Prievidzi.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <span className="font-mono text-3xl font-semibold leading-none text-primary/30">{step.n}</span>
                <div>
                  <h3 className="text-lg font-semibold uppercase leading-tight">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
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

      {/* REVÍZIE */}
      <section id="revizie" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <Reveal>
          <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Revízie a merania
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
            Revízna správa, ktorá obstojí <span className="text-primary">pri kontrole aj pri poistke</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Oprávnení revízni technici pre nn aj vn. Odmeriame, vyhodnotíme a odovzdáme
            správu, s ktorou sa dá ďalej pracovať.
          </p>
        </Reveal>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {revizie.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 90} className="h-full">
                <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/25">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold uppercase leading-tight">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
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
              Navrhneme, namontujeme, odskúšame a odovzdáme s platnou dokumentáciou — od bytu
              a rodinného domu až po priemyselnú halu a trafostanicu.
            </p>

          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {montazeCategories.map((cat, ci) => {
              const Icon = cat.icon;
              return (
                <Reveal key={cat.category} delay={ci * 90} className="h-full">
                  <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7 md:p-8">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/25">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <h3 className="text-lg font-semibold uppercase leading-tight">{cat.category}</h3>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {cat.items.map((m) => (
                        <li key={m} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.4} />
                          <span className="text-sm text-muted-foreground">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preco.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 80} className="h-full">
                <article className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/25">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold uppercase leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            );
          })}
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
              <article key={s.id} className="card-lift frame-brand flex h-full flex-col p-7">
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
                <div className="mt-auto pt-6">
                  <div className="overflow-hidden rounded-xl border border-border">
                    <iframe
                      title={`Mapa — ${s.name}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(s.address)}&output=embed`}
                      className="h-56 w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
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
      {/* FAQ */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Časté otázky
            </p>
            <h2 className="mt-3 text-4xl uppercase italic leading-[1] md:text-5xl">
              Čo vás <span className="text-primary">najčastejšie zaujíma</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faq.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 70}>
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="text-base font-semibold md:text-lg">{f.q}</span>
                      <span
                        aria-hidden
                        className={`shrink-0 font-mono text-xl text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    <p
                      className={`grid px-5 text-sm text-muted-foreground transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <span className="overflow-hidden">{f.a}</span>
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

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

      {/* MOBILNÁ LIŠTA S KONTAKTOM */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-card/95 backdrop-blur md:hidden">
        <a
          href="tel:+421918812027"
          className="flex items-center justify-center gap-2 bg-primary py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> 0918 812 027
        </a>
        <a
          href="#kontakt"
          className="flex items-center justify-center gap-2 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em]"
        >
          <Mail className="h-4 w-4 text-primary" /> Napísať
        </a>
      </div>
      <div aria-hidden className="h-14 md:hidden" />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
    </div>
  );
}
