// Modifiez ce fichier pour personnaliser tout le site : nom, coordonnées, tarifs, équipements, avis, photos.

export const site = {
  name: "Villa des Oliviers",
  tagline: "Maison de vacances avec piscine au cœur de la Provence",
  location: "Gordes, Luberon — Provence",
  description:
    "Une maison en pierre lumineuse, nichée au milieu des oliviers, avec piscine privée et vue sur les collines du Luberon. Idéale pour se retrouver en famille ou entre amis.",
  capacity: 8,
  bedrooms: 4,
  bathrooms: 3,
  surface: "180 m²",

  contact: {
    phone: "+33 6 12 34 56 78",
    // Numéro WhatsApp au format international, sans espaces ni "+"
    whatsapp: "33612345678",
    email: "contact@villa-des-oliviers.fr",
    address: "Chemin des Oliviers, 84220 Gordes",
  },

  pricing: [
    { season: "Basse saison", period: "Octobre – Avril", night: 180, week: 1100 },
    { season: "Moyenne saison", period: "Mai, juin & septembre", night: 250, week: 1600 },
    { season: "Haute saison", period: "Juillet – Août", night: 350, week: 2300, highlight: true },
  ],

  practicalInfo: [
    { label: "Arrivée", value: "à partir de 16h" },
    { label: "Départ", value: "avant 10h" },
    { label: "Séjour minimum", value: "3 nuits (7 nuits en juillet-août)" },
    { label: "Caution", value: "800 € (non encaissée)" },
    { label: "Ménage de fin de séjour", value: "Inclus" },
    { label: "Linge de lit & serviettes", value: "Fournis" },
    { label: "Animaux", value: "Acceptés sur demande" },
    { label: "Fumeurs", value: "Uniquement à l'extérieur" },
  ],

  rooms: [
    { name: "Chambre 1", detail: "Lit double 160 cm, salle de bain privative" },
    { name: "Chambre 2", detail: "Lit double 160 cm, vue sur la piscine" },
    { name: "Chambre 3", detail: "Deux lits simples 90 cm" },
    { name: "Chambre 4", detail: "Lit double 140 cm, accès au jardin" },
  ],

  amenities: [
    "Piscine privée chauffée (10 × 5 m)",
    "Climatisation dans toutes les chambres",
    "Wi-Fi haut débit",
    "Parking privé (3 voitures)",
    "Barbecue & plancha",
    "Cuisine entièrement équipée",
    "Lave-linge & lave-vaisselle",
    "Terrasse ombragée sous pergola",
    "Jardin de 2 000 m² clos",
    "Transats & parasols",
    "Télévision & enceinte Bluetooth",
    "Lit et chaise bébé sur demande",
  ],

  gallery: [
    { src: "/images/hero.png", alt: "Vue extérieure de la villa en pierre avec sa piscine" },
    { src: "/images/salon.png", alt: "Salon lumineux avec poutres apparentes" },
    { src: "/images/piscine.png", alt: "Piscine avec transats et parasols" },
    { src: "/images/chambre.png", alt: "Chambre avec lit en lin blanc" },
    { src: "/images/cuisine.png", alt: "Cuisine équipée avec îlot central" },
    { src: "/images/terrasse.png", alt: "Terrasse sous pergola au coucher du soleil" },
  ],

  reviews: [
    {
      name: "Claire & Thomas",
      origin: "Lyon",
      date: "Août 2026",
      rating: 5,
      text: "Une maison magnifique, encore plus belle qu'en photo. La piscine, le calme, la vue… Nous avons passé une semaine inoubliable. Accueil très chaleureux !",
    },
    {
      name: "Famille Martin",
      origin: "Bruxelles",
      date: "Juillet 2026",
      rating: 5,
      text: "Parfait pour notre famille de 7. Les chambres sont spacieuses et la cuisine très bien équipée. Les villages alentour sont superbes. Nous reviendrons !",
    },
    {
      name: "Sophie",
      origin: "Paris",
      date: "Juin 2026",
      rating: 5,
      text: "Un vrai coin de paradis. Tout était impeccable, propre et décoré avec goût. Le propriétaire est disponible et de très bon conseil.",
    },
  ],
} as const

export type Site = typeof site
