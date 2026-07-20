"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="font-display text-xl font-700 tracking-tight text-ink"
        >
          PURA BRISA
          <span className="ml-2 hidden font-mono text-[11px] font-medium uppercase tracking-widest text-teal sm:inline">
            Limpieza Corporativa
          </span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-light md:inline-block"
        >
          Solicitar cotización
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-ink transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-ink transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-6 bg-ink transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-ink/10 bg-paper px-6 pb-6`}
      >
        <ul className="flex flex-col gap-4 pt-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-base font-medium text-ink/90"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-2 block w-full rounded-md bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
            >
              Solicitar cotización
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
