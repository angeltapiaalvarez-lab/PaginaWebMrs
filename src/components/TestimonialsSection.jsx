import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
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

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-16">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Testimonios</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Lo que dicen los padres y estudiantes</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
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
  );
}
