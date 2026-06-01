const invitationData = {
  seoTitle: "Undangan Pernikahan Connie Wahyu Wijayanti, S.Kep., Ns. & Agi Yoko Priyambodo, S.Kom.",
  heroMessage: "Dengan penuh rasa syukur, kami mengundang Anda untuk hadir pada hari bahagia kami.",
  quote:
    "\"Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup supaya kamu cenderung dan merasa tenteram kepadanya.\"",
  quoteSource: "QS. Ar-Rum: 21",
  closingTitle: "Merupakan suatu kehormatan dan kebahagiaan bagi kami",
  closingMessage:
    "Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami mengucapkan terima kasih.",
  couple: {
    shortNames: "Connie Wahyu Wijayanti, S.Kep., Ns. & Agi Yoko Priyambodo, S.Kom.",
    summaryNames: "Connie & Agi",
    introNames: "Connie & Agi",
    image: "assets/images/Edit-2907.jpg",
    bride: {
      name: "Connie Wahyu Wijayanti, S.Kep., Ns.",
      parents: "Putri pertama dari Bapak Basuki & Ibu Widya",
    },
    groom: {
      name: "Agi Yoko Priyambodo, S.Kom.",
      parents: "Putra kedua dari Bapak Supriyana & Ibu Dwi Yani",
    },
  },
  event: {
    displayDate: "Minggu, 12 Oktober 2026",
    venueShort: "Grand Ambarukmo, Yogyakarta",
    address: "Jl. Laksda Adisucipto No.80, Sleman, Daerah Istimewa Yogyakarta",
    akad: {
      date: "Minggu, 12 Oktober 2026",
      time: "08.00 WIB - selesai",
      venue: "Ballroom Grand Ambarukmo, Yogyakarta",
    },
    reception: {
      date: "Minggu, 12 Oktober 2026",
      time: "11.00 WIB - 14.00 WIB",
      venue: "Ballroom Grand Ambarukmo, Yogyakarta",
    },
    mapsEmbed:
      "https://www.google.com/maps?q=Grand%20Ambarrukmo%20Yogyakarta&z=15&output=embed",
    mapsLink: "https://maps.google.com/?q=Grand%20Ambarrukmo%20Yogyakarta",
  },
  story: [
    {
      year: "2021",
      title: "Pertemuan Pertama",
      description: "Kami pertama kali bertemu dalam sebuah proyek kreatif dan mulai saling mengenal lebih dekat.",
    },
    {
      year: "2023",
      title: "Menumbuhkan Keyakinan",
      description: "Setelah melalui banyak percakapan dan perjalanan, kami mantap melangkah ke hubungan yang lebih serius.",
    },
    {
      year: "2026",
      title: "Menuju Hari Bahagia",
      description: "Dengan restu keluarga dan doa orang terdekat, kami bersiap memulai babak hidup yang baru bersama.",
    },
  ],
  gallery: [
    {
      title: "Warm Morning",
      image: "assets/images/Edit-4479.jpg",
    },
    {
      title: "Golden Promise",
      image: "assets/images/Edit-3168.jpg",
    },
    {
      title: "Quiet Afternoon",
      image: "assets/images/Edit-3202.jpg",
    },
    {
      title: "Evening Bloom",
      image: "assets/images/Edit-4404.jpg",
    },
  ],
  music: {
    enabled: true,
    labelPlay: "Putar Musik",
    labelPause: "Jeda Musik",
    defaultVolume: 0.24,
    source: "Yann Tiersen - Comptine d'un autre été (Amélie)  Relaxing Piano Music.mp3",
  },
};

const storageKey = "wedding-rsvp-demo";

