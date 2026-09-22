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
        title="Pose de parquet contrecollé"
        description="Pose de parquet contrecollé collé. Préparation du sol, mise à niveau des surfaces, collage des lames de parquet, découpes aux angles, mise en place des joints de dilatation, ponçage et vitrification pour un résultat lisse et durable."
        galleryLabel="Galerie du projet"
        images={parquetImages}
        columns={3}
      />
    </>
  );
}
