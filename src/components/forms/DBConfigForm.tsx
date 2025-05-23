"use client";

import { useState } from "react";
import axios from "axios";

export default function DbConfigForm() {
  const [form, setForm] = useState({
    host: "",
    user: "",
    password: "",
    database: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("/api/dbconfig", form);
      setStatus("success");
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow space-y-4">
      <h2 className="text-xl font-bold">Configurar Conexión a Base de Datos</h2>

      <input
        type="text"
        name="host"
        placeholder="Host"
        value={form.host}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        value={form.user}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="database"
        placeholder="Nombre de la base de datos"
        value={form.database}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Guardar Configuración"}
      </button>

      {status === "success" && <p className="text-green-600">✅ Configuración guardada con éxito.</p>}
      {status === "error" && <p className="text-red-600">❌ Error al guardar la configuración.</p>}
    </form>
  );
}
