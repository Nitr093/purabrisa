/* ─────────────────────────────────────────────
   Footer — PURA BRISA
   Cambios vs versión anterior:
   • Ícono WhatsApp clicable junto al teléfono
   • Ícono sobre (✉) junto al email
   • Ícono mundo (🌐) junto a la ubicación
   • "Trabajá con nosotros" centrado
   • Typo corregido: "Brusa" → "Brisa"
───────────────────────────────────────────── */

/* ── Íconos inline SVG ── */

/** WhatsApp — relleno sólido, estilo oficial */
function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** Sobre de correo */
function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/** Globo terráqueo / ubicación */
function GlobeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">

        {/* ── Columna 1: Marca ── */}
        <div>
          <p className="font-display text-lg font-bold">PURA BRISA</p>
          <p className="mt-2 text-sm text-paper/70">
            Limpieza corporativa profesional para oficinas, obras, consorcios y particulares.
          </p>
        </div>

        {/* ── Columna 2: Contacto con íconos ── */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-amber">
            Contacto
          </p>
          <ul className="mt-3 space-y-2.5 text-sm text-paper/80">

            {/* Teléfono + botón WhatsApp
              */}
            <li className="flex items-center gap-2.5">
              <a
                href="https://wa.me/5492257681251"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribinos por WhatsApp"
                className="flex items-center gap-1.5 rounded-md bg-[#25D366]/15 px-2.5 py-1 text-[#25D366] transition-colors hover:bg-[#25D366]/25"
              >
                <WhatsAppIcon />
                {/* número de teléfono */}
                <span className="font-medium">+54 9 2257 68-1251</span>
              </a>
            </li>

            {/* Email con ícono sobre */}
            <li className="flex items-center gap-2">
              <span className="text-amber/70">
                <MailIcon />
              </span>
              <a
                href="mailto:info@purabrisa.com.ar"
                className="hover:text-amber"
              >
                info@purabrisa.com.ar
              </a>
            </li>

            {/* Ubicación con ícono mundo */}
            <li className="flex items-center gap-2">
              <span className="text-amber/70">
                <GlobeIcon />
              </span>
              <span>San Bernardo del Tuyu, Buenos Aires</span>
            </li>
          </ul>
        </div>

        {/* ── Columna 3: Trabajá con nosotros — texto centrado ── */}
        <div className="flex flex-col items-center text-center">
          <p className="w-full font-mono text-xs uppercase tracking-widest text-amber">
            Trabajá con nosotros
          </p>
          <p className="mt-3 text-sm text-paper/80">
            ¿Querés sumarte a nuestro equipo?
            <br></br>          
            Envianos tu CV a:
          </p>
          <a
            href="mailto:rrhh@purabrisa.com.ar"
            className="mt-1.5 inline-block text-sm font-semibold text-paper hover:text-amber"
          >
            rrhh@purabrisa.com.ar
          </a>
        </div>
      </div>

      {/* ── Copyright — typo corregido: "Brusa" → "Brisa" ── */}
      <div className="border-t border-paper/10 px-6 py-5">
        <p className="mx-auto max-w-6xl text-center text-xs text-paper/60">
          © {year} Pura Brisa Limpieza Corporativa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
