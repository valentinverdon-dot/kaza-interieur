export type FaqItem = {
  question: string;
  answer: string;
};

export const allFaqs: FaqItem[] = [
  {
    question: "Êtes-vous assuré pour les travaux ?",
    answer:
      "Oui, je dispose d'une assurance responsabilité civile professionnelle et d'une garantie décennale pour tous mes chantiers.",
  },
  {
    question: "Êtes-vous une entreprise déclarée ?",
    answer:
      "Oui, Kaza est une entreprise auto-entrepreneur déclarée, avec un numéro SIRET actif.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer:
      "Un acompte de 40% est demandé à la signature du devis, le solde à la fin des travaux, après votre validation.",
  },
  {
    question: "Dois-je être présent pendant les travaux ?",
    answer:
      "Ce n'est pas obligatoire, mais je préfère un premier échange ensemble pour bien cerner vos attentes. Ensuite, je peux intervenir en toute autonomie.",
  },
  {
    question: "Le chantier sera-t-il propre ?",
    answer:
      "Oui, je protège systématiquement les zones de passage et je nettoie le chantier chaque jour.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait ?",
    answer:
      "Je m'engage à ajuster le travail jusqu'à votre entière satisfaction. La qualité et votre confiance sont ma priorité.",
  },
  {
    question: "Combien de temps durent les travaux ?",
    answer:
      "Ça dépend du projet : la pose d'une cuisine prend généralement 2 à 3 jours selon le nombre de meubles et les finitions, le parquet dépend de la surface, et les aménagements varient selon la complexité des travaux. Je vous donne un délai précis dès le devis.",
  },
  {
    question: "Travaillez-vous seul ou avec une équipe ?",
    answer:
      "Je travaille seul sur la majorité des chantiers, ce qui garantit un suivi personnalisé et une vraie continuité dans le travail.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, le devis est gratuit et sans engagement.",
  },
  {
    question: "Avez-vous des références ou avis clients ?",
    answer:
      "Oui, vous pouvez consulter les témoignages de mes clients sur ce site, ainsi que mes réalisations en photos.",
  },
];

/** 4 questions affichées sur la homepage */
export const homeFaqs: FaqItem[] = [
  allFaqs[0], // Assuré
  allFaqs[2], // Paiement
  allFaqs[8], // Devis gratuit
  allFaqs[6], // Durée des travaux
];
