import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
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

  return (
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
  );
}
