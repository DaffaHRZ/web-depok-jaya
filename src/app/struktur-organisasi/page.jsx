import React from 'react';

// Data pejabat (tidak ada perubahan)
const officials = [
  { 
    name: 'Herliana Mahrani, S.STP', 
    position: 'Lurah' 
  },
  { 
    name: 'Heru Bowo Leksono, SE, SH', 
    position: 'Sekretaris Kelurahan' 
  },
  { 
    name: 'Tri Juliutomo, SH', 
    position: 'Kepala Seksi Pemerintahan, Ketentraman & Ketertiban' 
  },
  { 
    name: 'Eli Elywati, SH', 
    position: 'Kepala Seksi Ekonomi & Pembangunan' 
  },
  { 
    name: 'Wiwien Mardiyani, SE, MM', 
    position: 'Kepala Seksi Kemasyarakatan' 
  },
];

export default function StrukturOrganisasi() {
  return (
    <main id="main">
      {/* Hero Section - PERUBAHAN DI SINI */}
      <section className="hero-section text-center py-5" style={{
        background: 'linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(45,128,253,1) 100%)',
        color: 'white'
      }}>
        <div className="container">
          {/* Menambahkan mb-3 untuk mengurangi jarak bawah */}
          <h1 className="display-4 fw-bold mb-3">Struktur Organisasi</h1>
          <p className="lead col-lg-8 mx-auto">
            Mengenal Tim di Balik Pelayanan Publik Kelurahan Depok Jaya.
          </p>
        </div>
      </section>

      {/* Bagan Struktur Organisasi Section (tidak ada perubahan) */}
      <section id="struktur" className="struktur-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Bagan Struktur Organisasi</h2>
            <p className="text-muted">
              Bagan resmi yang menjadi landasan kerja kami dalam melayani masyarakat.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <img
                    src="/img/struktur2.png" // Ganti path ini jika diperlukan
                    className="img-fluid rounded"
                    alt="Bagan Struktur Organisasi Kelurahan Depok Jaya"
                  />
                  <figcaption className="figure-caption mt-3 fst-italic">
                    <strong>Dasar Hukum:</strong> Lampiran II Peraturan Walikota Depok Nomor III Tahun 2018
                    tentang Kedudukan, Susunan Organisasi, Tugas Fungsi, serta Tata Kerja Kelurahan.
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Daftar Pejabat Section (tidak ada perubahan) */}
      <section id="pejabat" className="pejabat-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Pejabat Struktural</h2>
            <p className="text-muted">
              Tim profesional yang berdedikasi untuk Depok Jaya.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Menampilkan Lurah secara terpisah agar lebih menonjol */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center shadow-sm border-primary border-2">
                <div className="card-body">
                  <div className="mb-3">
                    <svg width="80" height="80" fill="currentColor" className="bi bi-person-circle text-primary" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                  </div>
                  <h5 className="card-title fw-bold">{officials[0].name}</h5>
                  <p className="card-text text-primary fw-bold">{officials[0].position}</p>
                </div>
              </div>
            </div>
            
            {/* Menampilkan pejabat lainnya */}
            {officials.slice(1).map((official, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 text-center shadow-sm border-0">
                  <div className="card-body">
                    <div className="mb-3">
                      <svg width="80" height="80" fill="currentColor" className="bi bi-person-circle text-secondary" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                      </svg>
                    </div>
                    <h5 className="card-title fw-bold">{official.name}</h5>
                    <p className="card-text text-muted">{official.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}