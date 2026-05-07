import { clientLogos } from "@/data/clients";

function LogoRow({ suffix }: { suffix: string }) {
  return (
    <>
      {clientLogos.map((client, i) => (
        <div
          key={`${suffix}-${i}`}
          className="relative flex h-10 w-[124px] shrink-0 items-center justify-center md:h-12 md:w-[148px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- logos tiers PNG/SVG arbitraires */}
          <img
            src={client.src}
            alt={client.alt}
            className="max-h-10 max-w-[132px] object-contain opacity-55 grayscale transition-[opacity,filter,transform] duration-300 md:max-h-12 md:max-w-[148px] hover:opacity-100 hover:grayscale-0"
            style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
          />
        </div>
      ))}
    </>
  );
}

export function ClientLogoMarquee() {
  return (
    <section
      className="border-y border-[var(--border)] bg-black py-10 md:py-12"
      aria-label="Marques et clients"
    >
      <div className="container-neos mb-8 text-center">
        <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted-dim)]">
          Ils nous ont fait confiance
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent md:w-24"
          aria-hidden
        />

        <div className="marquee-track flex w-max items-center gap-12 md:gap-20">
          <div className="flex items-center gap-12 px-6 md:gap-20 md:px-10">
            <LogoRow suffix="a" />
          </div>
          <div className="flex items-center gap-12 px-6 md:gap-20 md:px-10" aria-hidden>
            <LogoRow suffix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
