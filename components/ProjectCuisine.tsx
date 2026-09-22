import ProjectGallery from "@/components/ProjectGallery";

const cuisineIkeaAngletImages = [
  {
    src: "/projects/project-1-cuisine/Cuisine_8.webp",
    alt: "Cuisine IKEA en L après installation à Anglet",
  },
  {
    src: "/projects/project-1-cuisine/Cuisine_7.webp",
    alt: "Cuisine IKEA blanche implantée en L à Anglet",
  },
  {
    src: "/projects/project-1-cuisine/Cuisine_5.webp",
    alt: "Plan de travail et colonnes d'une cuisine IKEA à Anglet",
  },
];

const cuisineIxinaAngletImages = [
  {
    src: "/projects/cuisine-noire-anglet/pose-cuisine-ixina-anglet.webp",
    alt: "Pose d'une cuisine Ixina à Anglet",
  },
  {
    src: "/projects/cuisine-noire-anglet/cuisine-noire-bois-ilot-anglet.webp",
    alt: "Cuisine noire et bois avec îlot central à Anglet",
  },
  {
    src: "/projects/cuisine-noire-anglet/installation-cuisine-equipee-anglet.webp",
    alt: "Cuisine Ixina équipée avec îlot et colonnes à Anglet",
  },
];

export default function ProjectCuisine() {
  return (
    <>
      <ProjectGallery
        title="Pose d'une cuisine IKEA à Anglet"
        meta="Cuisine IKEA · Implantation en L"
        description="À Anglet, Kaza Intérieur a réalisé la dépose de l'ancienne cuisine puis l'installation complète d'une cuisine IKEA en L, avec pose du plan de travail, de la crédence, intégration de l'électroménager et finitions."
        galleryLabel="Galerie du projet à Anglet"
        images={cuisineIkeaAngletImages}
        columns={3}
        href="/realisations/pose-cuisine-ikea-anglet"
      />
      <ProjectGallery
        title="Pose d'une cuisine Ixina avec îlot à Anglet"
        meta="Cuisine Ixina · Îlot central"
        description="À Anglet, Kaza Intérieur a assuré l'installation d'une cuisine Ixina noire et bois avec îlot central dans une maison neuve, ainsi que la pose du parquet contrecollé. L'intervention comprenait l'assemblage des meubles, le plan de travail, les crédences, l'intégration des équipements et les finitions."
        galleryLabel="Galerie du projet Ixina à Anglet"
        images={cuisineIxinaAngletImages}
        columns={3}
        href="/realisations/pose-cuisine-ixina-anglet"
      />
    </>
  );
}
