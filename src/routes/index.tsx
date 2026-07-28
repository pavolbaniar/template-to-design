import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ClipboardCheck,
  Radar,
  Wrench,
  ShoppingBag,
  Plug,
  Lightbulb,
  Drill,
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
import logo from "@/assets/mlm-logo.png";
import excavator from "@/assets/excavator.png";
import skidSteer from "@/assets/skid_steer.png";
import boomLift from "@/assets/boom_lift.png";
import generator from "@/assets/generator.png";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#revizie", label: "Revízie" },
  { href: "#sluzby", label: "Služby" },
  { href: "#prenajom", label: "Prenájom" },
  { href: "#predaj", label: "Predaj" },
  { href: "#kontakt", label: "Kontakt" },
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
  { icon: Plug, title: "Elektroinštalačný materiál", tags: "Káble · Ističe · Zásuvky · Rozvádzače · Bleskozvody" },
  { icon: Lightbulb, title: "Svietidlá a LED osvetlenie", tags: "Interiér · Exteriér · Priemysel" },
  { icon: Drill, title: "Náradie MAKITA", tags: "Akumulátorové · Sieťové · Príslušenstvo" },
  { icon: Wrench, title: "KNIPEX a profi náradie", tags: "Kvalita · Spoľahlivosť · Odolnosť" },
];

const stats = [
  { num: "17+", label: "Rokov skúseností" },
  { num: "52 kV", label: "Revízie do napätia" },
  { num: "ISO", label: "Certifikát 9001" },
  { num: "2", label: "Predajne v Prievidzi" },
];

const shops = [
  {
    id: "01",
    name: "Predajňa Stavbárov",
    note: "Svietidlá & elektromateriál",
    address: "Stavbárov 12, 971 01 Prievidza",
    phones: ["0948 344 377", "0948 344 378"],
  },
  {
    id: "02",
    name: "Predajňa Zápotôčky",
    note: "Maloobchodná predajňa, vedľa nadchodu",
    address: "L. N. Tolstého 1885/8, 971 01 Prievidza",
    phones: ["0948 162 842"],
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
              href="tel:+421948344377"
              className="rounded-full bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brand-dark"
            >
              0948 344 377
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
                href="tel:+421948344377"
                className="mt-4 rounded-full bg-primary px-5 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                Zavolať 0948 344 377
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
          <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
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
      <div id="sluzby" className="grid border-y border-border bg-secondary sm:grid-cols-2 lg:grid-cols-4">
        {strip.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="border-b border-r border-border border-t-[3px] border-t-transparent bg-secondary p-8 transition-colors hover:border-t-primary hover:bg-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.9} />
              </div>
              <h3 className="mt-4 text-xl uppercase">{s.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* REVÍZIE */}
      <section id="revizie" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          Robíme revízie — profesionálne
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
          Revízna správa, ktorá obstojí <span className="text-primary">pri kontrole aj pri poistke</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {revizie.map((r) => {
            const Icon = r.icon;
            return (
              <article key={r.title} className="rounded-2xl border border-border bg-card p-7 transition hover:shadow-lg">
                <Icon className="h-9 w-9 text-primary" strokeWidth={1.8} />
                <h3 className="mt-5 text-2xl uppercase leading-tight">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
              </article>
            );
          })}
        </div>
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
      </section>

      {/* PRENÁJOM */}
      <section id="prenajom" className="border-y border-border bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Prenájom mechanizácie
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
            Bágre · UNC · Plošiny · <span className="text-primary">Elektrocentrály</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Požičiame na deň aj na celú stavbu. Stroje sú pripravené v Prievidzi — stačí zavolať.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rentals.map((r) => (
              <article
                key={r.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-44 items-center justify-center bg-transparent p-4">
                  <img
                    src={r.img}
                    alt={`Prenájom — ${r.title}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-contain [filter:drop-shadow(0_10px_14px_color-mix(in_oklab,var(--foreground)_22%,transparent))]"
                  />
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-2xl uppercase leading-none">{r.title}</h3>
                  <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-primary">{r.slogan}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <a
            href="tel:+421948344377"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" /> Dohodnúť termín prenájmu
          </a>
        </div>
      </section>

      {/* PREDAJ */}
      <section id="predaj" className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">Predaj</p>
        <h2 className="mt-3 text-4xl uppercase italic leading-[1] md:text-5xl">
          Všetko pre elektrinu <span className="text-primary">pod jednou strechou</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {sortiment.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl uppercase leading-tight">{c.title}</h3>
                  <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                    {c.tags}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col gap-5 rounded-2xl border-2 border-primary bg-card p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
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
            className="shrink-0 rounded-full bg-primary px-6 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground hover:bg-brand-dark"
          >
            Dopyt na FVE
          </a>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="border-t border-border bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">Kde nás nájdete</p>
          <h2 className="mt-3 text-4xl uppercase italic leading-[1] md:text-5xl">
            Dve predajne <span className="text-primary">v Prievidzi</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {shops.map((s) => (
              <article key={s.id} className="rounded-2xl border border-border bg-card p-7">
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
                    <li key={p} className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <a href={`tel:+421${p.replace(/\s|^0/g, "")}`} className="font-semibold hover:text-primary">
                        {p}
                      </a>
                    </li>
                  ))}
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
                  <a href="tel:+421948344377" className="hover:text-primary">
                    0948 344 377
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
            <Zap className="h-8 w-8 text-primary" fill="currentColor" strokeWidth={0} />
            <span className="text-2xl uppercase italic tracking-tight">
              MLM <span className="text-primary">Elektro</span>
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] opacity-70">
              Prievidza · od 2007
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-background/15 py-5 font-mono text-xs uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Prievidza
            </span>
            <a href="https://www.elektro-mlm.sk" className="flex items-center gap-2 hover:text-primary">
              <Globe className="h-4 w-4 text-primary" /> www.elektro-mlm.sk
            </a>
            <a href="tel:+421948344377" className="flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4 text-primary" /> 0948 344 377
            </a>
          </div>
          <p className="mt-6 text-xs opacity-70">
            © {new Date().getFullYear()} ELEKTRO – MLM, s.r.o. · Stavbárov 12, Prievidza · IČO: 36 725 463 · ISO 9001
          </p>
        </div>
      </footer>
    </div>
  );
}
