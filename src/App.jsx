import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Bot, Menu, BookOpen } from "lucide-react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-50 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children }) {
  return <div className="rounded-xl border shadow-sm bg-white">{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export default function Ino360Web() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="p-6 flex justify-between items-center border-b shadow-sm">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          INO360
        </h1>
        <Button><Menu className="w-5 h-5" /> Menú</Button>
      </header>

      <main className="px-6 py-10 max-w-5xl mx-auto">
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold mb-4">Plataforma Integral de Inocuidad Alimentaria</h2>
          <p className="text-lg mb-6">Digitalizamos tus procesos HACCP, BPM y POES para que cumplas la normativa sanitaria sin papeles ni estrés.</p>
          <Button className="text-white bg-gradient-to-r from-green-500 to-blue-600 border-0 rounded-full px-6 py-2">
            Solicita una Demo
          </Button>
        </motion.section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <CheckCircle className="text-green-500 w-6 h-6 mb-2" />
              <h3 className="text-xl font-bold mb-2">Registros Digitales</h3>
              <p>Control de temperaturas, limpieza, recepción, producción y más con firma electrónica y seguimiento.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <BookOpen className="text-blue-500 w-6 h-6 mb-2" />
              <h3 className="text-xl font-bold mb-2">Capacitación Interactiva</h3>
              <p>Láminas y módulos cortos para formar a tu equipo en higiene, manipulación, POES y buenas prácticas.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Bot className="text-purple-500 w-6 h-6 mb-2" />
              <h3 className="text-xl font-bold mb-2">Inobot Asistente</h3>
              <p>Te recuerda tareas, responde dudas y notifica incumplimientos con voz amigable e inteligencia artificial.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CheckCircle className="text-yellow-500 w-6 h-6 mb-2" />
              <h3 className="text-xl font-bold mb-2">Auditorías y Reportes</h3>
              <p>Checklist personalizable, generación de hallazgos y planes de acción automáticos para fiscalización.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mt-20">
          <h3 className="text-2xl font-semibold mb-4">¿Para quién es INO360?</h3>
          <ul className="list-disc ml-6 text-lg">
            <li>Locales de comida rápida y restaurantes</li>
            <li>Carnicerías y food trucks</li>
            <li>Empresas productoras y distribuidores</li>
            <li>Consultores HACCP y BPM</li>
          </ul>
        </section>

        <section className="mt-20">
          <h3 className="text-2xl font-semibold mb-4">Planes y Servicios</h3>
          <p className="mb-4">Desde el plan básico para pequeños locales hasta soluciones premium con integración para empresas.</p>
          <Button className="bg-gray-100">Ver planes</Button>
        </section>
      </main>

      <footer className="mt-24 bg-gray-100 py-6 px-6 text-center text-sm text-gray-600">
        <p>© 2025 INO360 · info@ino360.com · www.ino360.cl</p>
      </footer>
    </div>
  );
}
