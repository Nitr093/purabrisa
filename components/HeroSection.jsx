"use client";

import { useState, useRef, useCallback } from "react";

/**
 * HeroSection — efecto parallax 3D sin librerías externas.
 *
 * Cómo funciona la ilusión de profundidad:
 *   1. El fondo se mueve CONTRA el cursor (−18px) → se aleja.
 *   2. El contenido de texto se mueve CON el cursor (+22px) → se acerca.
 *   3. La sombra del h1 se desplaza dinámicamente → refuerza el volumen.
 *   4. Un CSS @keyframes "heroFloat" agrega un bob suave vertical independiente.
 *
 * Separar la animación CSS (wrapper externo) del parallax JS (wrapper interno)
 * permite que ambos convivan sin conflictos de transform.
 */
export default function HeroSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  /* Normaliza la posición del cursor a rango [-0.5, 0.5] */
  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  const handleMouseLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  /* Estilos pre-calculados para no recalcular en cada render de hijo */
  const bgTransform = {
    backgroundImage:
      "url('https://res.cloudinary.com/dba5qhf2v/image/upload/v1783093273/Gemini_Generated_Image_s3b3as3b3as3b3as_vftsna.jpg')",
    /* Escala 1.12 da margen para el movimiento sin mostrar bordes */
    transform: `translate(${pos.x * -18}px, ${pos.y * -18}px) scale(1.12)`,
    transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "transform",
  };

  const contentTransform = {
    transform: `translate(${pos.x * 22}px, ${pos.y * 22}px)`,
    transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "transform",
  };

  /* La sombra del h1 se mueve como si la luz viniera del cursor */
  const h1Shadow = `
    ${pos.x * -8}px ${pos.y * -6}px 30px rgba(0,0,0,0.65),
    ${pos.x * -3}px ${pos.y * -3}px 10px rgba(0,0,0,0.4)
  `;

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* ── Capa 1: Fondo — más profundo, movimiento contra el cursor ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={bgTransform}
      />

      {/* ── Capa 2: Overlay oscuro — fijo, no se mueve ── */}
      <div className="absolute inset-0 bg-ink/75" />

      {/*
        ── Capa 3: Contenido flotante ──

        IMPORTANTE — dos wrappers separados:
          • Externo: CSS @keyframes heroFloat (sube/baja suave).
          • Interno: transform JS por mouse (parallax horizontal/vertical).
        
        Si aplicásemos ambos al mismo elemento, el JS `transform`
        sobreescribiría el CSS @keyframes. Con dos elementos anidados
        el navegador compone ambas transformaciones automáticamente.
      */}
      <div
        className="relative w-full"
        style={{ animation: "heroFloat 4.5s ease-in-out infinite" }}
      >
        <div
          className="mx-auto max-w-6xl px-6 py-24"
          style={contentTransform}
        >
          {/* Label — primera línea */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            Limpieza profesional · Buenos Aires
          </p>

          {/* Título principal — tiene la sombra dinámica para máximo volumen */}
          <h1
            className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-paper sm:text-5xl md:text-6xl"
            style={{ textShadow: h1Shadow }}
          >
            Excelencia en Limpieza Corporativa
          </h1>

          <p className="mt-5 max-w-xl text-base text-paper/85 sm:text-lg">
            Equipos capacitados, supervisión constante y productos ecológicos
            para que tu oficina, obra o consorcio luzca impecable todos los días.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="rounded-md bg-amber px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber-dark"
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="rounded-md border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
            >
              Ver servicios
            </a>
          </div>

          {/* Insignia */}
          <div className="mt-12 inline-flex -rotate-2 items-center gap-2 rounded border border-dashed border-paper/40 bg-paper/10 px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper backdrop-blur-sm">
            ✓ Supervisión diaria certificada
          </div>
        </div>
      </div>
    </section>
  );
}
