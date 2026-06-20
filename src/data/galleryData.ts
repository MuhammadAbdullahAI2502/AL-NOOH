export type GalleryCategory = "All" | "Farm" | "Livestock" | "Transport" | "Process" | "Certificates";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  breed?: string;
  age?: string;
  weight?: string;
  certifications?: string[];
  description?: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/28962623/pexels-photo-28962623.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Premium Holstein cows grazing on lush Pakistani farm",
    category: "Farm",
    breed: "Holstein Friesian",
    age: "3-4 years",
    weight: "600-700 kg",
    certifications: ["Veterinary Checked", "Halal Approved"],
    description: "Premium Holstein dairy cattle in excellent health condition",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/27896657/pexels-photo-27896657.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Close-up of premium Sahiwal cow with horns on green pasture",
    category: "Livestock",
    breed: "Sahiwal",
    age: "2-3 years",
    weight: "400-500 kg",
    certifications: ["Health Certificate", "Export License"],
    description: "Premium Sahiwal cow with excellent genetics and health status",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/31649657/pexels-photo-31649657.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Majestic Brahman bull in farm pen ready for export",
    category: "Livestock",
    breed: "Brahman",
    age: "4-5 years",
    weight: "800-1000 kg",
    certifications: ["Veterinary Certified", "Halal Slaughter"],
    description: "Majestic Brahman bull in premium condition ready for export",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/27730514/pexels-photo-27730514.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Cattle being loaded onto livestock transport truck for shipping",
    category: "Transport",
    description: "Professional loading of certified livestock for export",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/33547518/pexels-photo-33547518.jpeg",
    alt: "Cows in modern barn feeding area inspected by veterinarians",
    category: "Process",
    description: "Continuous health monitoring and inspection process",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/27207621/pexels-photo-27207621.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Black Angus bull standing calmly in vibrant green export farm",
    category: "Livestock",
    breed: "Black Angus",
    age: "3-4 years",
    weight: "900-1100 kg",
    certifications: ["Health Certified", "Export Ready"],
    description: "Premium Black Angus bull with excellent meat quality",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/9374408/pexels-photo-9374408.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Aerial view of Pakistani cattle farm with herd grazing",
    category: "Farm",
    description: "Expansive farm facility with multiple herds grazing",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/10041350/pexels-photo-10041350.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Modern dairy barn with Holstein cattle under inspection",
    category: "Farm",
    description: "Modern barn facility with advanced health monitoring",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/28962405/pexels-photo-28962405.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Brown and white dairy calf in sunny meadow",
    category: "Livestock",
    breed: "Jersey Dairy",
    age: "1-2 years",
    weight: "300-400 kg",
    description: "Young Jersey dairy calf with excellent genetics",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/12655650/pexels-photo-12655650.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Farmers conducting business deal at cattle export market",
    category: "Process",
    description: "Professional livestock trading and quality assurance process",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/33200406/pexels-photo-33200406.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Diverse cattle herd in outdoor enclosure at export facility",
    category: "Farm",
    description: "Diverse certified herd ready for international export",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/28607441/pexels-photo-28607441.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Kajli goat with horns and ear tags in grassy meadow",
    category: "Livestock",
    breed: "Kajli Goat",
    age: "1-2 years",
    weight: "50-70 kg",
    certifications: ["Health Checked", "Halal Approved"],
    description: "Premium Kajli goat with excellent meat quality",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/27732010/pexels-photo-27732010.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Halal certification documents and embossed seals for livestock exports",
    category: "Certificates",
    certifications: ["ISO 9001:2015", "Halal Certified", "Export License"],
    description: "Complete certification documentation for export compliance",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/35723163/pexels-photo-35723163.jpeg",
    alt: "Livestock export crate being inspected before shipment",
    category: "Transport",
    description: "Professional inspection of transport containers before shipment",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/10026417/pexels-photo-10026417.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Farm workers checking medical certificates for export livestock",
    category: "Certificates",
    certifications: ["Veterinary Certificate", "Health Clearance"],
    description: "Rigorous health documentation review before export",
  },
];
