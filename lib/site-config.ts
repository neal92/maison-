// Modifiez ce fichier pour personnaliser tout le site : nom, coordonnées, tarifs, équipements, avis, photos.

export const site = {
  name: "Villa des Oliviers",
  tagline: "Maison de vacances avec piscine au cœur de la Provence",
  location: "Gordes, Luberon — Provence",
  description:
    "Une maison en pierre lumineuse, nichée au milieu des oliviers, avec piscine privée et vue sur les collines du Luberon. Idéale pour se retrouver en famille ou entre amis.",
  capacity: 20,
  bedrooms: 7,
  bathrooms: 5,
  surface: "180 m²",

  contact: {
    phone: "+33 6 12 34 56 78",
    // Numéro WhatsApp au format international, sans espaces ni "+"
    whatsapp: "33612345678",
    email: "contact@villa-des-oliviers.fr",
    address: "Chemin des Oliviers, 84220 Gordes",
  },

  pricing: [
    {
      season: "Basse saison",
      period: "Octobre – Avril",
      night: 180,
      week: 1100,
    },
    {
      season: "Moyenne saison",
      period: "Mai, juin & septembre",
      night: 250,
      week: 1600,
    },
    {
      season: "Haute saison",
      period: "Juillet – Août",
      night: 350,
      week: 2300,
      highlight: true,
    },
    {
      season: "Formule Anniversaire",
      period: "Traiteur, décoration & services sur devis",
      special: true,
    },
  ],

  practicalInfo: [
    { label: "Arrivée", value: "à partir de 16h" },
    { label: "Départ", value: "avant 10h" },
    { label: "Séjour minimum", value: "3 nuits (7 nuits en juillet-août)" },
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
    { name: "Chambre 5", detail: "Lit double 160 cm, balcon" },
    { name: "Chambre 6", detail: "Deux lits simples 90 cm, accès terrasse" },
    { name: "Chambre 7", detail: "Lit double 140 cm, salle de bain privative" },
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
    { src: "/images/entree.jpg", alt: "Entrée de la villa" },
    { src: "/images/jardin.jpg", alt: "Jardin avec vue sur le paysage" },
    {
      src: "/images/pergola bio climatique.jpg",
      alt: "Pergola avec pergola bio climatique",
    },
    { src: "/images/mur rideau vue étage.jpg", alt: "Vue depuis l'étage" },
    { src: "/images/image cuisine.jpg", alt: "Cuisine équipée" },
    { src: "/images/coursive étage.jpg", alt: "Couloir de l'étage" },
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
} as const;

export type Site = typeof site;
