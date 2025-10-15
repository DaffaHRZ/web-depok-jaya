"use client";

import React from "react";
import Link from "next/link";

// ===============================
// Interface & Data Dummy
// ===============================

// Tipe untuk layanan
interface Service {
  icon: string;
  title: string;
  description: string;
}

// Tipe untuk berita
interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
}

// Data dummy untuk layanan
const services: Service[] = [
  {
    icon: "fas fa-file-alt",
    title: "Administrasi Kependudukan",
    description:
      "Pengurusan KTP, Kartu Keluarga, Akta Kelahiran, dan dokumen kependudukan lainnya.",
  },
  {
    icon: "fas fa-building",
    title: "Perizinan Usaha",
    description:
      "Layanan pembuatan Surat Keterangan Usaha (SKU) dan perizinan mikro lainnya.",
  },
  {
    icon: "fas fa-users",
    title: "Pelayanan Sosial",
    description:
      "Bantuan pengurusan BPJS, KIS, dan program bantuan sosial dari pemerintah.",
  },
];

// Data dummy untuk berita
const news: NewsItem[] = [
  {
    slug: "kerja-bakti-rutin-rw01",
    title: "Kerja Bakti Rutin Warga RW 01 Depok Jaya",
    excerpt:
      "Dalam rangka menjaga kebersihan lingkungan, warga RW 01 mengadakan kerja bakti massal...",
  },
  {
    slug: "penyuluhan-stunting-puskesmas",
    title: "Penyuluhan Stunting oleh Puskesmas Pancoran Mas",
    excerpt:
      "Puskesmas setempat memberikan edukasi pentingnya gizi anak untuk mencegah stunting...",
  },
  {
    slug: "jadwal-sim-keliling",
    title: "Jadwal Pelayanan SIM Keliling di Kelurahan",
    excerpt:
      "Berikut adalah jadwal terbaru untuk layanan perpanjangan SIM keliling bulan ini...",
  },
];

// ===============================
// Komponen Halaman Utama
// ===============================

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">
            Selamat Datang di Website Resmi Kelurahan Depok Jaya
          </h1>
          <p className="hero-subtitle">
            Melayani masyarakat dengan Cepat, Transparan, dan Modern untuk Depok
            yang Maju, Berbudaya, dan Sejahtera.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="services-section">
        <div className="container">
          <div className="section-title">
            <h2>Layanan Unggulan</h2>
            <p>
              Kami berkomitmen memberikan pelayanan terbaik untuk seluruh warga.
            </p>
          </div>
          <div className="grid">
            {services.map((service: Service, index: number) => (
              <div className="card" key={index}>
                <div className="card-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section tanpa gambar */}
      <section id="berita" className="news-section bg-white">
        <div className="container">
          <div className="section-title">
            <h2>Berita Terkini</h2>
            <p>
              Informasi dan kegiatan terbaru dari lingkungan Kelurahan Depok
              Jaya.
            </p>
          </div>
          <div className="grid">
            {news.map((item: NewsItem, index: number) => (
              <div className="card news-card" key={index}>
                <div className="news-card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.excerpt}</p>
                  <Link
                    href={`/berita/${item.slug}`}
                    className="news-card-link"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lokasi" className="location-section">
        <div className="container">
          <div className="section-title">
            <h2>Lokasi Kami</h2>
            <p>
              Kunjungi kantor kami sesuai dengan jam operasional yang berlaku.
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.7072347171799!2d106.81373977888924!3d-6.389248975160814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9571dc6b03b%3A0x74fa30a545a82ab3!2sKantor%20Kelurahan%20Depok%20Jaya!5e0!3m2!1sid!2sid!4v1760492066287!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Kelurahan Depok Jaya"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
