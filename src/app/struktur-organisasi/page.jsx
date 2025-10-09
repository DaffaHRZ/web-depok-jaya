import React from "react";
import Link from "next/link";

const officials = [
  {
    name: "Herliana Mahrani, S.STP",
    position: "Lurah",
    slug: "herliana-mahrani-s-stp",
    bio: "Memimpin penyelenggaraan pemerintahan, pembangunan, dan pelayanan publik di Kelurahan Depok Jaya.",
  },
  {
    name: "Heru Bowo Leksono, SE, SH",
    position: "Sekretaris Kelurahan",
    slug: "heru-bowo-leksono-se-sh",
    bio: "Membantu lurah dalam koordinasi administrasi dan pengelolaan sumber daya kelurahan.",
  },
  {
    name: "Tri Juliutomo, SH",
    position: "Kepala Seksi Pemerintahan, Ketentraman & Ketertiban",
    slug: "tri-juliutomo-sh",
    bio: "Bertanggung jawab atas ketertiban umum, keamanan lingkungan, dan urusan pemerintahan.",
  },
  {
    name: "Eli Elywati, SH",
    position: "Kepala Seksi Ekonomi & Pembangunan",
    slug: "eli-elywati-sh",
    bio: "Mengelola kegiatan pembangunan dan pemberdayaan ekonomi masyarakat kelurahan.",
  },
  {
    name: "Wiwien Mardiyani, SE, MM",
    position: "Kepala Seksi Kemasyarakatan",
    slug: "wiwien-mardiyani-se-mm",
    bio: "Menangani kegiatan sosial, pendidikan, dan kesejahteraan masyarakat.",
  },
];

export default function StrukturOrganisasi() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section
        className="hero-section text-center py-5"
        style={{
          background: "linear-gradient(90deg, #0d2149 0%, #3c5582 100%)",
          color: "white",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Struktur Organisasi</h1>
          <p className="lead col-lg-8 mx-auto">
            Mengenal Tim di Balik Pelayanan Publik Kelurahan Depok Jaya.
          </p>
        </div>
      </section>

      {/* Bagan Struktur Organisasi */}
      <section id="struktur" className="struktur-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Bagan Struktur Organisasi</h2>
            <div
              style={{
                width: "80px",
                height: "3px",
                backgroundColor: "#000",
                margin: "0 auto 20px",
              }}
            ></div>
            <p className="text-muted">
              Bagan resmi yang menjadi landasan kerja kami dalam melayani
              masyarakat.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <img
                    src="/img/struktur2.png"
                    alt="Bagan Struktur Organisasi Kelurahan Depok Jaya"
                    className="img-fluid rounded mx-auto d-block"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <figcaption className="figure-caption mt-3 fst-italic">
                    <strong>Dasar Hukum:</strong> Lampiran II Peraturan Walikota
                    Depok Nomor III Tahun 2018 tentang Kedudukan, Susunan
                    Organisasi, Tugas Fungsi, serta Tata Kerja Kelurahan.
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pejabat Section */}
      <section id="pejabat" className="pejabat-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Pejabat Struktural</h2>
            <div
              style={{
                width: "80px",
                height: "3px",
                backgroundColor: "#000",
                margin: "0 auto 20px",
              }}
            ></div>
            <p className="text-muted">
              Klik pada salah satu pejabat untuk melihat detailnya.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {officials.map((official, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Link
                  href={`/pejabat/${official.slug}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 text-center shadow-sm border-0 hover-shadow">
                    <div className="card-body">
                      <div className="mb-3">
                        <svg
                          width="80"
                          height="80"
                          fill="currentColor"
                          className="bi bi-person-circle text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 
                            11.37C3.242 11.226 4.805 10 8 10s4.757 
                            1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>
                      </div>
                      <h5 className="card-title fw-bold text-dark">
                        {official.name}
                      </h5>
                      <p className="card-text text-muted">
                        {official.position}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
