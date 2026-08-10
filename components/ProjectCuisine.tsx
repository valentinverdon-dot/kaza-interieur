import ProjectGallery from "@/components/ProjectGallery";

const cuisineImages = Array.from({ length: 8 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/projects/project-1-cuisine/Cuisine_${n}.webp`,
    alt: `Cuisine Anglet — photo ${n}`,
  };
});

export default function ProjectCuisine() {
  return (
    <ProjectGallery
      title="Réfection complète d'une cuisine"
      description="Démolition de l'ancienne cuisine. Remplacement de menuiserie, reprise des réseaux électriques et eau, habillage des murs en placostyle avec isolation, bande à joint et ratissage complet des murs, mise en peinture à la Calista, nouveau carrelage façon marbre 60 × 60 et pose d'une cuisine Ixina."
      galleryLabel="Galerie du projet"
      images={cuisineImages}
    />
  );
}
