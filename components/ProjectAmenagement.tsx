import ProjectGallery from "@/components/ProjectGallery";

const amenagementImages = Array.from({ length: 8 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/projects/project-3-amenagement/Amenagement_${n}.webp`,
    alt: `Habillage complet d'un escalier — photo ${n}`,
  };
});

export default function ProjectAmenagement() {
  return (
    <ProjectGallery
      title="Habillage complet d'un escalier"
      description="Habillage complet d'un escalier. Pose de parquet sur les marches, nez de marche protégés en aluminium, plinthes blanches et mise en peinture des contremarches. Un escalier rénové, sûr et esthétique."
      galleryLabel="Galerie du projet"
      images={amenagementImages}
      columns={4}
    />
  );
}
