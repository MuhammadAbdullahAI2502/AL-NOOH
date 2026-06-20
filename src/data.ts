export type LivestockCategory = "all" | "cows" | "sheep" | "goats" | "buffalo";

export interface LivestockItem {
  id: string;
  name: string;
  category: Exclude<LivestockCategory, "all">;
  breed: string;
  image: string;
  weight: string;
  age: string;
  health: string;
  vaccination: string;
  exportAvail: string;
  price: string;
  tagline: string;
}

export const livestock: LivestockItem[] = [
  {
    id: "cow-holstein",
    name: "Holstein Friesian",
    category: "cows",
    breed: "Dairy & Beef Grade",
    image: "https://images.pexels.com/photos/33950078/pexels-photo-33950078.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "450 – 650 kg",
    age: "18 – 36 months",
    health: "Excellent — Vet Certified",
    vaccination: "FMD, Brucellosis, Anthrax",
    exportAvail: "Air & Sea Freight",
    price: "From $1,850 / head",
    tagline: "Strong, healthy, export-quality cattle raised on open pastures.",
  },
  {
    id: "cow-brahman",
    name: "Brahman Crossbred",
    category: "cows",
    breed: "Heat-Resistant Beef",
    image: "https://images.pexels.com/photos/27009525/pexels-photo-27009525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "500 – 750 kg",
    age: "24 – 42 months",
    health: "Prime — Disease Free",
    vaccination: "Full Export Protocol",
    exportAvail: "Sea Freight (Bulk)",
    price: "From $2,100 / head",
    tagline: "Resilient breed, ideal for Middle Eastern & African climates.",
  },
  {
    id: "sheep-awassi",
    name: "Awassi Sheep",
    category: "sheep",
    breed: "Middle Eastern Heritage",
    image: "https://images.pexels.com/photos/15272846/pexels-photo-15272846.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "45 – 65 kg",
    age: "8 – 14 months",
    health: "Excellent",
    vaccination: "PPR, FMD, Enterotoxemia",
    exportAvail: "Air & Sea Freight",
    price: "From $180 / head",
    tagline: "Fat-tailed breed prized across the Gulf for Eid and meat.",
  },
  {
    id: "sheep-merino",
    name: "Merino Cross",
    category: "sheep",
    breed: "Premium Meat & Wool",
    image: "https://images.pexels.com/photos/37741318/pexels-photo-37741318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "50 – 75 kg",
    age: "10 – 16 months",
    health: "Vet Inspected",
    vaccination: "Full Schedule Complete",
    exportAvail: "Bulk Sea Freight",
    price: "From $165 / head",
    tagline: "Selected for superior meat yield and healthy constitution.",
  },
  {
    id: "goat-boer",
    name: "Boer Goat",
    category: "goats",
    breed: "South African Meat Breed",
    image: "https://images.pexels.com/photos/28607441/pexels-photo-28607441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "55 – 90 kg",
    age: "12 – 24 months",
    health: "Premium — Show Quality",
    vaccination: "PPR, CCPP, FMD",
    exportAvail: "Air Freight Preferred",
    price: "From $320 / head",
    tagline: "Muscular, fast-growing, ideal for premium meat markets.",
  },
  {
    id: "goat-beetal",
    name: "Beetal / Bakra",
    category: "goats",
    breed: "Eid & Meat Grade",
    image: "https://images.pexels.com/photos/7807849/pexels-photo-7807849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "40 – 70 kg",
    age: "10 – 20 months",
    health: "Excellent",
    vaccination: "Certified Halal Ready",
    exportAvail: "Air & Sea Freight",
    price: "From $240 / head",
    tagline: "Traditional Eid-grade goats, hand-selected for quality.",
  },
  {
    id: "buffalo-murrah",
    name: "Murrah Buffalo Calf",
    category: "buffalo",
    breed: "Premium Dairy Line",
    image: "https://images.pexels.com/photos/28382910/pexels-photo-28382910.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "120 – 180 kg (calf)",
    age: "6 – 12 months",
    health: "Young & Robust",
    vaccination: "HS, BQ, FMD",
    exportAvail: "Sea Freight",
    price: "From $680 / head",
    tagline: "Young calves raised for future dairy and meat production.",
  },
  {
    id: "buffalo-nili",
    name: "Nili-Ravi Buffalo",
    category: "buffalo",
    breed: "River Buffalo",
    image: "https://images.pexels.com/photos/7517018/pexels-photo-7517018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    weight: "250 – 450 kg",
    age: "18 – 30 months",
    health: "Prime Condition",
    vaccination: "Full Export Protocol",
    exportAvail: "Bulk Sea Freight",
    price: "From $1,200 / head",
    tagline: "Strong-boned, high-yield buffalo for bulk export markets.",
  },
];

export const testimonials = [
  {
    quote:
      "The health and quality of the Awassi sheep we received exceeded our expectations. Documentation was flawless and the livestock arrived in prime condition.",
    name: "Khalid Al-Rashidi",
    role: "Director of Procurement",
    company: "Gulf Meat Trading Co.",
    country: "United Arab Emirates",
    flag: "🇦🇪",
  },
  {
    quote:
      "A trusted partner for over four years. Their veterinary certification process and halal compliance are second to none in the industry.",
    name: "Abdulrahman Al-Otaibi",
    role: "Import Manager",
    company: "Najd Livestock Imports",
    country: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    quote:
      "Reliable, professional, and genuinely committed to animal welfare. Every shipment of Holstein cattle has met our strict biosecurity standards.",
    name: "Dr. Hassan Ibrahim",
    role: "Chief Veterinary Officer",
    company: "Red Sea Farms",
    country: "Egypt",
    flag: "🇪🇬",
  },
  {
    quote:
      "From selection to discharge at our port, the entire export process was handled with world-class precision. Highly recommended.",
    name: "Mohammed Youssef",
    role: "CEO",
    company: "Levant Agricultural Holdings",
    country: "Jordan",
    flag: "🇯🇴",
  },
];

export const exportCountries = [
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Kuwait", flag: "🇰🇼" },
  { name: "Bahrain", flag: "🇧🇭" },
  { name: "Oman", flag: "🇴🇲" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Jordan", flag: "🇯🇴" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "South Africa", flag: "🇿🇦" },
];

export const translations = {
  en: {
    nav: {
      about: "About",
      livestock: "Livestock",
      health: "Health & Care",
      process: "Export Process",
      logistics: "Logistics",
      contact: "Contact",
    },
    heroEyebrow: "Est. 2008 • ISO 9001 Certified",
    heroTitle: "Premium Livestock Exported Worldwide",
    heroSubtitle:
      "Healthy cows, sheep, goats & buffalo calves — raised with care, certified for global export, and delivered with uncompromising professionalism.",
    ctaQuote: "Request Quote",
    ctaView: "View Livestock",
  },
  ar: {
    nav: {
      about: "من نحن",
      livestock: "الماشية",
      health: "الرعاية الصحية",
      process: "عملية التصدير",
      logistics: "الشحن",
      contact: "اتصل بنا",
    },
    heroEyebrow: "تأسست ٢٠٠٨ • حاصلة على شهادة ISO 9001",
    heroTitle: "ماشية فاخرة تُصدَّر إلى جميع أنحاء العالم",
    heroSubtitle:
      "أبقار وأغنام وماعز وعجول جاموس صحية — تربت بعناية، ومعتمدة للتصدير العالمي، وتُسلَّم بأعلى معايير الاحتراف.",
    ctaQuote: "طلب عرض سعر",
    ctaView: "عرض الماشية",
  },
};
