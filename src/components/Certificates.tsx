import { useRef, useState, type ComponentType, type ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Award, ChevronLeft, ChevronRight, ExternalLink, FileText, ShieldCheck, X, ZoomIn } from "lucide-react";

import iso9001 from "@/assets/certifikaty/01_Certifikat_ISO_9001_SK.jpg";
import iso9001en from "@/assets/certifikaty/02_Certifikat_ISO_9001_EN.jpg";
import iso9001de from "@/assets/certifikaty/03_Certifikat_ISO_9001_DE.jpg";
import c04 from "@/assets/certifikaty/04_Opravnenie_odborne_prehliadky_skusky_opravy_el_zariadeni.jpg";
import c05 from "@/assets/certifikaty/05_Opravnenie_vyroba_elektrickych_rozvadzacov.jpg";
import c06 from "@/assets/certifikaty/06_Osvedcenie_prehliadky_skusky_el_zariadeni_bleskozvody.jpg";
import c07 from "@/assets/certifikaty/07_Licencia_prevadzkovanie_technickej_sluzby.jpg";
import c08 from "@/assets/certifikaty/08_Certifikat_montaz_kablovych_suborov_Raychem.jpg";
import c09 from "@/assets/certifikaty/09_Osvedcenie_odborna_sposobilost_elektroenergetika.jpg";
import c10 from "@/assets/certifikaty/10_Osvedcenie_odborna_sposobilost_tepelna_energetika.jpg";
import c11 from "@/assets/certifikaty/11_Opravnenie_vyroba_technickych_elektrickych_zariadeni.jpg";
import c12 from "@/assets/certifikaty/12_Certifikat_projektovanie_vyroba_vyhradenych_zariadeni.jpg";
import t01 from "@/assets/certifikaty/thumbs/01_Certifikat_ISO_9001_SK.jpg";
import t02 from "@/assets/certifikaty/thumbs/02_Certifikat_ISO_9001_EN.jpg";
import t03 from "@/assets/certifikaty/thumbs/03_Certifikat_ISO_9001_DE.jpg";
import t04 from "@/assets/certifikaty/thumbs/04_Opravnenie_odborne_prehliadky_skusky_opravy_el_zariadeni.jpg";
import t05 from "@/assets/certifikaty/thumbs/05_Opravnenie_vyroba_elektrickych_rozvadzacov.jpg";
import t06 from "@/assets/certifikaty/thumbs/06_Osvedcenie_prehliadky_skusky_el_zariadeni_bleskozvody.jpg";
import t07 from "@/assets/certifikaty/thumbs/07_Licencia_prevadzkovanie_technickej_sluzby.jpg";
import t08 from "@/assets/certifikaty/thumbs/08_Certifikat_montaz_kablovych_suborov_Raychem.jpg";
import t09 from "@/assets/certifikaty/thumbs/09_Osvedcenie_odborna_sposobilost_elektroenergetika.jpg";
import t10 from "@/assets/certifikaty/thumbs/10_Osvedcenie_odborna_sposobilost_tepelna_energetika.jpg";
import t11 from "@/assets/certifikaty/thumbs/11_Opravnenie_vyroba_technickych_elektrickych_zariadeni.jpg";
import t12 from "@/assets/certifikaty/thumbs/12_Certifikat_projektovanie_vyroba_vyhradenych_zariadeni.jpg";

type Group = "kvalita" | "opravnenia" | "osvedcenia";

const groups: { id: Group | "all"; label: string }[] = [
  { id: "all", label: "Všetky" },
  { id: "kvalita", label: "Kvalita" },
  { id: "opravnenia", label: "Oprávnenia" },
  { id: "osvedcenia", label: "Osvedčenia a certifikácie" },
];

const groupLabel: Record<Group, string> = {
  kvalita: "Kvalita",
  opravnenia: "Oprávnenia",
  osvedcenia: "Osvedčenia a certifikácie",
};

type Certificate = {
  id: string;
  file: string;
  thumb: string;
  w: number;
  h: number;
  title: string;
  group: Group;
  note?: string;
};

// Nový certifikát = nový riadok v tomto poli.
const certificates: Certificate[] = [
  { id: "01", file: iso9001, thumb: t01, w: 453, h: 640, title: "Certifikát ISO 9001:2008", group: "kvalita", note: "Certifikát je k dispozícii aj v anglickom a nemeckom jazyku na požiadanie." },
  { id: "04", file: c04, thumb: t04, w: 454, h: 640, title: "Oprávnenie na odborné prehliadky, skúšky a opravy el. zariadení", group: "opravnenia" },
  { id: "05", file: c05, thumb: t05, w: 453, h: 640, title: "Oprávnenie na výrobu elektrických rozvádzačov", group: "opravnenia" },
  { id: "06", file: c06, thumb: t06, w: 454, h: 640, title: "Osvedčenie na prehliadky a skúšky el. zariadení vrátane bleskozvodov", group: "opravnenia" },
  { id: "07", file: c07, thumb: t07, w: 453, h: 640, title: "Licencia na prevádzkovanie technickej služby", group: "opravnenia" },
  { id: "11", file: c11, thumb: t11, w: 453, h: 640, title: "Oprávnenie na výrobu technických elektrických zariadení", group: "opravnenia" },
  { id: "12", file: c12, thumb: t12, w: 453, h: 640, title: "Certifikát na projektovanie a výrobu vyhradených zariadení", group: "opravnenia" },
  { id: "08", file: c08, thumb: t08, w: 453, h: 640, title: "Certifikát pre montáž káblových súborov Raychem", group: "osvedcenia" },
  { id: "09", file: c09, thumb: t09, w: 480, h: 335, title: "Osvedčenie o odbornej spôsobilosti v elektroenergetike", group: "osvedcenia" },
  { id: "10", file: c10, thumb: t10, w: 480, h: 339, title: "Osvedčenie o odbornej spôsobilosti v tepelnej energetike", group: "osvedcenia" },
];

