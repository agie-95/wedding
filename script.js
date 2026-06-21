const invitationData = {
  seoTitle: "Undangan Pernikahan Connie Wahyu Wijayanti & Agi Yoko Priyambodo",
  heroMessage: "Dengan penuh rasa syukur, kami mengundang Anda untuk hadir pada hari bahagia kami.",
  quote:
    "\"Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup supaya kamu cenderung dan merasa tenteram kepadanya.\"",
  quoteSource: "QS. Ar-Rum: 21",
  closingTitle: "Merupakan suatu kehormatan dan kebahagiaan bagi kami",
  closingMessage:
    "Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami mengucapkan terima kasih.",
  gsheetsUrl: "https://script.google.com/macros/s/AKfycby1cVuABDNb4T8VRczJLTWnsS3Li-N3AZ-zOgYgl-7VFbu3giCa3DBLEjL-0m1B3MHJ/exec",
  couple: {
    shortNames: "Connie Wahyu Wijayanti & Agi Yoko Priyambodo",
    summaryNames: "Connie & Agi",
    introNames: "Connie & Agi",
    image: "assets/images/Edit-2907.jpg",
    bride: {
      name: "Connie Wahyu Wijayanti",
      parents: "Putri pertama dari Bapak Basuki & Ibu Widya",
    },
    groom: {
      name: "Agi Yoko Priyambodo",
      parents: "Putra kedua dari Bapak Supriyana & Ibu Dwi Yani",
    },
  },
  event: {
    displayDate: "Minggu, 12 Oktober 2026",
    dateTime: "2026-10-12T08:00:00+07:00",
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
    whatsappNumber: "6281234567890",
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
  gift: {
    intro:
      "Doa restu Anda adalah hadiah terbaik. Namun jika ingin berbagi tanda kasih, bisa melalui rekening berikut.",
    accounts: [
      {
        bank: "BCA",
        number: "1234567890",
        name: "Connie Wahyu Wijayanti",
      },
      {
        bank: "BRI",
        number: "0987654321",
        name: "Agi Yoko Priyambodo",
      },
    ],
  },
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
  giftIntro: document.getElementById("giftIntro"),
  giftGrid: document.getElementById("giftGrid"),
  venueAddress: document.getElementById("venueAddress"),
  mapsFrame: document.getElementById("mapsFrame"),
  mapsLink: document.getElementById("mapsLink"),
  akadMapsLink: document.getElementById("akadMapsLink"),
  receptionMapsLink: document.getElementById("receptionMapsLink"),
  countdownDays: document.getElementById("countdownDays"),
  countdownHours: document.getElementById("countdownHours"),
  countdownMinutes: document.getElementById("countdownMinutes"),
  countdownSeconds: document.getElementById("countdownSeconds"),
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
  submitRsvpButton: document.getElementById("submitRsvpButton"),
  modalOverlay: document.getElementById("rsvpModal"),
  modalIcon: document.getElementById("modalIcon"),
  modalTitle: document.getElementById("modalTitle"),
  modalMessage: document.getElementById("modalMessage"),
  modalClose: document.getElementById("modalClose"),
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
  elements.akadMapsLink.href = invitationData.event.mapsLink;
  elements.receptionMapsLink.href = invitationData.event.mapsLink;
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
        <figure class="gallery-card reveal">
          <img src="${resolveAssetPath(item.image)}" alt="${item.title}" loading="lazy">
          <figcaption>${item.title}</figcaption>
        </figure>
      `
    )
    .join("");
}

function renderGiftAccounts() {
  setText(elements.giftIntro, invitationData.gift.intro);
  elements.giftGrid.innerHTML = invitationData.gift.accounts
    .map(
      (item, index) => `
        <article class="gift-card reveal">
          <p class="gift-bank">${item.bank}</p>
          <h3 class="gift-number">${item.number}</h3>
          <p class="gift-name">a.n. ${item.name}</p>
          <button class="primary-button copy-button" type="button" data-copy-index="${index}">
            Salin Nomor Rekening
          </button>
        </article>
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

function isGsheetsEnabled() {
  return Boolean(invitationData.gsheetsUrl && invitationData.gsheetsUrl.startsWith("https://"));
}

async function fetchRsvpEntries() {
  if (!isGsheetsEnabled()) {
    return getStoredRsvp();
  }

  const response = await fetch(invitationData.gsheetsUrl, { method: "GET" });
  if (!response.ok) {
    throw new Error("Gagal membaca RSVP dari Google Sheets");
  }
  return response.json();
}

async function submitRsvpEntry(entry) {
  if (!isGsheetsEnabled()) {
    const entries = getStoredRsvp();
    entries.push(entry);
    saveStoredRsvp(entries);
    return "local";
  }

  const response = await fetch(invitationData.gsheetsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(entry),
  });
  if (!response.ok) {
    throw new Error("Gagal menyimpan RSVP ke Google Sheets");
  }
  return "gsheets";
}

function renderRsvpEntries(entries, sourceLabel) {
  if (!entries.length) {
    elements.rsvpSummaryTitle.textContent = "Belum ada konfirmasi";
    elements.rsvpSummaryCount.textContent = sourceLabel;
    elements.wishList.innerHTML =
      '<div class="wish-item"><strong>Belum ada data</strong><p>Isi form RSVP untuk melihat hasil konfirmasi.</p></div>';
    return;
  }

  const totalGuests = entries.reduce((sum, item) => sum + Number(item.count || 0), 0);
  elements.rsvpSummaryTitle.textContent = `${entries.length} konfirmasi tersimpan`;
  elements.rsvpSummaryCount.textContent = `${totalGuests} tamu tercatat. ${sourceLabel}`;
  elements.wishList.innerHTML = entries
    .slice()
    .reverse()
    .map(
      (item) => `
        <div class="wish-item">
          <strong>${item.name} ? ${item.status}</strong>
          <span>${item.count} tamu</span>
          <p>${item.message || "Tanpa pesan tambahan."}</p>
        </div>
      `
    )
    .join("");
}

async function renderRsvpList() {
  const sourceLabel = isGsheetsEnabled()
    ? "Data dibaca dari Google Sheets."
    : "Data demo disimpan di browser ini.";

  try {
    const entries = await fetchRsvpEntries();
    renderRsvpEntries(entries, sourceLabel);
  } catch {
    const localEntries = getStoredRsvp();
    renderRsvpEntries(localEntries, "Gagal membaca Google Sheets, menampilkan data browser.");
  }
}

function updateCountdown() {
  const targetDate = new Date(invitationData.event.dateTime);
  const remaining = targetDate.getTime() - Date.now();
  const safeRemaining = Math.max(remaining, 0);
  const days = Math.floor(safeRemaining / 86400000);
  const hours = Math.floor((safeRemaining % 86400000) / 3600000);
  const minutes = Math.floor((safeRemaining % 3600000) / 60000);
  const seconds = Math.floor((safeRemaining % 60000) / 1000);
  const pad = (value) => String(value).padStart(2, "0");

  elements.countdownDays.textContent = pad(days);
  elements.countdownHours.textContent = pad(hours);
  elements.countdownMinutes.textContent = pad(minutes);
  elements.countdownSeconds.textContent = pad(seconds);
}

function showRsvpModal(icon, title, message) {
  elements.modalIcon.textContent = icon;
  elements.modalTitle.textContent = title;
  elements.modalMessage.textContent = message;
  elements.modalOverlay.hidden = false;
  elements.modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideRsvpModal() {
  elements.modalOverlay.hidden = true;
  elements.modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

async function handleRsvpSubmit(event) {

  event.preventDefault();
  const formData = new FormData(elements.rsvpForm);
  const name = String(formData.get("name") || "").trim();
  const status = String(formData.get("status") || "").trim();
  const count = Number(formData.get("count"));
  const message = String(formData.get("message") || "").trim();

  if (!name || !status || !Number.isFinite(count) || count < 1) {
    showRsvpModal("!", "Data Belum Lengkap", "Mohon lengkapi nama, status kehadiran, dan jumlah tamu terlebih dahulu.");
    return;
  }

  const entry = {
    name,
    status,
    count,
    message,
    submittedAt: new Date().toISOString(),
  };

  showRsvpModal("…", "Mohon Tunggu", "Konfirmasi kehadiran Anda sedang dikirim.");

  try {
    const source = await submitRsvpEntry(entry);
    elements.rsvpForm.reset();
    if (source === "gsheets") {
      showRsvpModal("✓", "Terima Kasih", "Konfirmasi kehadiran Anda sudah kami terima. Sampai jumpa di hari bahagia kami!");
    } else {
      showRsvpModal("✓", "Terima Kasih", "Konfirmasi kehadiran Anda sudah tersimpan.");
    }
    await renderRsvpList();
  } catch {
    const entries = getStoredRsvp();
    entries.push(entry);
    saveStoredRsvp(entries);
    showRsvpModal("!", "Belum Terkirim", "Maaf, konfirmasi belum terkirim ke server. Data disimpan sementara di browser, silakan coba lagi nanti.");
    await renderRsvpList();
  }
}

async function handleCopyButtonClick(event) {
  const button = event.target.closest("[data-copy-index]");
  if (!button) {
    return;
  }

  const index = Number(button.dataset.copyIndex);
  const account = invitationData.gift.accounts[index];
  if (!account) {
    return;
  }

  const originalLabel = button.textContent;
  try {
    await navigator.clipboard.writeText(account.number);
    button.textContent = "Nomor Tersalin";
  } catch {
    button.textContent = account.number;
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1600);
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
  renderGiftAccounts();
  renderRsvpList();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  applyVolumeLevel();
  setupReveal();
  elements.rsvpForm.addEventListener("submit", handleRsvpSubmit);
  elements.submitRsvpButton.addEventListener("click", handleRsvpSubmit);
  elements.giftGrid.addEventListener("click", handleCopyButtonClick);
  elements.openInvitation.addEventListener("click", openInvitation);
  elements.modalClose.addEventListener("click", hideRsvpModal);
  elements.modalOverlay.addEventListener("click", function (e) {
    if (e.target === elements.modalOverlay) hideRsvpModal();
  });
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
