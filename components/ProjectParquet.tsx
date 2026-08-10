import ProjectGallery from "@/components/ProjectGallery";

const parquetImages = Array.from({ length: 6 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/projects/project-2-parquet/Parquet_${n}.jpeg`,
    alt: `Pose de parquet contrecollé — photo ${n}`,
  };
});

export default function ProjectParquet() {
  return (
    <ProjectGallery
      title="Pose de parquet contrecollé"
      description="Pose de parquet contrecollé collé. Préparation du sol, mise à niveau des surfaces, collage des lames de parquet, découpes aux angles, mise en place des joints de dilatation, ponçage et vitrification pour un résultat lisse et durable."
      galleryLabel="Galerie du projet"
      images={parquetImages}
      columns={3}
    />
  );
}