const elements = {
  introOverlay: document.getElementById("introOverlay"),
  openInvitation: document.getElementById("openInvitation"),
  guestName: document.getElementById("guestName"),
  heroNames: document.getElementById("heroNames"),
  heroDate: document.getElementById("heroDate"),
  coupleNames: document.getElementById("coupleNames"),
  heroMessage: document.getElementById("heroMessage"),
  eventDateLong: document.getElementById("eventDateLong"),
  eventVenueShort: document.getElementById("eventVenueShort"),
  openingQuote: document.getElementById("openingQuote"),
  quoteSource: document.getElementById("quoteSource"),
  couplePhoto: document.getElementById("couplePhoto"),
  coupleSummaryLabel: document.getElementById("coupleSummaryLabel"),
  coupleFeatureNames: document.getElementById("coupleFeatureNames"),
  brideName: document.getElementById("brideName"),
  brideParents: document.getElementById("brideParents"),
  groomName: document.getElementById("groomName"),
  groomParents: document.getElementById("groomParents"),
  storyList: document.getElementById("storyList"),
  akadDate: document.getElementById("akadDate"),
  akadTime: document.getElementById("akadTime"),
  akadVenue: document.getElementById("akadVenue"),
  receptionDate: document.getElementById("receptionDate"),
  receptionTime: document.getElementById("receptionTime"),
  receptionVenue: document.getElementById("receptionVenue"),
  galleryGrid: document.getElementById("galleryGrid"),
  venueAddress: document.getElementById("venueAddress"),
  mapsFrame: document.getElementById("mapsFrame"),
  mapsLink: document.getElementById("mapsLink"),
  musicToggle: document.getElementById("musicToggle"),
  volumeFloat: document.getElementById("volumeFloat"),
  volumeFloatButton: document.getElementById("volumeFloatButton"),
  volumeFloatIcon: document.getElementById("volumeFloatIcon"),
  volumeWaveSmall: document.getElementById("volumeWaveSmall"),
  volumeWaveLarge: document.getElementById("volumeWaveLarge"),
  volumeMuteLine: document.getElementById("volumeMuteLine"),
  volumeFloatPanel: document.getElementById("volumeFloatPanel"),
  volumeSlider: document.getElementById("volumeSlider"),
  rsvpForm: document.getElementById("rsvpForm"),
  formFeedback: document.getElementById("formFeedback"),
  wishList: document.getElementById("wishList"),
  rsvpSummaryTitle: document.getElementById("rsvpSummaryTitle"),
  rsvpSummaryCount: document.getElementById("rsvpSummaryCount"),
  closingTitle: document.getElementById("closingTitle"),
  closingMessage: document.getElementById("closingMessage"),
  closingSignature: document.getElementById("closingSignature"),
};

let audioElement;
let isMusicPlaying = false;
let currentVolume = invitationData.music.defaultVolume;
let isVolumePanelOpen = false;

function setText(id, value) {
  if (id) {
    id.textContent = value;
  }
}

function resolveAssetPath(path) {
  if (!path) {
    return "";
  }

  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:") || path.startsWith("/")) {
    return path;
  }

  if (path.startsWith("assets/")) {
    return path;
  }

  return `assets/images/${path}`;
}

function applyCoupleImage(imagePath) {
  if (!elements.couplePhoto || !imagePath) {
    return;
  }
  elements.couplePhoto.style.backgroundImage =
    `linear-gradient(180deg, rgba(255, 249, 242, 0.04), rgba(49, 35, 28, 0.12)), url("${resolveAssetPath(imagePath)}")`;
}

function applyVolumeLevel() {
  if (audioElement) {
    audioElement.volume = currentVolume;
  }

  if (!elements.volumeSlider || !elements.volumeFloatIcon) {
    return;
  }

  elements.volumeSlider.value = String(Math.round(currentVolume * 100));

  if (currentVolume === 0) {
    elements.volumeWaveSmall.hidden = true;
    elements.volumeWaveLarge.hidden = true;
    elements.volumeMuteLine.hidden = false;
    return;
  }

  if (currentVolume < 0.16) {
    elements.volumeWaveSmall.hidden = false;
    elements.volumeWaveLarge.hidden = true;
    elements.volumeMuteLine.hidden = true;
    return;
  }

  if (currentVolume < 0.28) {
    elements.volumeWaveSmall.hidden = false;
    elements.volumeWaveLarge.hidden = false;
    elements.volumeMuteLine.hidden = true;
    elements.volumeWaveLarge.style.opacity = "0.45";
    return;
  }

  elements.volumeWaveSmall.hidden = false;
  elements.volumeWaveLarge.hidden = false;
  elements.volumeMuteLine.hidden = true;
  elements.volumeWaveLarge.style.opacity = "1";
}

