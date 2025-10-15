import Link from "next/link";
import { notFound } from "next/navigation";

// ✅ Tipe parameter route dinamis
interface BeritaDetailProps {
  params: {
    slug: string;
  };
}

// ✅ Data dummy berita
const newsData = [
  {
    slug: "kerja-bakti-rutin-rw01",
    title: "Kerja Bakti Rutin Warga RW 01 Depok Jaya",
    date: "15 Oktober 2025",
    content: `
      <p>Warga RW 01 Kelurahan Depok Jaya melaksanakan kegiatan kerja bakti rutin 
      untuk menjaga kebersihan lingkungan. Kegiatan ini diikuti oleh seluruh warga 
      dan perangkat RT setempat, serta didukung oleh pihak kelurahan.</p>
      <p>Kegiatan berlangsung dengan semangat gotong royong dan diakhiri dengan 
      sesi makan bersama sebagai bentuk kebersamaan antarwarga.</p>
    `,
  },
  {
    slug: "penyuluhan-stunting-puskesmas",
    title: "Penyuluhan Stunting oleh Puskesmas Pancoran Mas",
    date: "12 Oktober 2025",
    content: `
      <p>Puskesmas Pancoran Mas mengadakan penyuluhan mengenai pencegahan stunting 
      di aula Kelurahan Depok Jaya. Kegiatan ini dihadiri oleh kader posyandu, 
      ibu-ibu PKK, dan perangkat kelurahan.</p>
      <p>Dalam penyuluhan ini dijelaskan pentingnya gizi seimbang dan pola makan 
      sehat untuk tumbuh kembang anak-anak usia dini.</p>
    `,
  },
  {
    slug: "jadwal-sim-keliling",
    title: "Jadwal Pelayanan SIM Keliling di Kelurahan",
    date: "10 Oktober 2025",
    content: `
      <p>Pelayanan SIM keliling akan hadir di halaman Kantor Kelurahan Depok Jaya 
      setiap hari Kamis pukul 08.00 - 12.00.</p>
      <p>Warga diharapkan membawa dokumen lengkap saat melakukan perpanjangan, 
      seperti fotokopi KTP, SIM lama, dan bukti pemeriksaan kesehatan.</p>
    `,
  },
];

// ✅ Komponen halaman detail berita
export default function BeritaDetail({ params }: BeritaDetailProps) {
  const berita = newsData.find((item) => item.slug === params.slug);

  if (!berita) return notFound();

  return (
    <main id="main" className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Beranda
          </Link>{" "}
          /{" "}
          <Link
            href="/#berita"
            className="hover:text-blue-600 transition-colors"
          >
            Berita
          </Link>{" "}
          / <span className="text-gray-800 font-medium">{berita.title}</span>
        </div>

        {/* Card Berita */}
        <article className="bg-white shadow-lg rounded-2xl p-8 transition hover:shadow-xl duration-300">
          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {berita.title}
          </h1>
          <p className="text-sm text-gray-500 border-b pb-3 mb-6">
            Dipublikasikan pada {berita.date}
          </p>

          <div
            className="prose max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: berita.content }}
          />

          <div className="mt-10">
            <Link
              href="/#berita"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali ke Berita
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
