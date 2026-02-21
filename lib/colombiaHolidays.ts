// Compute Colombian national holidays for a given year (2026 focused)
// Rules used:
// - Fixed-date holidays stay on the exact date
// - Several religious holidays are moved to the following Monday (Ley 51 de 1983)
// - Easter-based holidays (Holy Thursday, Good Friday, Ascension, Corpus Christi, Sacred Heart)
//   are computed from the date of Easter (Gregorian algorithm)

function easterDate(year: number): Date {
  // Anonymous Gregorian algorithm
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3=March, 4=April
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(year, month - 1, day));
}

function addDays(date: Date, days: number) {
  const d = new Date(date.valueOf());
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function toISO(date: Date) {
  // keep in local (no timezone) ISO YYYY-MM-DD
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function moveToMonday(date: Date) {
  // If not Monday, move to next Monday
  const dow = date.getUTCDay(); // 0=Sun,1=Mon
  if (dow === 1) return date;
  const daysUntilMon = (8 - dow) % 7 || 7;
  return addDays(date, daysUntilMon);
}

export function getColombiaHolidays(year: number) {
  const easter = easterDate(year);

  // Easter-based
  const holyThursday = addDays(easter, -3);
  const goodFriday = addDays(easter, -2);
  const ascension = addDays(easter, 39); // traditionally on Thursday, moved to Monday by law
  const corpusChristi = addDays(easter, 60);
  const sacredHeart = addDays(easter, 68);

  // Fixed dates
  const fixed: Array<[string, number, number]> = [
    ["Año Nuevo", 1, 1],
    ["Día del Trabajo", 5, 1],
    ["Día de la Independencia", 7, 20],
    ["Batalla de Boyacá", 8, 7],
    ["Inmaculada Concepción", 12, 8],
    ["Navidad", 12, 25],
  ];

  const holidays: Array<{ date: string; name: string }> = [];

  // Add fixed
  for (const [name, month, day] of fixed) {
    holidays.push({ date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`, name });
  }

  // Movable religious holidays that by law are observed the following Monday
  const movedReligious: Array<{ name: string; date: Date }> = [];
  movedReligious.push({ name: "Día de los Reyes Magos (Epifanía)", date: new Date(Date.UTC(year, 0, 6)) });
  movedReligious.push({ name: "San José", date: new Date(Date.UTC(year, 2, 19)) });
  // St. Peter and St. Paul (June 29)
  movedReligious.push({ name: "San Pedro y San Pablo", date: new Date(Date.UTC(year, 5, 29)) });
  movedReligious.push({ name: "Ascensión del Señor", date: ascension });
  movedReligious.push({ name: "Corpus Christi", date: corpusChristi });
  movedReligious.push({ name: "Sagrado Corazón", date: sacredHeart });
  movedReligious.push({ name: "La Asunción", date: new Date(Date.UTC(year, 7, 15)) });
  movedReligious.push({ name: "Día de la Raza (Colón)", date: new Date(Date.UTC(year, 9, 12)) });
  movedReligious.push({ name: "Todos los Santos", date: new Date(Date.UTC(year, 10, 1)) });
  movedReligious.push({ name: "Independencia de Cartagena", date: new Date(Date.UTC(year, 10, 11)) });

  for (const h of movedReligious) {
    const observed = moveToMonday(h.date);
    holidays.push({ date: toISO(observed), name: h.name });
  }

  // Holy Week days (keep original days)
  holidays.push({ date: toISO(holyThursday), name: "Jueves Santo" });
  holidays.push({ date: toISO(goodFriday), name: "Viernes Santo" });

  // Sort by date
  holidays.sort((a, b) => a.date.localeCompare(b.date));

  return holidays;
}

export default getColombiaHolidays;
