import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Star, Clock, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DemoLandingProfesora() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    edad: "",
    curso: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const features = useMemo(
    () => [
      {
        icon: BookOpen,
        title: "Clases personalizadas",
        text: "Cada estudiante aprende a su ritmo con actividades adaptadas a su edad y nivel.",
      },
      {
        icon: Users,
        title: "Atención para niños y adolescentes",
        text: "Metodología cercana, dinámica y pensada para generar confianza y motivación.",
      },
      {
        icon: GraduationCap,
        title: "Refuerzo académico",
        text: "Apoyo en tareas, preparación de exámenes y mejora del rendimiento escolar.",
      },
    ],
    []
  );

  const courses = useMemo(
    () => [
      "Apoyo escolar general",
      "Lectura y escritura",
      "Matemáticas básicas e intermedias",
      "Técnicas de estudio",
      "Preparación para exámenes",
      "Acompañamiento de tareas",
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "María G.",
        text: "Mi hijo mejoró mucho su confianza para participar en clases y ahora entiende mejor matemáticas.",
      },
      {
        name: "Carlos R.",
        text: "Excelente trato con adolescentes. Las clases son claras, dinámicas y muy bien explicadas.",
      },
      {
        name: "Andrea P.",
        text: "Nos gustó mucho la paciencia y la forma de enseñar. Se nota el avance desde las primeras semanas.",
      },
    ],
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-sky-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-300 blur-3xl" />
          <div className="absolute top-20 right-10 h-48 w-48 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-yellow-200 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              Clases para niños y adolescentes
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Aprende con una profesora que inspira, guía y motiva
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Apoyo académico personalizado para fortalecer conocimientos, mejorar notas y desarrollar confianza en el aprendizaje.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-6 py-6 text-base">Solicitar información</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                Ver metodología
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">+100</p>
                <p className="text-sm text-slate-600">Estudiantes acompañados</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm text-slate-600">Padres satisfechos</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">1:1</p>
                <p className="text-sm text-slate-600">Atención personalizada</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <Card className="rounded-[28px] border-0 bg-white/90 shadow-2xl backdrop-blur">
              <CardContent className="p-8 md:p-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Cupos disponibles
                </div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Reserva una clase de orientación</h2>
                <p className="mt-3 text-slate-600">
                  Conoce el nivel del estudiante y recibe una propuesta de apoyo adaptada a sus necesidades.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Clock className="mb-2 h-5 w-5" />
                    <p className="font-semibold">Horarios flexibles</p>
                    <p className="text-sm text-slate-600">Opciones entre semana y fines de semana.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <Star className="mb-2 h-5 w-5" />
                    <p className="font-semibold">Metodología dinámica</p>
                    <p className="text-sm text-slate-600">Aprendizaje práctico, cercano y motivador.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">¿Por qué elegir esta profesora?</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Una enseñanza cercana, paciente y efectiva</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full rounded-[24px] border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-sky-100 p-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                    <p className="leading-relaxed text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Áreas de apoyo</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Clases diseñadas para acompañar su crecimiento académico</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              El enfoque combina refuerzo académico, hábitos de estudio y acompañamiento constante para que cada estudiante avance con seguridad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((course) => (
              <div key={course} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <p className="font-medium text-slate-700">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Testimonios</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Lo que dicen los padres y estudiantes</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full rounded-[24px] border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="leading-relaxed text-slate-600">“{item.text}”</p>
                  <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contáctanos</p>
            <h2 className="text-3xl font-bold md:text-4xl">Solicita información y agenda una primera orientación</h2>
            <p className="text-slate-300">
              Completa el formulario y recibe respuesta con disponibilidad, modalidad de clases y propuesta de acompañamiento.
            </p>

            <div className="space-y-4 pt-4 text-slate-200">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sky-300" />
                <span>+506 7000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sky-300" />
                <span>profesora.demo@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-300" />
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
                  <div className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    ¡Gracias! Tu solicitud fue enviada correctamente. Esta demo puede conectarse después a WhatsApp, correo o base de datos.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
