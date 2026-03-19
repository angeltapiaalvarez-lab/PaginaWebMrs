import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    edad: "",
    curso: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send message can be connected here later.
  };

  return (
    <section id="contact" className="bg-slate-900 py-12 text-white md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 md:px-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contáctanos</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Solicita información y agenda una primera orientación</h2>
          <p className="text-slate-300">
            Completa el formulario y recibe respuesta con disponibilidad, modalidad de clases y propuesta de acompañamiento.
          </p>

          <div className="space-y-4 pt-4 text-slate-200">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-sky-300" />
              <span>+506 7000-0000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-sky-300" />
              <span className="break-all">profesora.demo@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-sky-300" />
              <span>Clases virtuales y presenciales</span>
            </div>
          </div>
        </div>

        <Card className="rounded-[28px] border-0 bg-white text-slate-900 shadow-2xl">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre del encargado</label>
                  <Input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Ej. Ana López" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teléfono</label>
                  <Input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Ej. 8888-8888" required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Correo electrónico</label>
                  <Input type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="correo@email.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Edad del estudiante</label>
                  <Input name="edad" value={form.edad} onChange={handleChange} placeholder="Ej. 10, 14, 16" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Curso o área de apoyo</label>
                <Input name="curso" value={form.curso} onChange={handleChange} placeholder="Ej. Matemáticas, lectura, tareas" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Mensaje</label>
                <Textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué necesita el estudiante y en qué horario le conviene"
                  className="min-h-[130px]"
                />
              </div>

              <Button type="submit" className="mt-2 rounded-2xl py-6 text-base">
                Enviar solicitud
              </Button>

              {submitted && (
                <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700 mt-4">
                  ¡Gracias! Tu solicitud fue enviada correctamente. Esta demo puede conectarse después a WhatsApp, correo o base de datos.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
