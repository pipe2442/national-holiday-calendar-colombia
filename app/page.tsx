import getColombiaHolidays from "../lib/colombiaHolidays";
import TodayMarker from "../components/TodayMarker";

function daysInMonthUTC(year: number, monthIndex0: number) {
  return new Date(Date.UTC(year, monthIndex0 + 1, 0)).getUTCDate();
}

function weekdayMondayFirstUTC(date: Date) {
  // JS: 0=Sun..6=Sat -> 0=Mon..6=Sun
  return (date.getUTCDay() + 6) % 7;
}

function isoToUTCDate(iso: string) {
  const [y, m, d] = iso.split("-").map((n) => Number(n));
  return new Date(Date.UTC(y, m - 1, d));
}


export default function Home() {
  const year = 2026;
  const holidays = getColombiaHolidays(year);

  const holidayByDate = new Map<string, string[]>();
  for (const h of holidays) {
    const existing = holidayByDate.get(h.date) ?? [];
    holidayByDate.set(h.date, [...existing, h.name]);
  }

  const monthNames = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const weekdays = ["L", "M", "X", "J", "V", "S", "D"];

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Días festivos en Colombia — ${year}`,
    description: "Listado de días festivos nacionales de Colombia para 2026.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: holidays.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Event",
          name: h.name,
          startDate: h.date,
          location: { "@type": "Country", name: "Colombia" },
        },
      })),
    },
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuántos festivos hay en Colombia en ${year}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `En Colombia hay ${holidays.length} días festivos nacionales oficiales en ${year}.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Qué significa que un festivo se mueva al lunes?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Algunos festivos se trasladan al siguiente lunes según la Ley 51 de 1983 (Ley Emiliani), para crear puentes festivos.",
        },
      },
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Festivos Colombia 2026",
    url: "https://festivoscolombia2026.com/",
    inLanguage: "es-CO",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://festivoscolombia2026.com/",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_0%_0%,#fff3c4_0%,transparent_55%),radial-gradient(900px_circle_at_100%_10%,#c7e7ff_0%,transparent_52%),radial-gradient(900px_circle_at_70%_100%,#ffd2d2_0%,transparent_55%),linear-gradient(#ffffff,#f6f7fb)]">
      <main className="mx-auto max-w-7xl px-5 py-16">
        <header className="rounded-3xl border border-black/5 bg-white/90 p-8 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-[#0b1220]">Festivos Colombia {year}</h1>
              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-zinc-600">
                En este calendario de festivos Colombia {year} puedes consultar, mes a mes, los días feriados oficiales y los puentes festivos que se forman cuando algunas celebraciones se trasladan al lunes según la ley colombiana.
                El objetivo es que encuentres rápido las fechas de descanso, confirmes si hoy es día laboral o festivo y planifiques con anticipación vacaciones, viajes, trámites o actividades.
                Además, incluimos una lista completa de días festivos {year} en Colombia para que puedas copiar fechas, revisar nombres y tener una referencia clara durante todo el año.
              </p>
            </div>
          </div>

          <section aria-label="Información del calendario" className="mt-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 lg:col-span-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-900 ring-1 ring-amber-200">📅</div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Total de festivos en Colombia {year}</div>
                    <div className="mt-1 text-lg font-extrabold text-[#0b1220]">
                      {holidays.length} <span className="text-sm font-semibold text-zinc-600">días oficiales</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-4 lg:col-span-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-[#0b1220] ring-1 ring-black/5">🇨🇴</div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">País</div>
                    <div className="mt-1 text-lg font-extrabold text-[#0b1220]">Colombia</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-4 sm:col-span-2 lg:col-span-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-900 ring-1 ring-blue-200">💡</div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Tip</div>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">Pasa el mouse o toca una fecha para ver el nombre completo del festivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-900 ring-1 ring-amber-200">
              <span className="h-4 w-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-600" aria-hidden="true" /> Festivo
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-blue-900 ring-1 ring-blue-200">
              <span className="h-3 w-3 rounded-md border border-[#003893]/30 bg-[#003893]/10" aria-hidden="true" /> Hoy
            </span>
          </div>

          <nav aria-label="Ir a un mes" className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Ir a mes</div>
            <div className="mt-3 -mx-2 flex gap-2 overflow-x-auto px-2 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {monthNames.map((m, idx) => (
                <a
                  key={m}
                  href={`#mes-${idx + 1}`}
                  className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-[#0b1220] shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#003893]/30"
                >
                  <span className="capitalize">{m}</span>
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section
          aria-label={`Calendario de festivos de Colombia ${year}`}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <h2 className="sr-only">Calendario de festivos 2026 en Colombia</h2>
          {monthNames.map((monthName, monthIndex0) => {
            const days = daysInMonthUTC(year, monthIndex0);
            const first = new Date(Date.UTC(year, monthIndex0, 1));
            const leading = weekdayMondayFirstUTC(first);
            const totalCells = leading + days;
            const rows = Math.ceil(totalCells / 7);
            const cellCount = rows * 7;

            return (
              <section
                key={`${year}-${monthIndex0}`}
                id={`mes-${monthIndex0 + 1}`}
                className="rounded-3xl border border-black/5 bg-white shadow-sm"
                aria-label={`Mes de ${monthName} ${year}`}
              >
                <div className="flex items-baseline justify-between gap-3 border-b border-zinc-100 bg-gradient-to-r from-[#0b1220] to-[#13213f] px-5 py-3">
                  <h2 className="text-lg font-semibold capitalize tracking-wide text-white">{monthName}</h2>
                  <div className="text-xs font-medium text-white/80">{year}</div>
                </div>

                <div className="px-3 pb-3 pt-2">
                  <div className="grid grid-cols-7 gap-1 px-1.5 pb-1.5 text-[10px] font-semibold text-zinc-500">
                    {weekdays.map((d) => (
                      <div key={d} className="text-center">{d}</div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: cellCount }).map((_, idx) => {
                      const col = idx % 7;
                      const isWeekendColumn = col === 5 || col === 6;
                      const dayNum = idx - leading + 1;
                      if (dayNum <= 0 || dayNum > days) {
                        return (
                          <div
                            key={idx}
                            className={
                              "h-[42px] sm:h-[48px] rounded-xl " +
                              (isWeekendColumn ? "bg-zinc-100/60" : "bg-zinc-50")
                            }
                            aria-hidden="true"
                          />
                        );
                      }

                      const iso = `${year}-${String(monthIndex0 + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
                      const names = holidayByDate.get(iso) ?? [];
                      const isHoliday = names.length > 0;
                      // Today is highlighted client-side to avoid needing redeploys.
                      const isToday = false;

                      const labelDate = isoToUTCDate(iso).toLocaleDateString("es-CO", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      });
                      const aria = isHoliday ? `${labelDate}. Festivo: ${names.join(", ")}.` : labelDate;

                      return (
                        <article
                          key={iso}
                          aria-label={aria}
                          tabIndex={isHoliday ? 0 : -1}
                          data-date={iso}
                          data-holiday={isHoliday ? "1" : "0"}
                          className={
                            "relative h-9 sm:h-10 rounded-xl border px-2 py-1 transition-colors " +
                            (isHoliday
                              ? "group cursor-help border-amber-200 bg-amber-50 hover:bg-amber-100/60 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
                              : "border-zinc-200 bg-white hover:bg-zinc-50") +
                            (isWeekendColumn && !isHoliday ? " bg-zinc-50/60" : "") +
                            (isToday ? "" : "")
                          }
                        >
                          {isHoliday ? (
                            <span
                              aria-hidden="true"
                              className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-amber-400 to-amber-600"
                            />
                          ) : null}
                          <div className="flex items-start justify-between gap-2">
                            <div className={"text-[13px] font-semibold " + (isHoliday ? "text-amber-900" : "text-[#0b1220]")}>{dayNum}</div>
                          </div>

                          {isHoliday ? (
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute left-1/2 bottom-full z-30 mb-2 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 origin-bottom rounded-xl border border-white/10 bg-[#0b1220] p-3 text-[13px] leading-5 text-white shadow-2xl opacity-0 transition duration-150 ease-out group-hover:opacity-100 group-focus:opacity-100"
                            >
                              <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/10 bg-[#0b1220]" />
                              <div className="font-semibold text-white/90">{names.length > 1 ? "Festivos" : "Festivo"}</div>
                              <div className="mt-1 whitespace-normal break-words">{names.join(" · ")}</div>
                            </div>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </section>

        <section aria-labelledby="holidays-title" className="mt-10 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 id="holidays-title" className="text-2xl font-semibold text-[#0b1220]">Lista de días festivos oficiales</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">También lo dejamos en texto para facilitar búsqueda e indexación.</p>

          <ol className="mt-5 divide-y divide-zinc-100">
            {holidays.map((h) => (
              <li
                key={h.date}
                id={`festivo-${h.date}`}
                className="scroll-mt-24 flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline"
              >
                <div className="text-sm text-zinc-600">
                  {isoToUTCDate(h.date).toLocaleDateString("es-CO", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="text-base font-semibold text-[#0b1220]">{h.name}</div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="bridges-title" className="mt-10 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <h2 id="bridges-title" className="text-2xl font-semibold text-[#0b1220]">Puentes festivos en 2026</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            En Colombia, varios festivos se observan el lunes (Ley 51 de 1983), lo que facilita planear puentes festivos. En este calendario puedes identificar esos lunes y organizar descansos de fin de semana largo.
          </p>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <TodayMarker />

        <footer className="mt-10 text-sm text-zinc-600">
          <p>Solo Colombia ({year}). Festivos movibles y Pascua calculados programáticamente.</p>
        </footer>
      </main>
    </div>
  );
}