function setVolumePanelState(open) {
  isVolumePanelOpen = open;
  elements.volumeFloatButton.setAttribute("aria-expanded", String(open));
  elements.volumeFloatPanel.hidden = !open;
}

function populateContent() {
  document.title = invitationData.seoTitle;
  setText(elements.heroNames, invitationData.couple.introNames);
  setText(elements.coupleNames, invitationData.couple.summaryNames);
  setText(elements.heroDate, invitationData.event.displayDate);
  setText(elements.heroMessage, invitationData.heroMessage);
  setText(elements.eventDateLong, invitationData.event.displayDate);
  setText(elements.eventVenueShort, invitationData.event.venueShort);
  setText(elements.openingQuote, invitationData.quote);
  setText(elements.quoteSource, invitationData.quoteSource);
  setText(elements.coupleSummaryLabel, invitationData.couple.summaryNames);
  setText(elements.coupleFeatureNames, invitationData.event.displayDate);
  setText(elements.brideName, invitationData.couple.bride.name);
  setText(elements.brideParents, invitationData.couple.bride.parents);
  setText(elements.groomName, invitationData.couple.groom.name);
  setText(elements.groomParents, invitationData.couple.groom.parents);
  applyCoupleImage(invitationData.couple.image);
  setText(elements.akadDate, invitationData.event.akad.date);
  setText(elements.akadTime, invitationData.event.akad.time);
  setText(elements.akadVenue, invitationData.event.akad.venue);
  setText(elements.receptionDate, invitationData.event.reception.date);
  setText(elements.receptionTime, invitationData.event.reception.time);
  setText(elements.receptionVenue, invitationData.event.reception.venue);
  setText(elements.venueAddress, invitationData.event.address);
  setText(elements.closingTitle, invitationData.closingTitle);
  setText(elements.closingMessage, invitationData.closingMessage);
  setText(elements.closingSignature, invitationData.couple.summaryNames);
  elements.mapsFrame.src = invitationData.event.mapsEmbed;
  elements.mapsLink.href = invitationData.event.mapsLink;
}

function personalizeGuest() {
  const params = new URLSearchParams(window.location.search);
  const guest = params.get("to");
  const normalized = guest ? guest.trim() : "";
  setText(elements.guestName, normalized || "Tamu Undangan");
}

