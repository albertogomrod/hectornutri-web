"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, PhoneIcon, Clock } from "lucide-react";
import Link from "next/link";

const faq = [
  {
    question: "¿Cómo son las sesiones?",
    answer:
      "Todas las sesiones se realizan online. En la primera sesión se hará una valoración completa de tu salud, de patologías y, sobre todo, de todos tus síntomas. Se revisarán cómo son tus hábitos de vida, y también las pruebas diagnósticas que tengas.",
  },
  {
    question: "¿Qué herramientas terapéuticas se utilizan?",
    answer:
      "Cada persona tiene unas necesidades, por eso el tratamiento será individualizado. Se aportarán herramientas prácticas sobre alimentación, rutinas y estilo de vida. También se incluirán los tratamientos que se consideren más apropiados como complementos nutricionales, fitoterapia (plantas medicinales), probióticos específicos u otras ayudas.",
  },
  {
    question: "¿Qué incluye cada sesión?",
    answer:
      "La primera sesión de los planes tendrá una duración de entre 1h y 1h 15min. Lo que sea necesario según tu situación. Las sesiones de revisión tendrán una duración de 30-45min. Después de cada sesión, recibirás un email con las pautas de tu tratamiento. Después de revisar las pautas, podrás enviar un máximo de 1 email para resolver dudas que puedan surgir.",
  },
  {
    question: "¿Necesito tener alguna prueba antes de iniciar el plan?",
    answer:
      "¡No! Si tienes alguna prueba hecha, te pediré que me la envíes previamente. Pero será en la sesión cuando se valorará la necesidad, o no, de realizar alguna prueba.",
  },
  {
    question: "¿Trabajas con algún seguro de salud?",
    answer:
      "Los planes no están cubiertos por las compañías de seguros. Pero tu seguro podría cubrir algunas pruebas que podemos necesitar.",
  },
  {
    question: "¿Cada cuándo tiempo se hacen las sesiones?",
    answer:
      "Depende de cada caso. En la primera sesión de los planes lo se valorará la periodicidad de las sesiones, según tu situación.",
  },
  {
    question: "¿Recibiré por escrito las pautas de mi tratamiento?",
    answer:
      "En la propia sesión, te explicaremos el plan que necesitas realizar para mejorar tu salud. Posteriormente, en el plazo máximo de 5 días, recibirás un email con todas las pautas detalladas para que resulte más sencillo su seguimiento.",
  },
];
export default function PlanesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Planes de salud integrativa
            </h1>
            <p className="text-xl text-gray-600">
              Conectando con tu salud: descubrimos la causa, diseñamos la
              solución
            </p>
          </div>
        </div>
      </section>
      {/* Contenido Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-8xl mx-auto space-y-16">
            {/* Síntomas */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Padeces estos síntomas?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Si experimentas hinchazón, dolores estomacales, gases, diarrea o
                estreñimiento tras tus comidas, no estás solo(a). Muchos sienten
                fatiga constante, añorando el vigor y alegría de antes. Las
                migrañas, problemas cutáneos, alergias, dolores crónicos y otros
                trastornos como endometriosis, problemas de fertilidad, estados
                anímicos alterados o desbalances de peso podrían estar
                relacionados. Es esencial identificar la causa y no solo tratar
                los síntomas. Te entendemos y queremos ayudarte.
              </p>
            </div>

            {/* Prioridad */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tu salud, nuestra prioridad
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-8">
                  En mis años de experiencia y dedicación, he creado un método
                  para brindarte la mejor atención. Junto a mi equipo, nos
                  esforzamos por escuchar, entender y, sobre todo, ayudarte
                  desde una perspectiva de salud integrativa. Aquí te
                  presentamos cómo trabajamos:
                </p>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-semibold">
                      1. Profundo conocimiento:
                    </h3>
                    <p>
                      Nos sumergimos en el detalle de tus síntomas, patologías,
                      estado emocional y hábitos de vida. Las pruebas y análisis
                      que tengas serán esenciales para completar este panorama.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      2. Búsqueda de la causa raíz:
                    </h3>
                    <p>
                      Nuestro compromiso es descifrar el origen de tus síntomas.
                      Si no es evidente al inicio, estableceremos un plan
                      detallado para determinar la causa de tu malestar.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      3. Propuesta terapéutica personalizada:
                    </h3>
                    <p>
                      Juntos, diseñaremos un camino terapéutico ajustado a tus
                      necesidades, asegurando que estás en manos de expertos
                      altamente cualificados. Nuestro objetivo principal es
                      recuperar tu salud y vitalidad.
                    </p>
                  </div>
                </div>

                <p className="mt-8">
                  A pesar de la creciente demanda, he reunido un equipo de
                  profesionales que comparten nuestra filosofía y enfoque.
                  Nuestra colaboración constante garantiza un abordaje integral
                  y eficaz para tu bienestar.
                </p>
                <a
                  href="/equipo"
                  className="inline-block mt-8 text-lg font-semibold no-underline relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current hover:after:w-full after:transition-all after:duration-300"
                >
                  Conoce a mi equipo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Selecciona un plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Plan Básico */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 relative group transition-all duration-300 hover:border-primary">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver detalles
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold">199,00€</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-4">¿Qué incluye este Plan?</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Primera sesión con un miembro del equipo de Hector González.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Estudio posterior del caso y entrega vía email de todas las
                    pautas detalladas.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>1 sesión de
                    revisión.
                  </li>
                </ul>
              </div>
              <a
                href="/contacto"
                className="inline-block w-full text-center py-3 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors mt-12"
              >
                Agregar al carrito{" "}
              </a>
            </div>

            {/* Plan Intermedio */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 relative group transition-all duration-300 hover:border-primary">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver detalles
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Intermedio</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold">357,00€</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-4">¿Qué incluye este Plan?</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Primera sesión con un miembro del equipo de Hector González.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Estudio posterior del caso y entrega vía email de todas las
                    pautas detalladas.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>3 sesiones de
                    revisión; válidas durante máximo 5 meses después de la
                    primera sesión.
                  </li>
                </ul>
              </div>
              <a
                href="/contacto"
                className="inline-block w-full text-center py-3 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Agregar al carrito{" "}
              </a>
            </div>

            {/* Plan Premium */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 relative group transition-all duration-300 hover:border-primary">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver detalles
              </div>
              <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold">515,00€</p>
              </div>

              <div className="mb-6">
                <p className="font-semibold mb-4">¿Qué incluye este Plan?</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Primera sesión con un miembro del equipo de Hector González.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Estudio posterior del caso y entrega vía email de todas las
                    pautas detalladas.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>5 sesiones de
                    revisión; válidas durante máximo 7 meses después de la
                    primera sesión.
                  </li>
                </ul>
              </div>
              <a
                href="/contacto"
                className="inline-block w-full text-center py-3 px-6 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Agregar al carrito{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-8xl mx-auto space-y-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Revisiones
              </h2>

              <div className="flex flex-col space-y-4 max-w-xs">
                {/* Consulta individual */}
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative group transition-all duration-300 hover:border-primary">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-1">
                      Consulta de revisión
                    </h3>
                    <div className="mb-2">
                      <p className="text-2xl font-bold">79,00€</p>
                    </div>
                    <a
                      href="/contacto"
                      className="inline-block text-lg font-semibold no-underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 w-fit relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current hover:after:w-full after:transition-all after:duration-300"
                    >
                      Agregar al carrito
                    </a>
                  </div>
                </div>

                {/* Pack Consultas */}
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 relative group transition-all duration-300 hover:border-primary">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-1">
                      Pack Consultas de revisión
                    </h3>
                    <div className="mb-2">
                      <p className="text-2xl font-bold">237,00€</p>
                    </div>
                    <a
                      href="/contacto"
                      className="inline-block text-lg font-semibold no-underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 w-fit relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current hover:after:w-full after:transition-all after:duration-300"
                    >
                      Agregar al carrito
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight mb-12">
              Preguntas frecuentes
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue="question-0"
            >
              {faq.map(({ question, answer }, index) => (
                <AccordionItem
                  key={question}
                  value={`question-${index}`}
                  className="border rounded-lg px-6 bg-white"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-4">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-8xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              ¿Tienes dudas?
            </h2>

            <div className="grid lg:grid-cols-4 gap-16 md:gap-10">
              {/* Formulario */}
              <div className="lg:col-span-3">
                <Card className="bg-accent shadow-none">
                  <CardContent className="p-6 md:p-10">
                    <form>
                      <div className="grid gap-y-5">
                        <div>
                          <Label htmlFor="nombre">Nombre</Label>
                          <Input
                            placeholder="Nombre"
                            id="nombre"
                            className="mt-1.5 bg-white h-11 shadow-none"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Correo electrónico *</Label>
                          <Input
                            type="email"
                            placeholder="Correo electrónico"
                            id="email"
                            required
                            className="mt-1.5 bg-white h-11 shadow-none"
                          />
                        </div>
                        <div>
                          <Label htmlFor="telefono">Número de teléfono</Label>
                          <Input
                            type="tel"
                            placeholder="Número de teléfono"
                            id="telefono"
                            className="mt-1.5 bg-white h-11 shadow-none"
                          />
                        </div>
                        <div>
                          <Label htmlFor="comentario">Comentario</Label>
                          <Textarea
                            id="comentario"
                            placeholder="Comentario"
                            className="mt-1.5 bg-white shadow-none"
                            rows={6}
                          />
                        </div>
                      </div>
                      <Button className="mt-6 w-full" size="lg">
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Información de contacto */}
              <div className="flex flex-col space-y-8 pl-6">
                <div>
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <Clock />
                  </div>
                  <h3 className="mt-6 font-semibold text-xl">Horario</h3>
                  <p className="my-2.5 text-muted-foreground">
                    De lunes a viernes de 9 a 13h.
                    <br />Y lunes y jueves de 16 a 20h
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <PhoneIcon />
                  </div>
                  <h3 className="mt-6 font-semibold text-xl">Teléfono</h3>
                  <p className="my-2.5 text-muted-foreground">
                    +34 684 47 47 72
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <MessageCircle />
                  </div>
                  <h3 className="mt-6 font-semibold text-xl">Contacto</h3>
                  <p className="my-2.5 text-muted-foreground">
                    Puedes ponerte en contacto con mi compañera Andrea para
                    solucionar todas las dudas que necesites.
                  </p>
                </div>
              </div>

              {/* Aviso de privacidad */}
              <div className="lg:col-span-4 max-w-3xl">
                <Label
                  htmlFor="politica"
                  className="text-sm text-muted-foreground"
                >
                  Este sitio está protegido por hCaptcha y se aplican la{" "}
                  <Link href="#" className="underline">
                    Política de privacidad
                  </Link>{" "}
                  de hCaptcha y los{" "}
                  <Link href="#" className="underline">
                    Términos del servicio
                  </Link>
                  .
                </Label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
