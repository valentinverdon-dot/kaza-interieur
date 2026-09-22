import ProjectGallery from "@/components/ProjectGallery";

const amenagementBayonneImages = [
  {
    src: "/projects/project-3-amenagement/Amenagement_7.webp",
    alt: "Aménagement d'escalier sur mesure dans une maison à Bayonne",
  },
  {
    src: "/projects/project-3-amenagement/Amenagement_6.webp",
    alt: "Escalier aménagé dans un volume réduit à Bayonne",
  },
  {
    src: "/projects/project-3-amenagement/Amenagement_5.webp",
    alt: "Marches en bois d'un palier quart-tournant à Bayonne",
  },
];

export default function ProjectAmenagement() {
  return (
    <ProjectGallery
      title="Aménagement d'un escalier sur mesure à Bayonne"
      meta="Bayonne · Maison"
      description="Dans cette maison à Bayonne, Kaza Intérieur a réalisé un aménagement en bois sur mesure autour de l'escalier : placards intégrés, marches et contremarches, dans un espace réduit."
      galleryLabel="Galerie du projet à Bayonne"
      images={amenagementBayonneImages}
      columns={3}
      href="/realisations/amenagement-escalier-sur-mesure-bayonne"
    />
  );
}
