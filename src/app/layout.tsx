import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

// Metadata bawaan Next.js
export const metadata: Metadata = {
  title: "Website Resmi Kelurahan Depok Jaya",
  description: "Melayani masyarakat dengan cepat, transparan, dan modern",
};

// Definisi props layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <nav>
          <div
            className="container"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {/* Logo sebelah kiri */}
            <Image
              src="/img/Lambang_Kota_Depok.png"
              alt="Logo Kota Depok"
              width={60}
              height={80}
            />

            {/* Judul */}
            <h1>Kelurahan Depok Jaya</h1>

            {/* Menu navigasi */}
            <ul
              style={{
                marginLeft: "auto",
                display: "flex",
                gap: "15px",
                listStyle: "none",
              }}
            >
              <li>
                <a href="#tentang">Tentang</a>
              </li>
              <li>
                <a href="#layanan">Layanan</a>
              </li>
              <li>
                <a href="#berita">Berita</a>
              </li>
              <li>
                <a href="#lokasi">Lokasi</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Render halaman */}
        {children}

        <footer className="footer">
          <div className="container footer-info">
            <h3>Kelurahan Depok Jaya</h3>
            <p>Jl. Nusantara Raya RT 07 / RW 01, Pancoran Mas, Kota Depok</p>
            <p>Email: depokjaya@depok.go.id</p>
            <p>Telp: (021) 123456</p>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Kelurahan Depok Jaya
          </div>
        </footer>
      </body>
    </html>
  );
}
