const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const cardsContainer = document.getElementById('cardsContainer');
const infoGrid = document.getElementById('infoGrid');
const galleryGrid = document.getElementById('galleryGrid');
const kegiatanGrid = document.getElementById('kegiatanGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

// Data kampus dengan informasi lengkap (hanya Palembang)
const kampusData = {
  1: {
    nama: "Satu University Palembang",
    kota: "Palembang",
    alamat: "Rukan Taman Harapan Indah B3&B5, Jl. Letda Abdul Rozak, Duku, Kec. Ilir Tim. II, Kota Palembang, Sumatera Selatan 30163",
    link: "https://maps.app.goo.gl/kaT8XCfuDceyLUTJ9",
    videoEksplorasi: "assets/video/video_2.mp4",
    thumbnail: "assets/img/gal_depan.jpg",
    foto: [
      "assets/img/gal_depan.jpg",
      "assets/img/gal_pendata.jpg",
      "assets/img/gal_staf.jpg",
      "assets/img/gal_teoripraktek.jpg",
      "assets/img/gal_labkom.jpg",
      "assets/img/gal_rkelas.jpg",
      "assets/img/gal_perpus.jpg",
      "assets/img/gal_refreshing.jpg",
      "assets/img/gal_toilet.jpg",
      "assets/img/gal_meeting.jpg",
      "assets/img/gal_sofa.jpg"
    ],
    kegiatan: [
      "assets/img/keg_diskusi.jpg",
      "assets/img/keg_labkom.jpg",
      "assets/img/keg_mengajar.jpg",
      "assets/img/keg_greenovate.jpg",
      "assets/img/keg_presentasi.jpg"
    ],
    prodi: [
      "Teknik Informatika",
      "Sistem Informasi"
    ],
    fasilitas: [
      "Ruang Kelas Reguler",
      "Ruang Kelas Kreatif",
      "Laboratorium Komputer Modern",
      "Perpustakaan Digital",
      "Musholla",
      "Discuss & Co-working Space",
      "Gedung Full AC dan WIFI"
    ],
    jamOperasional: "Senin - Jumat: 09.00 - 18.00 WIB | Sabtu: 09.00 - 15.00 WIB",
    testimoni: {
      text: "Kampus hits dengan vibe kekinian! Cocok banget buat yang suka belajar sambil nongkrong.",
      author: "- Ira, Mahasiswa Sistem Informasi Angkatan 2025"
    }
  }
};

// Generate cards horizontal
function generateCards() {
  cardsContainer.innerHTML = '';
  Object.keys(kampusData).forEach(id => {
    const data = kampusData[id];
    const card = document.createElement('div');
    card.className = 'kampus-card reveal';
    card.dataset.kampus = id;
    
    card.innerHTML = `
      <div class="card-image" style="background-image: url('${data.thumbnail}')"></div>
      <div class="card-content">
        <h3>${data.nama}</h3>
        <p class="card-address"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>${data.alamat}</p>
        <span class="card-tag">Klik untuk detail lengkap →</span>
      </div>
    `;
    
    card.addEventListener('click', () => tampilkanKampus(id));
    cardsContainer.appendChild(card);
  });
}

// Fungsi untuk menutup popup
function tutupPopup() {
  popup.classList.add('hidden');
}

// Fungsi untuk tampilkan data kampus dengan GRID layout
function tampilkanKampus(id) {
  const data = kampusData[id];
  
  document.getElementById('popupNama').textContent = data.nama;
  
  // Generate info grid
  infoGrid.innerHTML = `
    <div class="info-card">
      <h3><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>Lokasi</h3>
      <p>${data.alamat}</p>
      <a href="${data.link}" target="_blank" class="map-card">
        <svg viewBox="0 0 24 24" class="map-card-pin" fill="none" stroke="currentColor" stroke-width="1.4" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/>
          <circle cx="12" cy="9" r="2.4"/>
        </svg>
        <span class="map-card-label">Buka Lokasi di Google Maps</span>
      </a>
    </div>
    
    <div class="info-card">
      <h3><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Jam Operasional</h3>
      <p>${data.jamOperasional}</p>
    </div>
    
    <div class="info-card">
      <h3><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/></svg>Program Studi</h3>
      <ul>
        ${data.prodi.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
    
    <div class="info-card">
      <h3><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>Fasilitas</h3>
      <ul>
        ${data.fasilitas.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
    
    <div class="testimonial-card">
      <p>${data.testimoni.text}</p>
      <p class="author">${data.testimoni.author}</p>
    </div>
  `;
  
  // Generate gallery sebagai track yang berjalan otomatis ke samping (marquee).
  // Foto digandakan 2x supaya loop-nya mulus tanpa putus.
  const fotoItems = data.foto.map(src => `
    <div class="gallery-item" data-src="${src}">
      <img src="${src}" alt="Foto Fasilitas" loading="lazy" />
    </div>
  `).join('');
  galleryGrid.innerHTML = `<div class="gallery-track" style="animation-duration:${data.foto.length * 3.2}s">${fotoItems}${fotoItems}</div>`;

  // Add click event untuk zoom (pakai event delegation karena foto digandakan)
  galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    lightboxImage.src = item.dataset.src;
    lightbox.classList.remove('hidden');
  });

  // Generate Kegiatan Mahasiswa - carousel sama persis seperti Galeri Fasilitas
  if (data.kegiatan && data.kegiatan.length) {
    const kegiatanItems = data.kegiatan.map(src => `
      <div class="gallery-item" data-src="${src}">
        <img src="${src}" alt="Foto Kegiatan" loading="lazy" />
      </div>
    `).join('');
    kegiatanGrid.innerHTML = `<div class="gallery-track gallery-track-reverse" style="animation-duration:${data.kegiatan.length * 3.2}s">${kegiatanItems}${kegiatanItems}</div>`;
  } else {
    kegiatanGrid.innerHTML = '';
  }

  kegiatanGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    lightboxImage.src = item.dataset.src;
    lightbox.classList.remove('hidden');
  });

  // Video eksplorasi jadi latar belakang di dalam popup detail
  const kampusVideo = document.getElementById('kampusVideo');
  if (data.videoEksplorasi) {
    kampusVideo.querySelector('source').src = data.videoEksplorasi;
    kampusVideo.load();
    kampusVideo.play().catch(() => {});
  } else {
    kampusVideo.pause();
    kampusVideo.querySelector('source').src = '';
  }

  popup.classList.remove('hidden');
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.add('hidden');
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Tutup popup
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  tutupPopup();
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    tutupPopup();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!lightbox.classList.contains('hidden')) {
      closeLightbox();
    } else if (!popup.classList.contains('hidden')) {
      tutupPopup();
    }
  }
});

