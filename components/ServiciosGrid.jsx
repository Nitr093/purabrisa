"use client";

import { useState, useCallback } from "react";

/* ─────────────────────────────────────────────
   ÍCONOS DE SERVICIOS
───────────────────────────────────────────── */

function OfficeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2"  y="9"  width="13" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
      <rect x="9"  y="3"  width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.12"/>
      <rect x="4"  y="18" width="4"  height="4"  rx="0.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <rect x="4"  y="11" width="2"  height="2"  rx="0.3" fill="currentColor"/>
      <rect x="8"  y="11" width="2"  height="2"  rx="0.3" fill="currentColor"/>
      <rect x="4"  y="15" width="2"  height="2"  rx="0.3" fill="currentColor"/>
      <rect x="12" y="5"  width="2"  height="2"  rx="0.3" fill="currentColor"/>
      <rect x="16" y="5"  width="2"  height="2"  rx="0.3" fill="currentColor"/>
      <rect x="12" y="9"  width="2"  height="2"  rx="0.3" fill="currentColor"/>
    </svg>
  );
}

function SkyscraperIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Torre principal */}
      <rect
        x="8" y="2" width="8" height="20"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Antena */}
      <line x1="12" y1="2" x2="12" y2="0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Ventanas — 2 columnas, 3 filas */}
      <rect x="9.5"  y="4.5"  width="2" height="2" rx="0.3" fill="currentColor"/>
      <rect x="12.5" y="4.5"  width="2" height="2" rx="0.3" fill="currentColor"/>
      <rect x="9.5"  y="9"    width="2" height="2" rx="0.3" fill="currentColor"/>
      <rect x="12.5" y="9"    width="2" height="2" rx="0.3" fill="currentColor"/>
      <rect x="9.5"  y="13.5" width="2" height="2" rx="0.3" fill="currentColor"/>
      <rect x="12.5" y="13.5" width="2" height="2" rx="0.3" fill="currentColor"/>
      {/* Puerta de entrada */}
      <rect x="10.5" y="18" width="3" height="4" rx="0.3" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      {/* Línea de suelo */}
      <line x1="5" y1="22" x2="19" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1"/>
      <path d="M2 5 L12 2 L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <rect x="10" y="17" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
      <rect x="5"  y="8"  width="3" height="3" rx="0.3" fill="currentColor"/>
      <rect x="11" y="8"  width="3" height="3" rx="0.3" fill="currentColor"/>
      <rect x="17" y="8"  width="3" height="3" rx="0.3" fill="currentColor"/>
      <rect x="5"  y="13" width="3" height="2" rx="0.3" fill="currentColor"/>
      <rect x="17" y="13" width="3" height="2" rx="0.3" fill="currentColor"/>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Techo / tejado */}
      <path
        d="M3 11 L12 3 L21 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Paredes */}
      <rect
        x="4" y="11" width="16" height="11"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Puerta */}
      <rect
        x="9.5" y="16" width="5" height="6"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
      {/* Ventana izquierda */}
      <rect
        x="5.5" y="13" width="3" height="3"
        rx="0.3"
        fill="currentColor"
      />
      {/* Ventana derecha */}
      <rect
        x="15.5" y="13" width="3" height="3"
        rx="0.3"
        fill="currentColor"
      />
    </svg>
  );
}


/* ─────────────────────────────────────────────
   ÍCONOS DE FLECHAS DEL CARRUSEL
───────────────────────────────────────────── */

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   DATOS — Reemplazá "TU_CLOUD_NAME" por tu
   Cloud Name de Cloudinary en cada URL.
   Cada servicio acepta N imágenes en el array.
───────────────────────────────────────────── */

