export const HOME_CONTENT = {
  hero: {
    title: "¡Hola! Soy Héctor",
    description:
      "Acompaño a personas con trastornos digestivos en el proceso de comprender su cuerpo y encontrar las causas de su malestar. Juntos diseñamos una estrategia terapéutica personalizada que integra el conocimiento científico más actual con herramientas de la medicina tradicional y la nutrición integrativa, para recuperar el equilibrio y mejorar la salud de forma sostenible.",
    ctaButton: "¿Quieres conocerme mejor?",
  },
  blog: {
    title: "Artículos que combinan ciencia, reflexión y una mirada práctica.",
    viewAllButton: "Ver todo",
    readMoreButton: "Leer más",
    posts: [
      {
        title: "Estudio SIBO - Calidad de vida",
        date: "abril 06, 2025",
        description:
          "Después de la primera publicación del Ensayo clínico que hicimos sobre el tratamiento combinado de antibióticos, herbáceos y ayudas para recuperar la mucosa digestiva en pacientes con SIBO publicado en la revista...",
        slug: "/blog/sibo-calidad-vida",
      },
      {
        title:
          "Mimosa pudica, la planta que está revolucionando la salud intestinal",
        date: "octubre 12, 2024",
        description:
          "La Mimosa pudica es una planta que ha captado la atención de muchos por sus propiedades beneficiosas sobre la salud intestinal. En este artículo, exploraremos el uso tradicional, el conocimiento actual...",
        slug: "/blog/mimosa-pudica",
      },
      {
        title: "Helicobacter pylori: otra mirada",
        date: "septiembre 02, 2024",
        description:
          "La Helicobacter pylori es una bacteria que tiene la mitad de la población mundial y podría estar detrás de algunos trastornos digestivos; incluso se relaciona con úlceras y cáncer gástrico...",
        slug: "/blog/helicobacter-pylori",
      },
    ],
  },
  specialties: {
    title: "Mis Especialidades",
    items: [
      {
        title: "SIBO",
        description: "Sobrecrecimiento bacteriano en el intestino delgado",
        image: "/images/sibo.jpg", // Por ahora usaremos un placeholder
      },
      {
        title: "Intolerancias alimentarias",
        description: "Fructosa, lactosa, sorbitol, histamina, gluten",
        image: "/images/intolerancias.jpg",
      },
      {
        title: "Hormonas",
        description:
          "Endometriosis, ovarios poliquísticos, fertilidad, síndrome premenstrual",
        image: "/images/hormonas.jpg",
      },
      {
        title: "Histaminosis",
        description: "Migrañas, picores, fatiga, dolor crónico",
        image: "/images/histaminosis.jpg",
      },
    ],
  },
  plans: {
    title: "Planes de salud integrativa",
    description:
      "Partiendo del ✨ concepto de salud integrativa.✨ Tu tratamiento será personalizado, y combinaremos el conocimiento científico y médico más actualizado, con las técnicas, remedios o terapias de las medicinas tradicionales 😄.",
    items: [
      {
        title: "Plan Básico",
        price: 199.0,
        image: "/images/plan-basico.jpg",
      },
      {
        title: "Plan Intermedio",
        price: 337.0,
        image: "/images/plan-intermedio.jpg",
      },
      {
        title: "Plan Premium",
        price: 467.0,
        image: "/images/plan-premium.jpg",
      },
    ],
    ctaButton: "Agregar al carrito",
  },
  reviews: {
    title: "Reseñas de pacientes",
    googleCard: {
      name: "Héctor González",
      rating: 5.0,
      totalReviews: 68,
      platform: "Google",
    },
    testimonials: [
      {
        name: "María García",
        date: "hace 2 semanas",
        rating: 5,
        verified: true,
        text: "Mi experiencia con Héctor ha sido fantástica. Su enfoque personalizado y conocimiento profundo me ayudaron a entender y mejorar mis problemas digestivos. Totalmente recomendable.",
        image: "/images/profile1.jpg",
      },
      {
        name: "Juan Pérez",
        date: "hace 1 mes",
        rating: 5,
        verified: true,
        text: "Gracias a su tratamiento he conseguido mejorar significativamente mi SIBO. Su profesionalidad y dedicación son excepcionales.",
        image: "/images/profile2.jpg",
      },
      {
        name: "Laura Martínez",
        date: "hace 2 meses",
        rating: 5,
        verified: true,
        text: "El mejor nutricionista que he conocido. Su aproximación integrativa y su atención personalizada han marcado la diferencia en mi salud.",
        image: "/images/profile3.jpg",
      },
    ],
  },
};
