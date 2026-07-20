"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   SVG ÍCONOS de limpieza — todos usan currentColor
   para heredar el color del contenedor padre.
───────────────────────────────────────────── */

/** Escoba con chispas de limpieza */
function BroomIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Palo */}
      <line
        x1="33"
        y1="5"
        x2="18"
        y2="33"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Cabeza de la escoba */}
      <path
        d="M8 30 C8 30 12 39 20 37 C17 30 8 30 8 30Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
      {/* Cerdas */}
      <line x1="10" y1="32"  x2="9"    y2="40"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="13.5" y1="34" x2="13"  y2="41.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="17"   y1="35" x2="17"  y2="43"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20"   y1="34" x2="20.5" y2="41"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Chispas de limpieza — animadas con sparkle-dot */}
      <circle
        cx="39"
        cy="9"
        r="2.2"
        fill="currentColor"
        style={{ animation: "sparkle-dot 1.4s ease-in-out infinite" }}
      />
      <circle
        cx="37"
        cy="17"
        r="1.4"
        fill="currentColor"
        style={{ animation: "sparkle-dot 1.4s ease-in-out 0.5s infinite" }}
      />
      <circle
        cx="41"
        cy="16"
        r="1"
        fill="currentColor"
        style={{ animation: "sparkle-dot 1.4s ease-in-out 0.25s infinite" }}
      />
    </svg>
  );
}

/** Lupa con tilde de verificación — Supervisión */
function MagnifyCheckIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Círculo de la lupa */}
      <circle
        cx="19"
        cy="19"
        r="12"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Brillo interior */}
      <circle cx="15" cy="15" r="4" fill="currentColor" fillOpacity="0.15" />
      {/* Mango */}
      <line
        x1="28"
        y1="28"
        x2="40"
        y2="40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Tilde de control/verificación */}
      <path
        d="M13 19 L17 23 L25 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Hoja con gota de agua — Productos ecológicos */
function LeafDropIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Hoja principal */}
      <path
        d="M34 6C26 6 14 13 14 25L20 32C27 32 34 25 34 17V6Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Nervadura central */}
      <path
        d="M14 25C14 25 21 19 34 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Tallo */}
      <path
        d="M14 25 Q12 30 13 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Gota de agua — flota suavemente */}
      <path
        d="M10 31 Q7 36 11 38 Q15 36 12 31 Q11 28 10 31Z"
        fill="currentColor"
        fillOpacity="0.45"
        style={{ animation: "float 2.5s ease-in-out 0.4s infinite" }}
      />
      {/* Gotita pequeña adicional */}
      <circle
        cx="8"
        cy="29"
        r="1.2"
        fill="currentColor"
        fillOpacity="0.3"
        style={{ animation: "drop 2.2s ease-in-out 0.8s infinite" }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   DATOS DE LAS TARJETAS
───────────────────────────────────────────── */
const CARDS = [
  {
    titulo: "Personal capacitado",
    descripcion:
      "Cada integrante de nuestros equipos pasa por una capacitación específica según el tipo de espacio que va a limpiar.",
    Icon: BroomIcon,
    /** Animación CSS aplicada al wrapper del ícono */
    iconAnimation: "sweep 2.6s ease-in-out infinite",
    iconColorHex: "#2F6B76", // teal
    label: "broom",
  },
  {
    titulo: "Supervisión constante",
    descripcion:
      "Supervisores realizan controles periódicos en sitio para garantizar que cada protocolo se cumpla como corresponde.",
    Icon: MagnifyCheckIcon,
    iconAnimation: "float 3s ease-in-out infinite",
    iconColorHex: "#14213D", // ink
    label: "magnify",
  },
  {
    titulo: "Productos ecológicos",
    descripcion:
      "Trabajamos con insumos de bajo impacto ambiental, seguros para tu equipo y para los espacios que habitan a diario.",
    Icon: LeafDropIcon,
    iconAnimation: "sway 3.2s ease-in-out infinite",
    iconColorHex: "#5C8D6B", // sage
    label: "leaf",
  },
];

/* ─────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────── */
export default function NosotrosCards() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-12 grid gap-8 sm:grid-cols-3">
      {CARDS.map((card, i) => {
        const { Icon } = card;

        return (
          <div
            key={card.titulo}
            style={{
              transitionDelay: `${i * 160}ms`,
              transform: visible ? "translateY(0)" : "translateY(36px)",
              opacity: visible ? 1 : 0,
              transition:
                "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.75s ease-out",
              borderColor: `${card.iconColorHex}28`,
            }}
            className="group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-card"
          >
            {/* Mancha de color suave en la esquina — sutil, como una brisa */}
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: card.iconColorHex }}
              aria-hidden="true"
            />

            {/* Círculo con ícono animado */}
            <div
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${card.iconColorHex}20, ${card.iconColorHex}08)`,
                color: card.iconColorHex,
              }}
            >
              {/* El wrapper recibe la animación de movimiento principal */}
              <div
                style={{
                  animation: card.iconAnimation,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transformOrigin: "center bottom",
                }}
              >
                <Icon />
              </div>
            </div>

            <p className="font-display text-lg font-bold text-ink">{card.titulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">{card.descripcion}</p>
          </div>
        );
      })}
    </div>
  );
}
