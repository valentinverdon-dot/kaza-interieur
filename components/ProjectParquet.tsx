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
    alt: "Pose flottante de parquet contrecollé dans un salon à Anglet",
  },
  {
    src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-couloir.webp",
    alt: "Parquet contrecollé posé dans un couloir avec plinthes blanches à Anglet",
  },
  {
    src: "/projects/project-4-parquet-anglet/pose-parquet-contrecolle-anglet-chambre.webp",
    alt: "Parquet contrecollé et finitions de plinthes dans une chambre à Anglet",
  },
];

export default function ProjectParquet() {
  return (
    <>
      <ProjectGallery
        title="Pose flottante de parquet contrecollé à Anglet — 66 m²"
        description="Pose de 66 m² de parquet contrecollé en pose flottante dans un appartement à Anglet, sur sous-couche acoustique. Pose des plinthes blanches et réalisation des finitions au joint acrylique pour un raccord net avec les murs."
        galleryLabel="Galerie du projet à Anglet"
        images={parquetAngletImages}
        columns={3}
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