const pills = [
  { icon: Award, text: "ISO 9001" },
  { icon: FileText, text: `${certificates.length} dokumentov` },
  { icon: ShieldCheck, text: "Oprávnené revízie do 52 kV" },
];

type RevealType = ComponentType<{ children: ReactNode; delay?: number; className?: string }>;

export function Certificates({ Reveal }: { Reveal: RevealType }) {
  const [filter, setFilter] = useState<Group | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const visible = filter === "all" ? certificates : certificates.filter((c) => c.group === filter);
  const current = openIndex !== null ? visible[openIndex] : null;
  const go = (d: number) =>
    setOpenIndex((i) => (i === null ? i : (i + d + visible.length) % visible.length));

  return (
    <section id="certifikaty" className="border-t border-border py-20 pb-28 md:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="eyebrow-line font-mono text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Certifikáty a oprávnenia
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl uppercase italic leading-[1] md:text-5xl">
            Papiere, ktoré <span className="text-primary">obstoja pri kontrole</span>
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            ISO 9001, oprávnenia na revízie a výrobu rozvádzačov, odborná spôsobilosť a certifikácie výrobcov.
            Kliknutím si zobrazíte celý dokument.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map((p) => (
              <div key={p.text} className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5">
                <p.icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
          <div role="group" aria-label="Filter dokumentov" className="mt-8 flex flex-wrap gap-2">
            {groups.map((g) => {
              const active = filter === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(g.id)}
                  className={`rounded-full border px-4 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((c, i) => {
            const Icon = c.group === "kvalita" ? Award : ShieldCheck;
            return (
              <Reveal key={c.id} delay={(i % 4) * 70} className="h-full">
                <div className="flex h-full flex-col">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    aria-label={`Zobraziť dokument: ${c.title}`}
                    className="card-lift group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card text-left hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-secondary p-4">
                      <img
                        src={c.thumb}
                        width={c.w}
                        height={c.h}
                        loading="lazy"
                        decoding="async"
                        alt={`${c.title} – ELEKTRO-MLM`}
                        className="h-full w-full object-contain shadow-sm transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all duration-300 group-hover:bg-foreground/25 group-hover:opacity-100">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                          <ZoomIn className="h-5 w-5" />
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 border-t border-border p-5">
                      <h3 className="text-sm font-semibold uppercase leading-snug">{c.title}</h3>
                      <span className="mt-auto inline-flex items-center gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/25">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {groupLabel[c.group]}
                      </span>
                    </div>
                  </button>
                  {c.note && <p className="mt-2 px-1 text-xs text-muted-foreground">{c.note}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <DialogPrimitive.Root open={current !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(1);
              if (e.key === "ArrowLeft") go(-1);
            }}
            onPointerDownOutside={() => setOpenIndex(null)}
            className="fixed inset-0 z-[61] flex flex-col text-background outline-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpenIndex(null);
            }}
          >
            {current && (
              <>
                <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                      {(openIndex ?? 0) + 1} / {visible.length}
                    </p>
                    <DialogPrimitive.Title className="truncate font-sans text-sm font-semibold uppercase sm:text-base">
                      {current.title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Description className="sr-only">
                      Náhľad dokumentu. Šípkami prechádzate medzi dokumentmi, Esc zatvorí.
                    </DialogPrimitive.Description>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={current.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden items-center gap-2 rounded-full border border-background/30 px-4 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] hover:border-primary hover:text-primary sm:inline-flex"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Otvoriť v plnej veľkosti
                    </a>
                    <DialogPrimitive.Close
                      aria-label="Zavrieť"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary"
                    >
                      <X className="h-5 w-5" />
                    </DialogPrimitive.Close>
                  </div>
                </div>

                <div
                  className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto px-2 pb-4 sm:px-16"
                  style={{ touchAction: "pan-x pan-y pinch-zoom" }}
                  onClick={(e) => {
                    if (e.target === e.currentTarget) setOpenIndex(null);
                  }}
                  onTouchStart={(e) => {
                    touchStart.current = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
                  }}
                  onTouchEnd={(e) => {
                    const s = touchStart.current;
                    touchStart.current = null;
                    if (!s || (window.visualViewport && window.visualViewport.scale > 1.05)) return;
                    const dx = e.changedTouches[0].clientX - s.x;
                    const dy = e.changedTouches[0].clientY - s.y;
                    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
                  }}
                >
                  <img
                    key={current.id}
                    src={current.file}
                    alt={`${current.title} – ELEKTRO-MLM`}
                    className="max-h-full max-w-full rounded-md bg-background object-contain shadow-2xl"
                  />
                </div>

                <div className="flex items-center justify-center gap-3 pb-5">
                  <button type="button" onClick={() => go(-1)} aria-label="Predchádzajúci dokument" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/10 hover:bg-primary">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <a
                    href={current.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-background/30 px-4 py-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] sm:hidden"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Plná veľkosť
                  </a>
                  <button type="button" onClick={() => go(1)} aria-label="Ďalší dokument" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/10 hover:bg-primary">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
}