function renderStory() {
  elements.storyList.innerHTML = invitationData.story
    .map(
      (item) => `
        <article class="story-card reveal">
          <span class="story-year">${item.year}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  elements.galleryGrid.innerHTML = invitationData.gallery
    .map(
      (item) => `
        <figure
          class="gallery-card reveal"
          style="background-image:linear-gradient(180deg, transparent, rgba(38, 24, 17, 0.32)), url('${resolveAssetPath(item.image)}')"
        >
          <figcaption>${item.title}</figcaption>
        </figure>
      `
    )
    .join("");
}

function getStoredRsvp() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveStoredRsvp(entries) {
  localStorage.setItem(storageKey, JSON.stringify(entries));
}

function renderRsvpList() {
  const entries = getStoredRsvp();
  if (!entries.length) {
    elements.rsvpSummaryTitle.textContent = "Belum ada konfirmasi";
    elements.rsvpSummaryCount.textContent = "0 tamu tercatat di browser ini.";
    elements.wishList.innerHTML =
      '<div class="wish-item"><strong>Belum ada data</strong><p>Isi form RSVP untuk melihat hasil demo tersimpan di browser.</p></div>';
    return;
  }

  const totalGuests = entries.reduce((sum, item) => sum + item.count, 0);
  elements.rsvpSummaryTitle.textContent = `${entries.length} konfirmasi tersimpan`;
  elements.rsvpSummaryCount.textContent = `${totalGuests} tamu tercatat di browser ini.`;
  elements.wishList.innerHTML = entries
    .slice()
    .reverse()
    .map(
      (item) => `
        <div class="wish-item">
          <strong>${item.name} • ${item.status}</strong>
          <span>${item.count} tamu</span>
          <p>${item.message || "Tanpa pesan tambahan."}</p>
        </div>
      `
    )
    .join("");
}

function handleRsvpSubmit(event) {
  event.preventDefault();
  const formData = new FormData(elements.rsvpForm);
  const name = String(formData.get("name") || "").trim();
  const status = String(formData.get("status") || "").trim();
  const count = Number(formData.get("count"));
  const message = String(formData.get("message") || "").trim();

  if (!name || !status || !Number.isFinite(count) || count < 1) {
    elements.formFeedback.textContent = "Lengkapi nama, status kehadiran, dan jumlah tamu yang valid.";
    return;
  }

  const entries = getStoredRsvp();
  entries.push({
    name,
    status,
    count,
    message,
    submittedAt: new Date().toISOString(),
  });
  saveStoredRsvp(entries);
  elements.rsvpForm.reset();
  elements.formFeedback.textContent = "RSVP tersimpan di browser ini. Ganti mekanisme submit saat data final siap.";
  renderRsvpList();
}

async function toggleMusic(forcePlay = false) {
  if (!invitationData.music.enabled) {
    return;
  }

  if (!audioElement) {
    audioElement = new Audio(invitationData.music.source);
    audioElement.loop = true;
    audioElement.preload = "auto";
    audioElement.volume = currentVolume;
    audioElement.addEventListener("ended", () => {
      isMusicPlaying = false;
      elements.musicToggle.textContent = invitationData.music.labelPlay;
      elements.musicToggle.setAttribute("aria-pressed", "false");
    });
  }

  if (!audioElement) {
    elements.musicToggle.textContent = "Audio tidak didukung";
    elements.musicToggle.disabled = true;
    return;
  }

  const shouldPlay = forcePlay || !isMusicPlaying;
  if (!shouldPlay) {
    audioElement.pause();
    isMusicPlaying = false;
    elements.musicToggle.textContent = invitationData.music.labelPlay;
    elements.musicToggle.setAttribute("aria-pressed", "false");
    return;
  }

  try {
    audioElement.volume = currentVolume;
    await audioElement.play();
  } catch {
    if (forcePlay) {
      elements.musicToggle.textContent = "Audio tidak didukung";
    }
    throw new Error("Audio gagal diputar");
  }

  isMusicPlaying = true;
  elements.musicToggle.textContent = invitationData.music.labelPause;
  elements.musicToggle.setAttribute("aria-pressed", "true");
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}

function openInvitation() {
  document.body.classList.remove("locked");
  elements.introOverlay.classList.add("is-hidden");
  toggleMusic(true).catch(() => {
    elements.musicToggle.textContent = invitationData.music.labelPlay;
  });
}

function init() {
  document.body.classList.add("locked");
  populateContent();
  personalizeGuest();
  renderStory();
  renderGallery();
  renderRsvpList();
  applyVolumeLevel();
  setupReveal();
  elements.rsvpForm.addEventListener("submit", handleRsvpSubmit);
  elements.openInvitation.addEventListener("click", openInvitation);
  elements.musicToggle.addEventListener("click", () => {
    toggleMusic().catch(() => {
      elements.musicToggle.textContent = "Audio gagal diputar";
    });
  });
  elements.volumeFloatButton.addEventListener("click", (event) => {
    event.stopPropagation();
    setVolumePanelState(!isVolumePanelOpen);
  });
  elements.volumeSlider.addEventListener("input", (event) => {
    currentVolume = Number(event.target.value) / 100;
    applyVolumeLevel();
  });
  document.addEventListener("click", (event) => {
    if (!elements.volumeFloat.contains(event.target)) {
      setVolumePanelState(false);
    }
  });
}

init();