// Initialize
generateCards();
  
// Pastikan video kampus Palembang otomatis jalan begitu terlihat (misalnya saat discroll di dalam popup)
(function() {
  const vid = document.getElementById('kampusVideo');
  if (!vid) return;
  const tryPlay = () => { vid.play().catch(() => {}); };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) tryPlay();
    });
  }, { threshold: 0.15 });
  observer.observe(vid);
})();

// Musik latar: selalu coba main, tidak ada tombol untuk menghentikannya. Begitu mulai, dijaga supaya terus berjalan.
(function() {
  const music = document.getElementById('bgMusic');
  if (!music) return;

  const keepPlaying = () => music.play().catch(() => {});

  // Coba autoplay begitu halaman dibuka
  keepPlaying();
  window.addEventListener('load', keepPlaying);

  // Kalau browser memblokir autoplay bersuara, mulai begitu ada interaksi pertama apa pun.
  // Pakai capture phase supaya tidak bisa "ditahan" oleh elemen lain yang memanggil stopPropagation.
  document.addEventListener('click', keepPlaying, true);
  document.addEventListener('touchstart', keepPlaying, true);
  document.addEventListener('keydown', keepPlaying, true);
  document.addEventListener('scroll', keepPlaying, true);

  // Jaga supaya musik tidak pernah benar-benar berhenti (misal terhenti karena alasan apapun di luar kendali kita)
  music.addEventListener('pause', () => {
    setTimeout(keepPlaying, 300);
  });
})();



// Scroll reveal: elemen ber-class "reveal" muncul halus (fade + slide up) begitu masuk layar
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveals() {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el));
  }

  // Jalankan setelah elemen awal (header, footer) siap
  document.addEventListener('DOMContentLoaded', observeReveals);
  // Kartu kampus dibuat lewat JS (generateCards) setelah skrip ini jalan, jadi panggil lagi di akhir
  observeReveals();
  window.addEventListener('load', observeReveals);
})();
