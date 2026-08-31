import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Conditions générales de travaux",
  description:
    "Conditions générales applicables aux prestations de travaux et d'aménagement intérieur de Kaza Intérieur.",
  path: "/conditions-generales",
  index: false,
});

type Article = {
  title: string;
  paragraphs?: Array<{ label: string; text: string }>;
};

const articles: Article[] = [
  {
    title: "Identification et champ d'application",
    paragraphs: [
      {
        label: "Prestataire",
        text: "Kaza Intérieur est le nom commercial de Valentin Verdon, entrepreneur individuel, SIRET 901 380 246 00032, domicilié 6 allée du Professeur Henri Gavel, 64600 Anglet. Contact : valentin@kaza-interieur.fr.",
      },
      {
        label: "Champ d'application",
        text: "Les présentes conditions s'appliquent aux prestations de travaux, pose, installation et aménagement intérieur décrites au devis. Les dispositions expressément réservées aux consommateurs ne s'appliquent pas aux clients professionnels.",
      },
      {
        label: "Documents contractuels",
        text: "Le contrat est constitué du devis accepté, de ses annexes et plans identifiés, des présentes conditions et des avenants ultérieurs. En cas de contradiction, les conditions particulières du devis et les avenants prévalent sur les présentes conditions générales.",
      },
      {
        label: "Acceptation",
        text: "Le client reconnaît avoir reçu les présentes conditions avant son engagement. Le contrat est formé par l'acceptation du devis et, lorsque le devis le prévoit et sous réserve des règles applicables aux contrats hors établissement, par le versement de l'acompte.",
      },
      {
        label: "Validité du devis",
        text: "Sauf durée différente mentionnée au devis, l'offre est valable 30 jours à compter de sa date d'émission.",
      },
    ],
  },
  {
    title: "Périmètre des prestations",
    paragraphs: [
      {
        label: "Prestations comprises",
        text: "Seules les prestations, quantités, fournitures et finitions expressément décrites dans le devis accepté sont comprises dans le prix. Toute prestation non mentionnée est exclue.",
      },
      {
        label: "Plans et références",
        text: "Lorsque les travaux dépendent d'un plan, d'une notice, d'une référence produit ou d'une implantation, ces éléments doivent être datés, identifiés et annexés au devis. Toute modification postérieure nécessite l'accord écrit des parties.",
      },
      {
        label: "Sous-traitance",
        text: "Le prestataire peut confier à un sous-traitant qualifié tout ou partie des prestations, tout en restant l'interlocuteur contractuel du client dans les conditions prévues par la loi.",
      },
      {
        label: "Assurance",
        text: "Le prestataire exécute uniquement les activités prévues au devis et relevant de ses compétences et garanties d'assurance. Les références de l'assurance professionnelle et, lorsqu'elle est légalement requise, l'attestation correspondante figurent sur le devis ou sont remises au client.",
      },
    ],
  },
  {
    title: "État du chantier et obligations du client",
    paragraphs: [
      {
        label: "Examen préalable limité",
        text: "Le devis est établi d'après les informations communiquées par le client et l'examen des parties visibles et accessibles, sans sondage destructif ni démontage. Les défauts cachés, réseaux dissimulés et caractéristiques impossibles à vérifier avant l'ouverture du chantier ne sont pas réputés inclus dans le prix.",
      },
      {
        label: "Supports et réseaux existants",
        text: "Sauf prestation spécifique, les supports et réseaux existants sont présumés sains, secs, stables, suffisamment plans, accessibles, fonctionnels et compatibles avec les travaux. Toute préparation, réparation, mise en conformité ou déplacement non prévu fera l'objet d'un avenant accepté avant exécution.",
      },
      {
        label: "Diagnostics et risques",
        text: "Le client remet avant l'intervention les diagnostics, informations et autorisations utiles dont il dispose ou qui sont légalement requis, notamment en présence possible d'amiante, de plomb, d'humidité, de parasites ou de réseaux dangereux. En cas de risque sérieux ou de doute technique, le prestataire peut interrompre les travaux jusqu'à sécurisation ou diagnostic adapté.",
      },
      {
        label: "Accès et préparation",
        text: "Le client garantit l'accès au chantier aux dates convenues, libère les zones de travail, protège ou retire les objets fragiles et effets personnels, éloigne les animaux et met gratuitement à disposition l'eau, l'électricité et une zone de stockage raisonnable. Les frais ou retards causés par un défaut de préparation pourront faire l'objet d'un avenant.",
      },
      {
        label: "Autorisations",
        text: "Le client obtient les autorisations du propriétaire, de la copropriété, de l'administration ou de tout tiers nécessaires aux travaux. Il informe le prestataire des règles particulières d'accès, d'horaires ou de protection des parties communes.",
      },
      {
        label: "Autres intervenants",
        text: "Le client coordonne les autres entreprises et s'assure que leurs interventions ne gênent pas les travaux. Le prestataire n'est pas responsable des retards ou dommages imputables à un tiers ; toute reprise rendue nécessaire par son intervention sera chiffrée séparément.",
      },
    ],
  },
  {
    title: "Matériaux et équipements fournis par le client",
    paragraphs: [
      {
        label: "Choix et commande",
        text: "Lorsque les matériaux, équipements ou accessoires sont achetés ou fournis directement par le client, celui-ci répond de leur choix, de leurs références, de leurs caractéristiques, des quantités commandées, de leur conformité à la commande et de leur compatibilité avec l'usage annoncé, sous réserve du devoir de conseil du prestataire.",
      },
      {
        label: "Livraison et stockage",
        text: "Sauf mention contraire au devis, le client assure leur réception, déballage, contrôle quantitatif, conservation et stockage dans les conditions prescrites par le fabricant. Toutes les fournitures doivent être complètes, disponibles et acclimatées lorsque nécessaire avant la date de pose.",
      },
      {
        label: "Contrôle avant pose",
        text: "Le prestataire réalise un contrôle visuel limité aux éléments accessibles et aux défauts apparents. Ce contrôle ne constitue ni une expertise du produit ni une garantie contre un vice caché, un défaut de fabrication ou une incompatibilité qui ne pouvait raisonnablement être décelée avant la mise en œuvre.",
      },
      {
        label: "Devoir d'alerte et droit de refus",
        text: "Si une fourniture paraît manifestement défectueuse, incomplète, endommagée ou incompatible avec le support, l'usage prévu ou les prescriptions techniques, le prestataire en informe le client et peut suspendre ou refuser sa pose jusqu'à régularisation.",
      },
      {
        label: "Répartition des responsabilités",
        text: "Le prestataire n'est pas responsable des désordres exclusivement imputables au produit, à une erreur de commande, à une quantité insuffisante ou au non-respect des conditions de transport, de stockage ou d'acclimatation. Il demeure responsable des dommages directement causés par une faute dans la manipulation, la découpe, le stockage qui lui est confié ou la mise en œuvre.",
      },
      {
        label: "Conséquences",
        text: "Tout déplacement, report, temps supplémentaire ou reprise causé par des fournitures manquantes, défectueuses, incompatibles ou tardives fera l'objet d'un avenant ou d'une facturation complémentaire acceptée avant intervention. Les recours relatifs au produit sont exercés par le client auprès du vendeur ou du fabricant.",
      },
    ],
  },
  {
    title: "Planning, suspension et imprévus",
    paragraphs: [
      {
        label: "Engagement de délai",
        text: "La date ou le délai d'exécution indiqué au devis constitue l'engagement du prestataire. Son point de départ suppose l'acceptation du devis, le respect des conditions de paiement applicables, l'accès au chantier, la disponibilité des fournitures, plans, autorisations et informations nécessaires ainsi que l'achèvement des travaux préalables à la charge du client ou de tiers.",
      },
      {
        label: "Prolongation justifiée",
        text: "Le planning est prolongé de la durée raisonnablement nécessaire lorsque l'exécution est retardée par une modification demandée par le client, une fourniture tardive ou défectueuse, l'intervention d'un tiers, une contrainte cachée, un risque de sécurité, des intempéries affectant réellement les travaux, un cas de force majeure ou tout événement non imputable au prestataire. Le client en est informé dans les meilleurs délais.",
      },
      {
        label: "Suspension",
        text: "Le prestataire peut suspendre le chantier lorsqu'une poursuite normale ou sûre est impossible, notamment en cas de support inadapté, danger, accès empêché, coactivité incompatible, fourniture manquante ou facture exigible impayée après mise en demeure restée sans effet. La reprise intervient après disparition de la cause de suspension et reprogrammation raisonnable.",
      },
      {
        label: "Droits légaux du consommateur",
        text: "Aucune clause ne prive le client consommateur de ses droits légaux en cas de retard imputable au prestataire.",
      },
    ],
  },
  {
    title: "Prix, avenants et paiement",
    paragraphs: [
      {
        label: "Prix",
        text: "Le prix couvre uniquement le périmètre et les conditions d'exécution définis au devis. La TVA est appliquée selon le régime et le taux légalement applicables à la date de facturation.",
      },
      {
        label: "Travaux supplémentaires",
        text: "Toute modification, quantité supplémentaire, adaptation ou prestation rendue nécessaire par une contrainte non visible donne lieu à un avenant chiffré accepté avant exécution. Aucun travail supplémentaire n'est entrepris sans accord, sauf mesure strictement nécessaire pour mettre le chantier en sécurité ou éviter un dommage imminent, après information du client dès que possible.",
      },
      {
        label: "Acompte",
        text: "Sauf stipulation différente au devis, un acompte de 40 % est demandé à la commande. Les sommes désignées comme acomptes constituent un engagement ferme et ne sont pas des arrhes. Pour un contrat conclu hors établissement avec un consommateur, aucun paiement n'est encaissé avant l'expiration du délai légal de sept jours, sauf exception prévue par la loi.",
      },
      {
        label: "Échéancier",
        text: "Les factures d'avancement et le solde sont payables aux dates mentionnées au devis ou sur les factures. Le solde est exigible à l'achèvement ou à la réception selon ce que prévoit le devis, sans préjudice de la consignation ou des recours prévus par la loi en cas de réserves.",
      },
      {
        label: "Retard d'un client consommateur",
        text: "Après mise en demeure restée sans effet, les sommes échues portent intérêts au taux légal. Le prestataire peut suspendre les travaux si la mise en demeure précise un délai raisonnable de régularisation et les conséquences du défaut de paiement.",
      },
      {
        label: "Retard d'un client professionnel",
        text: "Les sommes échues portent, de plein droit, intérêts au taux de refinancement de la Banque centrale européenne majoré de dix points, sans pouvoir être inférieur à trois fois le taux d'intérêt légal. L'indemnité forfaitaire légale de 40 euros pour frais de recouvrement est également due, sans préjudice des frais supplémentaires justifiés.",
      },
      {
        label: "Réserve de propriété",
        text: "Les matériaux fournis par le prestataire restent sa propriété jusqu'au paiement intégral tant qu'ils ne sont pas incorporés à l'ouvrage. Le prestataire peut reprendre les matériaux non incorporés après mise en demeure, sans détériorer l'ouvrage.",
      },
    ],
  },
  {
    title: "Protection du chantier et responsabilités",
    paragraphs: [
      {
        label: "Constat",
        text: "Les parties peuvent établir avant travaux un état des lieux photographique des zones d'intervention, accès et éléments conservés. Le client signale avant le démarrage tout bien particulièrement fragile ou de valeur.",
      },
      {
        label: "Limites techniques",
        text: "Les variations normales de teinte, veinage, texture ou calepinage propres aux matériaux ne constituent pas un défaut de pose lorsqu'elles respectent les tolérances du fabricant et les règles de l'art.",
      },
      {
        label: "Intervention du client ou d'un tiers",
        text: "Le prestataire ne répond pas des dommages ou désordres causés après son intervention par le client, un tiers, une utilisation prématurée, une modification, un défaut d'entretien ou le non-respect des consignes. Cette exclusion est limitée aux conséquences directement imputables à cette cause.",
      },
      {
        label: "Responsabilités légales",
        text: "Le prestataire reste responsable de ses fautes et des garanties légales applicables. Aucune clause ne limite les droits à réparation du client consommateur en cas de manquement du prestataire.",
      },
    ],
  },
  {
    title: "Réception et réserves",
    paragraphs: [
      {
        label: "Réception contradictoire",
        text: "À l'achèvement, les parties organisent une réception contradictoire constatée par un procès-verbal signé, avec ou sans réserves. Le client est invité à vérifier les travaux et à décrire précisément les défauts apparents qu'il entend réserver.",
      },
      {
        label: "Absence du client",
        text: "Si le client ne se présente pas à la réception proposée, le prestataire lui adresse une nouvelle convocation écrite. À défaut de réception amiable, chaque partie conserve la faculté de demander une réception dans les conditions prévues par la loi.",
      },
      {
        label: "Levée des réserves",
        text: "Le délai de traitement des réserves est fixé d'un commun accord selon leur nature, les délais d'approvisionnement et les conditions d'accès au chantier.",
      },
      {
        label: "Désordres ultérieurs",
        text: "L'absence de réserve ne prive pas le client du droit de signaler par écrit les désordres non apparents lors de la réception ni de bénéficier des garanties légales.",
      },
      {
        label: "Réception partielle",
        text: "Une réception partielle peut être organisée pour un lot ou une partie d'ouvrage autonome, notamment lorsque plusieurs entreprises interviennent.",
      },
    ],
  },
  {
    title: "Garanties et entretien",
    paragraphs: [
      {
        label: "Garanties légales",
        text: "À compter de la réception, le prestataire répond des garanties légales applicables aux travaux réalisés, notamment de la garantie de parfait achèvement et, lorsque leurs conditions sont réunies, des garanties biennale et décennale.",
      },
      {
        label: "Signalement",
        text: "Toute réclamation décrit le désordre, sa date d'apparition et sa localisation et est accompagnée, si possible, de photographies. Le client permet au prestataire de constater le désordre et d'intervenir dans un délai raisonnable avant toute réparation par un tiers, sauf urgence de sécurité.",
      },
      {
        label: "Causes étrangères aux travaux",
        text: "La responsabilité du prestataire n'est pas engagée lorsque le désordre est exclusivement causé par l'usure normale, un défaut d'entretien, une utilisation anormale non signalée, un vice du produit fourni par le client, un support ou réseau caché défectueux, un sinistre ou l'intervention d'un tiers.",
      },
      {
        label: "Entretien",
        text: "Le client respecte les notices, temps de séchage, conditions d'usage et consignes d'entretien communiqués par le prestataire ou le fabricant.",
      },
    ],
  },
  {
    title: "Annulation et résiliation",
    paragraphs: [
      {
        label: "Annulation par le client",
        text: "Hors exercice valable du droit de rétractation, si le client annule après acceptation, il règle les prestations déjà exécutées, les dépenses engagées, les fournitures commandées non annulables ou non réutilisables et le préjudice direct justifié du prestataire. Les acomptes versés s'imputent sur ces sommes ; l'éventuel excédent est restitué.",
      },
      {
        label: "Manquement grave",
        text: "En cas de manquement grave d'une partie à ses obligations, l'autre partie peut résilier le contrat après mise en demeure écrite accordant un délai raisonnable pour remédier au manquement et restée sans effet, sauf urgence ou impossibilité définitive.",
      },
      {
        label: "Force majeure",
        text: "En cas d'empêchement définitif résultant d'un événement de force majeure, le contrat peut être résolu dans les conditions légales. Les travaux déjà exécutés et fournitures effectivement acquises pour le chantier restent dus dans la mesure permise par la loi.",
      },
    ],
  },
  {
    title: "Propriété intellectuelle et données",
    paragraphs: [
      {
        label: "Documents",
        text: "Les études, plans, dessins, maquettes, métrés et méthodes établis par le prestataire restent sa propriété intellectuelle. Le client peut les utiliser uniquement pour le projet objet du devis et ne peut les transmettre à un tiers pour exécution sans autorisation écrite.",
      },
      {
        label: "Données personnelles",
        text: "Le prestataire traite les données nécessaires à la gestion des devis, chantiers, factures, garanties et obligations légales. Le client peut exercer ses droits d'accès, rectification, limitation, opposition, portabilité ou effacement, lorsqu'ils sont applicables, en écrivant à valentin@kaza-interieur.fr.",
      },
    ],
  },
  {
    title: "Réclamations, médiation et droit applicable",
    paragraphs: [
      {
        label: "Réclamation préalable",
        text: "Toute difficulté est d'abord adressée par écrit à Kaza Intérieur, 6 allée du Professeur Henri Gavel, 64600 Anglet, ou à valentin@kaza-interieur.fr, afin de rechercher une solution amiable.",
      },
      {
        label: "Médiateur de la consommation",
        text: "Après une réclamation écrite préalable restée sans solution, le client consommateur peut saisir gratuitement le CM2C - Centre de la Médiation de la Consommation de Conciliateurs de Justice, 49 rue de Ponthieu, 75008 Paris, via www.cm2c.net ou declarer-un-litige@cm2c.net.",
      },
      {
        label: "Juridiction",
        text: "À défaut d'accord amiable ou de médiation, le litige relève des juridictions compétentes selon les règles légales. Le client consommateur conserve notamment les choix de compétence territoriale que lui reconnaît le Code de la consommation.",
      },
      {
        label: "Droit applicable",
        text: "Le contrat est soumis au droit français, sans priver le consommateur des dispositions impératives qui lui sont applicables.",
      },
    ],
  },
  {
    title: "Droit de rétractation des consommateurs",
    paragraphs: [
      {
        label: "Contrats concernés",
        text: "Pour un contrat de prestation de services conclu à distance ou hors établissement, le consommateur dispose de quatorze jours à compter de la conclusion du contrat pour se rétracter, sans avoir à motiver sa décision. Les exceptions légales demeurent applicables.",
      },
      {
        label: "Commencement anticipé",
        text: "Si le consommateur souhaite que les travaux commencent avant la fin de ce délai, il doit en faire la demande expresse sur support durable. S'il se rétracte après le début demandé, il règle le montant proportionnel aux prestations exécutées jusqu'à sa décision. Le droit de rétractation ne disparaît après exécution complète que si le consommateur a préalablement demandé cette exécution et reconnu qu'il perdrait alors son droit.",
      },
      {
        label: "Paiement hors établissement",
        text: "Lorsqu'un contrat est conclu hors établissement, aucun paiement ni aucune contrepartie ne peut être reçu avant l'expiration du délai légal de sept jours, sauf exception légale.",
      },
    ],
  },
];

