import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Halo Pojok Ilmu, saya ingin bertanya tentang pendaftaran kelas.",
  );

  return (
    <a
      href={`https://wa.me/6285712556125?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0073E3] text-white shadow-2xl shadow-blue-900/30 transition hover:-translate-y-1 hover:bg-[#014498]"
      aria-label="Hubungi Pojok Ilmu via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

export default FloatingWhatsApp;
