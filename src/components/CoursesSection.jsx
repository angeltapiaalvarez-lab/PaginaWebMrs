import React, { useMemo } from "react";
import { CheckCircle2 } from "lucide-react";

export default function CoursesSection() {
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

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Áreas de apoyo</p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Clases diseñadas para acompañar su crecimiento académico</h2>
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
  );
}
