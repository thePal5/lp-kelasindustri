import logoImage from "../assets/Kelas industri Logo 1.png";
import speakerImage from "../assets/pray.jpg";

export const landingData = {
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Speaker", href: "#speaker" },
  ],
  logo: logoImage,
  hero: {
    badge: "Online Event",
    targetAudience: "Meski Tanpa Pengalaman",
    heading: "Bagaimana Freshgraduate Akuntansi dan Mahasiswa Akuntansi Bisa Segera Mendapatkan Pekerjaan Sesuai Bidangnya",
    ctaText: "Daftar Sekarang",
    subCtaText: "Tidak Dipungut Biaya!",
  },
  speaker: {
    name: "Prayitno",
    role: "Pembicara",
    image: speakerImage,
    description: "Prayitno adalah praktisi ERP(Enterprise Resource Planning) dan akuntansi bisnis FnB  Retail, sekaligus Founder SCAP ERP, yang sehari-hari terlibat langsung dalam implementasi sistem di bisnis kuliner (FnB), Retail, Theme Park, Koperasi, Hotel dan Rumah Sakit Selama bertahun-tahun di industri.",
  },
  footer: {
    text: "© PT. EBERSHINE TALENTA INTEGRASI.",
  }
};