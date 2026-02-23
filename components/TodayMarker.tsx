"use client";

import { useEffect } from "react";

function todayISOInTimeZone(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export default function TodayMarker() {
  useEffect(() => {
    const iso = todayISOInTimeZone("America/Bogota");
    const el = document.querySelector<HTMLElement>(`[data-date="${iso}"]`);
    if (!el) return;

    const isHoliday = el.dataset.holiday === "1";

    el.classList.add("ring-2", "ring-[#003893]/20");
    if (!isHoliday) {
      el.classList.add("border-[#003893]/30", "bg-[#003893]/5");
    }
  }, []);

  return null;
}
