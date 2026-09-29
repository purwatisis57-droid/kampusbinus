const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const cardsContainer = document.getElementById('cardsContainer');
const infoGrid = document.getElementById('infoGrid');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

// Data kampus dengan informasi lengkap
const kampusData = {
  1: {
    nama: "Satu University Bandung",
    kota: "Bandung",
    alamat: "Jl. BKR No.63, Ancol, Kec. Regol, Kota Bandung, Jawa Barat 40253",
    link: "https://maps.app.goo.gl/Lq3kMqsRoDP8NSx59",
    thumbnail: "assets/img/img_1.jpg",
    foto: [
      "assets/img/img_1.jpg",
      "assets/img/img_2.jpg",
      "assets/img/img_3.jpg"
    ],
    prodi: [
      "Teknik Informatika",
      "Sistem Informasi",
      "Desain Komunikasi Visual",
      "Manajemen",
      "Akuntansi",
      "Psikologi"
    ],
    fasilitas: [
      "Ruang Kelas Regular",
      "Ruang Kelas Kreatif",
      "Laboratorium Komputer Modern",
      "Perpustakaan Digital",
      "Discuss & Co-working Space",
      "Musholla",
      "Lab. Digital Marketing",
      "Gedung Full AC",
      "Free WiFi di Seluruh Area Kampus"
    ],
    jamOperasional: "Senin - Jumat: 09.00 - 18.00 WIB | Sabtu: 09.00 - 15.00 WIB",
    testimoni: {
      text: "Kampus yang nyaman dengan fasilitas lengkap. Dosennya asik dan suasana belajarnya menyenangkan!",
      author: "- Rina, Mahasiswa TI Angkatan 2023"
    }
  },
  2: {
    nama: "Satu University Pontianak",
    kota: "Pontianak",
    alamat: "Komplek Ruko Ayani Sentra Bisnis, Jl. Jenderal Ahmad Yani No.23, Parit Tokaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78121",
    link: "https://maps.app.goo.gl/ARXJmaXbaYVQoW6cA",
    thumbnail: "assets/img/img_4.jpg",
    foto: [
      "assets/img/img_4.jpg",
      "assets/img/img_5.jpg",
      "assets/img/img_6.jpg"
    ],
    prodi: [
      "Akutansi",
      "Manajemen"
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
    jamOperasional: "Senin - Jumat: 09.00 - 17.00 WIB | Sabtu: 09.00 - 12.00 WIB",
    testimoni: {
      text: "Lokasi strategis di pusat kota, mudah dijangkau. Fasilitasnya oke banget untuk belajar coding!",
      author: "- Budi, Mahasiswa SI Angkatan 2022"
    }
  },
  3: {
    nama: "Satu University Palembang",
    kota: "Palembang",
    alamat: "Rukan Taman Harapan Indah B3&B5, Jl. Letda Abdul Rozak, Duku, Kec. Ilir Tim. II, Kota Palembang, Sumatera Selatan 30163",
    link: "https://maps.app.goo.gl/kaT8XCfuDceyLUTJ9",
    videoEksplorasi: "assets/video/video_2.mp4",
    thumbnail: "assets/img/img_7.jpg",
    foto: [
      "assets/img/img_7.jpg",
      "assets/img/img_8.jpg",
      "assets/img/img_9.jpg"
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
    card.className = 'kampus-card';
    card.dataset.kampus = id;
    
    card.innerHTML = `
      <div class="card-image" style="background-image: url('${data.thumbnail}')"></div>
      <div class="card-content">
        <h3>${data.nama}</h3>
        <p>📍 ${data.alamat}</p>
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
      <h3>📍 Lokasi</h3>
      <p><a href="${data.link}" target="_blank">${data.alamat}</a></p>
    </div>
    
    <div class="info-card">
      <h3>🕐 Jam Operasional</h3>
      <p>${data.jamOperasional}</p>
    </div>
    
    <div class="info-card">
      <h3>🎓 Program Studi</h3>
      <ul>
        ${data.prodi.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
    
    <div class="info-card">
      <h3>🏢 Fasilitas</h3>
      <ul>
        ${data.fasilitas.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
    
    <div class="testimonial-card">
      <p>${data.testimoni.text}</p>
      <p class="author">${data.testimoni.author}</p>
    </div>
  `;
  
  // Generate gallery grid
  galleryGrid.innerHTML = data.foto.map(src => `
    <div class="gallery-item" data-src="${src}">
      <img src="${src}" alt="Foto Fasilitas" />
    </div>
  `).join('');
  
  // Add click event untuk zoom
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImage.src = item.dataset.src;
      lightbox.classList.remove('hidden');
    });
  });

  // Tampilkan & putar video eksplorasi khusus untuk Satu University Palembang
  const videoSection = document.getElementById('videoSection');
  const kampusVideo = document.getElementById('kampusVideo');
  if (data.videoEksplorasi) {
    videoSection.style.display = 'block';
    kampusVideo.querySelector('source').src = data.videoEksplorasi;
    kampusVideo.load();
    kampusVideo.play().catch(() => {});
  } else {
    videoSection.style.display = 'none';
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
