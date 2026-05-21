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
    heading: "Bagaimana Freshgraduate dan Mahasiswa Akuntansi Bisa Segera Mendapatkan Pekerjaan Sesuai Bidangnya",
    ctaText: "Daftar Sekarang",
    subCtaText: "Tidak Dipungut Biaya!",
  },
  speaker: {
    name: "Prayitno",
    role: "Pembicara",
    image: speakerImage,
    description: "Praktisi ERP (Enterprise Resource Planning) dan akuntansi bisnis FnB & Retail, sekaligus Founder SCAP ERP. Puluhan tahun, terlibat langsung dalam implementasi sistem bisnis di berbagai industri seperti FnB, Retail, Theme Park, Koperasi, Hotel, hingga Rumah Sakit, membantu perusahaan membangun operasional dan laporan keuangan yang lebih rapi, efisien, dan terintegrasi.",
  },
  footer: {
    text: "© PT. EBERSHINE TALENTA INTEGRASI.",
  }
};