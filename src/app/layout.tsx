// Menandakan ini adalah Client Component untuk menggunakan state dan event listener
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google"; // Menggunakan font yang lebih modern
import "./globals.css";

// Konfigurasi font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Metadata tidak bisa digunakan di Client Component, jadi kita pindahkan
// Buat file baru bernama `app/metadata.ts` dan pindahkan ini ke sana jika diperlukan,
// atau biarkan Next.js menanganinya dari file `page.tsx`.
// Untuk sekarang, kita akan hapus dari sini agar tidak error.
/*
export const metadata: Metadata = {
  title: "Website Resmi Kelurahan Depok Jaya",
  description: "Melayani masyarakat dengan cepat, transparan, dan modern",
};
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State untuk mengontrol visibilitas menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="id">
      <body className={poppins.className}>
        {/* HEADER & NAVBAR */}
        <header className="header">
          <nav className="navbar container">
            {/* Brand/Logo */}
            <Link href="/" className="navbar-brand">
              <Image
                src="/img/Lambang_Kota_Depok.png"
                alt="Logo Kota Depok"
                width={40}
                height={50}
                priority // Prioritaskan loading logo
              />
              <div className="brand-text">
                <span className="brand-title">Kelurahan Depok Jaya</span>
                <span className="brand-subtitle">Kota Depok</span>
              </div>
            </Link>

            {/* Menu Navigasi Desktop */}
            <ul className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
              <li>
                <Link
                  href="/"
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#layanan"
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="/#berita"
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Berita
                </a>
              </li>
              <li>
                <a
                  href="/#lokasi"
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lokasi
                </a>
              </li>
              <li>
                <Link
                  href="/struktur-organisasi"
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Struktur Organisasi
                </Link>
              </li>
            </ul>

            {/* Tombol Hamburger untuk Mobile */}
            <button
              className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
              aria-label="menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </nav>
        </header>

        {/* Render konten halaman */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              {/* Kolom Informasi */}
              <div className="footer-col">
                <h4 className="footer-title">Kelurahan Depok Jaya</h4>
                <p>
                  Jl. Nusantara Raya No.1, Depok Jaya, Kec. Pancoran Mas, Kota
                  Depok, Jawa Barat 16432
                </p>
                <p>
                  <strong>Email:</strong> depokjaya@depok.go.id
                  <br />
                  <strong>Telp:</strong> (021) 777-1234
                </p>
              </div>

              {/* Kolom Link Cepat */}
              <div className="footer-col">
                <h4 className="footer-title">Tautan Cepat</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a href="/#layanan">Layanan</a>
                  </li>
                  <li>
                    <a href="/#berita">Berita</a>
                  </li>
                  <li>
                    <Link href="/struktur-organisasi">Struktur Organisasi</Link>
                  </li>
                </ul>
              </div>

              {/* Kolom Sosial Media */}
              <div className="footer-col">
                <h4 className="footer-title">Ikuti Kami</h4>
                <div className="social-links">
                  {/* Ganti # dengan link sosial media Anda */}
                  <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Kelurahan Depok Jaya. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
        {/* Tambahkan ini jika Anda menggunakan Font Awesome untuk ikon sosial media */}
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
