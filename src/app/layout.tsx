// Menandakan ini adalah Client Component untuk menggunakan state dan event listener
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import "./globals.css";

// Konfigurasi font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                priority
              />
              <div className="brand-text">
                <span className="brand-title">Kelurahan Depok Jaya</span>
                <span className="brand-subtitle">Kota Depok</span>
              </div>
            </Link>

            {/* Menu Navigasi */}
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
                <Link
                  href="/struktur-organisasi"
                  className="navbar-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Struktur Organisasi
                </Link>
              </li>
            </ul>

            {/* Tombol Hamburger (Mobile) */}
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
            </div>

            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Kelurahan Depok Jaya. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Font Awesome */}
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
