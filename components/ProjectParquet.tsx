import ProjectGallery from "@/components/ProjectGallery";

const parquetImages = Array.from({ length: 6 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/projects/project-2-parquet/Parquet_${n}.jpeg`,
    alt: `Pose de parquet contrecollé — photo ${n}`,
  };
});

const parquetAngletImages = [
  {
    src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-salon.webp",
    alt: "Parquet contrecollé posé dans un salon à Anglet",
  },
  {
    src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp",
    alt: "Pose de parquet contrecollé dans le couloir d'un logement à Anglet",
  },
  {
    src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp",
    alt: "Parquet contrecollé posé dans une chambre à Anglet",
  },
];

const parquetBiarritzImages = [
  {
    src: "/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-chambre.webp",
    alt: "Parquet massif et plinthes après pose dans une chambre à Biarritz",
  },
  {
    src: "/projects/project-5-parquet-massif-biarritz/pose-parquet-massif-colle-biarritz-en-cours.webp",
    alt: "Pose collée de parquet massif en cours dans une chambre à Biarritz",
  },
];

export default function ProjectParquet() {
  return (
    <>
      <ProjectGallery
        title="Pose de parquet contrecollé à Anglet"
        meta="66 m² · Pose collée"
        description="Kaza Intérieur a réalisé à Anglet la pose collée de 66 m² de parquet contrecollé, répartis entre le salon-séjour et deux chambres. Le chantier comprenait une sous-couche acoustique compatible avec une pose collée, ainsi que la pose des plinthes et les finitions périphériques."
        galleryLabel="Galerie du projet à Anglet"
        images={parquetAngletImages}
        columns={3}
        href="/realisations/pose-parquet-contrecolle-anglet"
      />
      <ProjectGallery
        title="Pose de parquet massif à Biarritz"
        meta="10 m² · Pose collée"
        description="À Biarritz, Kaza Intérieur a réalisé la pose collée de 10 m² de parquet massif dans une chambre. Le parquet a été collé directement sur la chape béton, sans sous-couche, avec pose des plinthes, finitions périphériques et ajustement au niveau du seuil."
        galleryLabel="Galerie du projet à Biarritz"
        images={parquetBiarritzImages}
        columns={3}
        href="/realisations/pose-parquet-massif-biarritz"
      />
      <ProjectGallery
        title="Pose de parquet contrecollé"
        description="Pose de parquet contrecollé collé. Préparation du sol, mise à niveau des surfaces, collage des lames de parquet, découpes aux angles, mise en place des joints de dilatation, ponçage et vitrification pour un résultat lisse et durable."
        galleryLabel="Galerie du projet"
        images={parquetImages}
        columns={3}
      />
    </>
  );
}
