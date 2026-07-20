import HeroSection from "/components/HeroSection";
import NosotrosCards from "/components/NosotrosCards";
import ServiciosGrid from "/components/ServiciosGrid";
import ContactForm from "/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════
          HERO — parallax 3D + texto flotante
          Ver: components/HeroSection.jsx
      ══════════════════════════════ */}
      <HeroSection />

      {/* ══════════════════════════════
          NOSOTROS
      ══════════════════════════════ */}
      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
          Nosotros
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
          Procesos claros, resultados consistentes
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          Más de una década acompañando a empresas y consorcios con un servicio
          basado en protocolos, no en improvisación.
        </p>
        <NosotrosCards />
      </section>

      {/* ══════════════════════════════
          SERVICIOS
      ══════════════════════════════ */}
      <section id="servicios" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            Servicios
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-ink sm:text-4xl">
            Soluciones a medida de cada espacio
          </h2>
          <ServiciosGrid />
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACTO
      ══════════════════════════════ */}
      <section id="contacto" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">

          {/*
            Panel izquierdo — tarjeta flotante 3D.
            La animación `cardFloat` (globals.css) combina:
              • translateY: sube y baja
              • perspective + rotateX: micro-inclinación en el eje X
              • box-shadow: la sombra crece/decrece sincronizada
            Esto genera la ilusión de relieve y profundidad.
          */}
          <div
            className="self-start rounded-2xl bg-white p-8"
            style={{
              animation: "cardFloat 5s ease-in-out infinite",
              /* Sombra inicial — la animación la modifica en cada frame */
              boxShadow:
                "0 4px 6px -1px rgba(20,33,61,0.06), 0 10px 25px -5px rgba(20,33,61,0.10), 0 25px 50px -10px rgba(20,33,61,0.18), 0 0 0 1px rgba(20,33,61,0.04)",
            }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Pedí tu cotización sin cargo
            </h2>
            <p className="mt-4 max-w-md text-slate">
              Contanos sobre tu espacio y te respondemos con una propuesta
              ajustada a tu metraje y frecuencia necesaria.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-slate">
              <li>📍 Buenos Aires, Argentina</li>
              <li>📞 +54 11 1234-5678</li>
              <li>✉️ info@purabrisalimpieza.com.ar</li>
            </ul>
          </div>

          {/* Panel derecho — formulario */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
