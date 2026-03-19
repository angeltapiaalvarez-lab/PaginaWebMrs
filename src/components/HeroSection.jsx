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
          <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur break-words text-center">
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
          className="relative mt-8 lg:mt-0 lg:ml-8"
        >
          {/* Main Photo Wrapper */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] shadow-2xl">
            <img src="/profesora.png" alt="Profesora impartiendo clases" className="h-full w-full object-cover" />
          </div>

          {/* Floating Card */}
          <Card className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 sm:-bottom-8 sm:-left-12 sm:translate-x-0 sm:w-[340px] rounded-[28px] border-0 bg-white/95 shadow-2xl backdrop-blur">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 break-words">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Cupos disponibles
              </div>
              <h2 className="text-xl font-bold text-slate-900">Orientación inicial</h2>
              
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-sky-100 p-2"><Clock className="h-4 w-4 shrink-0 text-sky-600" /></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Horarios flexibles</p>
                    <p className="text-xs text-slate-600 mt-0.5">Opciones para toda la semana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-pink-100 p-2"><Star className="h-4 w-4 shrink-0 text-pink-600" /></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Enfoque dinámico</p>
                    <p className="text-xs text-slate-600 mt-0.5">Práctico, cercano y efectivo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
