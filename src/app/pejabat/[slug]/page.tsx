import { notFound } from "next/navigation";

const officials = [
  {
    name: "Herliana Mahrani, S.STP",
    position: "Lurah",
    slug: "herliana-mahrani-s-stp",
    bio: "Memimpin penyelenggaraan pemerintahan, pembangunan, dan pelayanan publik di Kelurahan Depok Jaya.",
    photo: "/img/user.png",
  },
  {
    name: "Heru Bowo Leksono, SE, SH",
    position: "Sekretaris Kelurahan",
    slug: "heru-bowo-leksono-se-sh",
    bio: "Membantu lurah dalam koordinasi administrasi dan pengelolaan sumber daya kelurahan.",
    photo: "/img/user.png",
  },
  {
    name: "Tri Juliutomo, SH",
    position: "Kepala Seksi Pemerintahan, Ketentraman & Ketertiban",
    slug: "tri-juliutomo-sh",
    bio: "Bertanggung jawab atas ketertiban umum, keamanan lingkungan, dan urusan pemerintahan.",
    photo: "/img/user.png",
  },
  {
    name: "Eli Elywati, SH",
    position: "Kepala Seksi Ekonomi & Pembangunan",
    slug: "eli-elywati-sh",
    bio: "Mengelola kegiatan pembangunan dan pemberdayaan ekonomi masyarakat kelurahan.",
    photo: "/img/eli.jpg",
  },
  {
    name: "Wiwien Mardiyani, SE, MM",
    position: "Kepala Seksi Kemasyarakatan",
    slug: "wiwien-mardiyani-se-mm",
    bio: "Menangani kegiatan sosial, pendidikan, dan kesejahteraan masyarakat.",
    photo: "/img/wiwien.jpg",
  },
];

export default function PejabatDetail({
  params,
}: {
  params: { slug: string };
}) {
  const pejabat = officials.find((p) => p.slug === params.slug);

  if (!pejabat) return notFound();

  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "calc(100vh - var(--header-height))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--background-color)",
        padding: "40px 20px",
        marginTop: "calc(-1 * var(--header-height))", // 👉 ini kunci agar balik ke tengah
      }}
    >
      <div className="container text-center">
        {/* Header */}
        <div className="mb-4">
          <h1 className="fw-bold text-primary mb-2">{pejabat.name}</h1>
          <h5 className="text-secondary">{pejabat.position}</h5>
          <div
            className="mx-auto mt-3"
            style={{ width: "80px", height: "3px", background: "#000000ff" }}
          ></div>
        </div>

        {/* Card Profil */}
        <div
          className="card border-0 shadow-lg p-4 mx-auto"
          style={{
            maxWidth: "420px",
            borderRadius: "20px",
            background: "linear-gradient(180deg, #ffffff, #f0f3f9)",
          }}
        >
          <div className="position-relative mb-4">
            <img
              src={pejabat.photo || "/img/user.png"}
              alt={pejabat.name}
              className="img-fluid rounded-circle shadow-sm border border-3 border-primary"
              width="200"
              height="200"
              style={{
                objectFit: "cover",
                backgroundColor: "#e9ecef",
              }}
            />
          </div>
          <p className="lead text-muted px-3">{pejabat.bio}</p>
        </div>

        {/* Tombol Kembali */}
        <div className="text-center mt-4">
          <a
            href="/struktur-organisasi"
            className="btn btn-outline-primary px-4 py-2 rounded-pill shadow-sm"
          >
            ← Kembali ke Struktur
          </a>
        </div>
      </div>
    </main>
  );
}
