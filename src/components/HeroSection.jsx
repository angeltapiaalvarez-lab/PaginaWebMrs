import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-sky-100">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-300 blur-3xl" />
        <div className="absolute top-20 right-10 h-48 w-48 rounded-full bg-sky-300 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-yellow-200 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:gap-10 sm:px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
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
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Aprende con una profesora que inspira, guía y motiva
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Apoyo académico personalizado para fortalecer conocimientos, mejorar notas y desarrollar confianza en el aprendizaje.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button 
              className="rounded-2xl px-6 py-6 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Solicitar información
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
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">Reserva una clase de orientación</h2>
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
  );
}