const SERVICIOS = [
  {
    titulo: "Oficinas y Corporativos",
    descripcion:
      "Limpieza diaria o periódica de oficinas, recepciones y salas de reunión, con protocolos pensados para no interrumpir tu jornada laboral.",
    Icon: OfficeIcon,
    accentColor: "#2F6B76", // teal
    imagenes: [
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1783093572/WhatsApp_Image_2026-06-27_at_14.47.44_wbjxvf.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1759200928/goku_wallpaper_elunhc.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1756401116/kz8wt0rsw36sxqjc3idg.jpg",
    ],
  },
  {
    titulo: "Final de Obra",
    descripcion:
      "Retiro de residuos de construcción, desengrasado de superficies y pulido final para entregar el espacio listo para habitar.",
    Icon: SkyscraperIcon,
    accentColor: "#F2A93B", // amber
    imagenes: [
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1783093643/WhatsApp_Image_2026-06-19_at_18.26.23_d3curf.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1756747288/u2ckcuifdyxr4otafcsc.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1769624653/clo6xysnjmce2pgzcdty.png",      
    ],
  },
  {
    titulo: "Consorcios",
    descripcion:
      "Mantenimiento de palieres, escaleras, ascensores y espacios comunes, con supervisión periódica del administrador del edificio.",
    Icon: BuildingIcon,
    accentColor: "#5C8D6B", // sage
    imagenes: [      
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1783093776/WhatsApp_Image_2026-06-16_at_15.06.42_y1boe9.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1759241407/wallpaperflare.com_wallpaper_re93yk.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1759200929/12966_gumpjj.jpg",
    ],
  },
  {
    titulo: "Particulares",
    descripcion:
      "Servicio de limpieza para casas y departamentos, con horarios flexibles y un equipo confiable enfocado en el cuidado y la desinfección de tu hogar.",
    Icon: HomeIcon,
    accentColor: "#5C8D6B", // sage
    imagenes: [      
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1783093776/WhatsApp_Image_2026-06-16_at_15.06.42_y1boe9.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1759241407/wallpaperflare.com_wallpaper_re93yk.jpg",
      "https://res.cloudinary.com/dba5qhf2v/image/upload/v1759200929/12966_gumpjj.jpg",
    ],
  },
];

/* ─────────────────────────────────────────────
   TARJETA CON CARRUSEL INDIVIDUAL
   Cada tarjeta gestiona su propio índice de imagen.
───────────────────────────────────────────── */

function CarruselCard({ servicio }) {
  const [current, setCurrent] = useState(0);
  const total = servicio.imagenes.length;
  const { Icon } = servicio;

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + total) % total),
    [total]
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % total),
    [total]
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-card">
      {/* ── Área del carrusel de imágenes ── */}
      <div className="group/carousel relative h-52 overflow-hidden bg-ink/5">
        {/* Stack de imágenes superpuestas — cross-fade por opacidad */}
        {servicio.imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${servicio.titulo} — imagen ${i + 1} de ${total}`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.55s ease-in-out",
              zIndex: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* ── Flechas prev / next ── */}
        {/* Contenedor transparente para clicks sin bloquear el imagen */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-3">
          <button
            onClick={prev}
            aria-label="Imagen anterior"
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 opacity-0 shadow backdrop-blur-sm transition-all duration-200 hover:bg-ink/80 hover:scale-105 group-hover/carousel:opacity-100"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Imagen siguiente"
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 opacity-0 shadow backdrop-blur-sm transition-all duration-200 hover:bg-ink/80 hover:scale-105 group-hover/carousel:opacity-100"
          >
            <ChevronRight />
          </button>
        </div>

        {/* ── Indicadores de puntos (dots) ── */}
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5" role="tablist" aria-label="Imágenes del servicio">
          {servicio.imagenes.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Imagen ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "white" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>

        {/* Contador esquina superior derecha */}
        <span className="absolute right-3 top-3 z-10 rounded-full bg-ink/50 px-2 py-0.5 font-mono text-[10px] text-white backdrop-blur-sm">
          {current + 1}/{total}
        </span>
      </div>

      {/* ── Contenido de la tarjeta ── */}
      <div className="flex flex-1 flex-col p-6">
        {/* Fila: ícono + título */}
        <div className="mb-3 flex items-center gap-3">
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
            style={{
              color: servicio.accentColor,
              background: `${servicio.accentColor}18`,
            }}
          >
            <Icon />
          </span>
          <h3 className="font-display text-base font-bold leading-tight text-ink">
            {servicio.titulo}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate">{servicio.descripcion}</p>

        {/* Acento de color inferior */}
        <div
          className="mt-4 h-0.5 w-10 rounded-full opacity-50"
          style={{ background: servicio.accentColor }}
        />
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   GRID PRINCIPAL — exportado a page.js
───────────────────────────────────────────── */

export default function ServiciosGrid() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2">
      {SERVICIOS.map((servicio) => (
        <CarruselCard key={servicio.titulo} servicio={servicio} />
      ))}
    </div>
  );
}
