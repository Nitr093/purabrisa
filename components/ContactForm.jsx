"use client";

import { useState } from "react";

const ESTADO_INICIAL = {
  nombre: "",
  empresa: "",
  email: "",
  tipoServicio: "Oficinas y Corporativos",
  mensaje: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(ESTADO_INICIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setFormData(ESTADO_INICIAL);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="text-sm font-medium text-ink">
            Nombre y apellido
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-teal focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="empresa" className="text-sm font-medium text-ink">
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            value={formData.empresa}
            onChange={handleChange}
            placeholder="Si sos particular deja en blanco"
            className="rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-teal focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-teal focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="tipoServicio" className="text-sm font-medium text-ink">
            Tipo de servicio
          </label>
          <select
            id="tipoServicio"
            name="tipoServicio"
            value={formData.tipoServicio}
            onChange={handleChange}
            className="rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink focus:border-teal focus:outline-none"
          >
            <option>Oficinas y Corporativos</option>
            <option>Final de Obra</option>
            <option>Consorcio</option>
            <option>Particular</option>
            <option>Institucion</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-sm font-medium text-ink">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Contanos qué necesitas"
          className="rounded-md border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-teal focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar consulta"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-sage" role="status">
          ¡Gracias! Recibimos tu consulta y te vamos a contactar a la brevedad.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm font-medium text-red-600" role="alert">
          {errorMsg || "Ocurrió un error al enviar el formulario. Intentá de nuevo."}
        </p>
      )}
    </form>
  );
}
