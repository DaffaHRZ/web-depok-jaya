export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Selamat Datang di Website Resmi <br />
            Kelurahan Depok Jaya
          </h1>
          <p>
            Melayani masyarakat dengan cepat, transparan, dan modern di
            Kecamatan Pancoran Mas, Kota Depok.
          </p>
          <a href="#tentang" className="btn btn-primary">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="about">
        <div className="container">
          <div className="section-title">
            <h2>Tentang Depok Jaya</h2>
          </div>
          <p>
            Kelurahan <strong>Depok Jaya</strong> merupakan salah satu kelurahan
            di Kecamatan Pancoran Mas, Kota Depok, Jawa Barat, dengan luas
            wilayah sekitar <strong>113 hektar</strong>.
          </p>
          <p>
            Kantor Kelurahan Depok Jaya berlokasi di{" "}
            <strong>Jalan Nusantara Raya RT 07 / RW 01</strong>, sebagai pusat
            pelayanan administrasi masyarakat.
          </p>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan">
        <div className="container">
          <div className="section-title">
            <h2>Layanan Unggulan</h2>
          </div>
          <div className="grid">
            <div className="card">
              <div className="card-icon">📝</div>
              <h4>Pengajuan Surat</h4>
              <p>
                Layanan pengajuan surat keterangan domisili, usaha, dan
                kebutuhan administrasi lainnya.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🗣️</div>
              <h4>Pengaduan Warga</h4>
              <p>
                Sampaikan aspirasi, kritik, atau laporan Anda secara online
                dengan mudah.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📰</div>
              <h4>Informasi Publik</h4>
              <p>
                Akses berita terbaru, agenda kegiatan, dan pengumuman resmi
                kelurahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Berita */}
      <section id="berita" className="news">
        <div className="container">
          <div className="section-title">
            <h2>Berita & Pengumuman</h2>
          </div>
          <div className="grid">
            <article className="card">
              <h4>Gotong Royong Mingguan</h4>
              <p>
                Warga dihimbau untuk ikut serta menjaga kebersihan lingkungan
                setiap Minggu pagi.
              </p>
            </article>
            <article className="card">
              <h4>Layanan Administrasi Online</h4>
              <p>
                Pengajuan surat kini bisa dilakukan online melalui website
                kelurahan.
              </p>
            </article>
            <article className="card">
              <h4>Pembayaran PBB</h4>
              <p>
                Segera lakukan pembayaran Pajak Bumi dan Bangunan (PBB) sebelum
                jatuh tempo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="maps">
        <div className="container">
          <div className="section-title">
            <h2>Lokasi Kelurahan Depok Jaya</h2>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.132899752834!2d106.8118088759458!3d-6.389508862507663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9571dc6b03b%3A0x74fa30a545a82ab3!2sKantor%20Kelurahan%20Depok%20Jaya!5e0!3m2!1sid!2sid!4v1695967657224!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