export default function ConditionsGeneralesPage() {
  return (
    <div className="bg-white">
      <article className="mx-auto max-w-[880px] px-4 py-[60px] sm:px-6 lg:py-[80px]">
        <header className="border-b border-[#e8e2d8] pb-10">
          <p className="mb-3 text-sm font-semibold tracking-[0.12em] text-[#e74c3c] uppercase">
            Document contractuel
          </p>
          <h1 className="text-[36px] font-bold leading-tight text-[#1a2e4a] sm:text-[44px]">
            Conditions générales de travaux
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#666]">
            Applicables aux devis Kaza Intérieur — version du 31 août 2026.
          </p>
          <a
            href="/documents/conditions-generales-kaza-interieur.pdf"
            download
            className="mt-7 inline-flex items-center bg-[#1a2e4a] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e74c3c]"
          >
            Télécharger les CGV au format PDF
          </a>
        </header>

        <div className="mt-4">
          {articles.map((article) => (
            <section key={article.title} className="border-b border-[#ece8e1] py-8 last:border-0">
              <h2 className="mb-5 text-2xl font-semibold leading-tight text-[#1a2e4a]">
                {article.title}
              </h2>
              <div className="space-y-5">
                {article.paragraphs?.map((paragraph) => (
                  <div key={paragraph.label}>
                    <h3 className="mb-1 text-base font-semibold text-[#202733]">
                      {paragraph.label}
                    </h3>
                    <p className="text-base leading-[1.75] text-[#444]">
                      {paragraph.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-6 bg-[#f7f6f2] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[#1a2e4a]">
            Formulaire type de rétractation
          </h2>
          <p className="mt-4 text-base leading-[1.75] text-[#555]">
            À l’attention de Kaza Intérieur - Valentin Verdon EI, 6 allée du
            Professeur Henri Gavel, 64600 Anglet, valentin@kaza-interieur.fr :
            Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*)
            rétractation du contrat portant sur la prestation de services
            ci-dessous : [description] ; commandée le : [date] ; nom du/des
            consommateur(s) : [nom] ; adresse : [adresse] ; signature
            (uniquement en cas d’envoi papier) : [signature] ; date : [date]. (*)
            Rayez la mention inutile.
          </p>
        </section>
      </article>
    </div>
  );
}
