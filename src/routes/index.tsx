import { createFileRoute } from "@tanstack/react-router";
import { Plug, Lightbulb, Drill, Wrench, MapPin, Globe, Phone, Sun, CheckCircle2 } from "lucide-react";
import logo from "@/assets/mlm-logo.png";
import productsHero from "@/assets/products-hero.jpg";
import rentalMachines from "@/assets/rental-machines.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MLM Elektro Prievidza — Elektroinštalačný materiál, Makita, Knipex" },
      {
        name: "description",
        content:
          "MLM Elektro Prievidza — elektroinštalačný materiál, svietidlá a LED osvetlenie, náradie Makita a Knipex, prenájom bágrov, UNC a plošín, fotovoltika a revízie.",
      },
      { property: "og:title", content: "MLM Elektro Prievidza" },
      { property: "og:description", content: "Elektroinštalačný materiál, svietidlá, náradie Makita a Knipex, prenájom techniky, fotovoltika." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Category = {
  icon: typeof Plug;
  title: string;
  subtitle?: string;
  tags: string[];
};

const categories: Category[] = [
  {
    icon: Plug,
    title: "Elektroinštalačné materiály",
    tags: ["Káble", "Ističe", "Zásuvky", "Rozvádzače", "Bleskozvodný materiál"],
  },
  {
    icon: Lightbulb,
    title: "Svietidlá a LED osvetlenie",
    tags: ["Interiér", "Exteriér", "Priemysel"],
  },
  {
    icon: Drill,
    title: "Náradie Makita",
    subtitle: "Pre profesionálov",
    tags: ["Akumulátorové", "Sieťové", "Príslušenstvo"],
  },
  {
    icon: Wrench,
    title: "Knipex a profesionálne náradie",
    tags: ["Kvalita", "Spoľahlivosť", "Odolnosť"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="MLM Elektro" width={160} height={120} className="h-14 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wide md:flex">
            <a href="#sortiment" className="hover:text-primary">SORTIMENT</a>
            <a href="#prenajom" className="hover:text-primary">PRENÁJOM</a>
            <a href="#sluzby" className="hover:text-primary">SLUŽBY</a>
            <a href="#kontakt" className="hover:text-primary">KONTAKT</a>
          </nav>
          <a
            href="tel:+421918812027"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-red-dark)] md:inline-flex"
          >
            0918 812 027
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <img src={logo} alt="MLM Elektro logo" width={400} height={300} className="mb-8 w-64 md:w-80" />
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
              Všetko pre <span className="text-primary">elektroinštaláciu</span> na jednom mieste
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Predajňa v Prievidzi. Materiál, svietidlá, profi náradie Makita a Knipex, prenájom stavebnej techniky, fotovoltika a revízie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#sortiment" className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-[var(--brand-red-dark)]">
                Pozrieť sortiment
              </a>
              <a href="#kontakt" className="rounded-md border-2 border-foreground px-6 py-3 font-semibold hover:bg-foreground hover:text-background">
                Kontaktujte nás
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={productsHero}
              alt="Produkty MLM Elektro"
              width={1200}
              height={1408}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="sortiment" className="bg-card py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Náš sortiment</p>
            <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">Čo u nás nájdete</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="group flex gap-5 rounded-xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-8 w-8" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase leading-tight">{c.title}</h3>
                    {c.subtitle && (
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {c.subtitle}
                      </p>
                    )}
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {c.tags.map((t, i) => (
                        <li key={t} className="flex items-center gap-2">
                          {i > 0 && <span className="text-primary">•</span>}
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental & services */}
      <section id="prenajom" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Prenájom techniky</p>
              <h2 className="mt-2 text-3xl font-black uppercase md:text-4xl">Bágre · UNC · Plošiny</h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Ponúkame krátkodobý aj dlhodobý prenájom stavebnej techniky pre profesionálov aj domácich majstrov.
              </p>
              <img
                src={rentalMachines}
                alt="Prenájom techniky"
                loading="lazy"
                width={1408}
                height={512}
                className="mt-8 w-full"
              />
            </div>
            <div id="sluzby" className="rounded-xl border-2 border-primary bg-card p-8">
              <Sun className="h-12 w-12 text-primary" strokeWidth={2.2} />
              <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                Realizujeme fotovoltiku a revízie
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {["Návrh a montáž FVE", "Odborné revízie elektro", "Poradenstvo a servis"].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--brand-red-dark)]"
              >
                Dopyt na FVE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact bar */}
      <section id="kontakt" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:divide-x md:divide-white/25">
          <a href="https://maps.google.com/?q=Prievidza" className="flex items-center gap-3 md:justify-center">
            <MapPin className="h-6 w-6" />
            <span className="text-lg font-bold uppercase tracking-wide">Prievidza</span>
          </a>
          <a href="https://www.elektro-mlm.sk" className="flex items-center gap-3 md:justify-center">
            <Globe className="h-6 w-6" />
            <span className="text-lg font-bold uppercase tracking-wide">www.elektro-mlm.sk</span>
          </a>
          <a href="tel:+421918812027" className="flex items-center gap-3 md:justify-center">
            <Phone className="h-6 w-6" />
            <span className="text-lg font-bold tracking-wide">0918 812 027</span>
          </a>
        </div>
      </section>

      <footer className="bg-foreground py-6 text-center text-sm text-background/70">
        © {new Date().getFullYear()} MLM Elektro · Prievidza
      </footer>
    </div>
  );
}
