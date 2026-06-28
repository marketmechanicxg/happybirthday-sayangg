/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "3126";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Andre";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Serta Mulia",             // ← GANTI JUDUL LAGU
    artist: "Sal Priadi",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "One smile from you can fix my whole day." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "You're the reason my heart feels so full." },
  { file: "img3.jpeg", caption: "Every second with you is my favorite." },
  { file: "img4.jpeg", caption: "Some people search for happiness, I found mine in you." },
  { file: "img5.jpeg", caption: "You turned my ordinary life into something beautiful." },
  { file: "img6.jpeg", caption: "My heart feels safest when it's with you." },
  { file: "img7.jpeg", caption: "If I could relive a moment, I'd choose us every time." },
  { file: "img8.jpeg", caption: "Still my favorite person, always. " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Happy birthday to my favorite person 🤍 Hari ini adalah hari spesial buat seseorang yang selalu berhasil bikin hari-hariku jadi lebih indah dan hatiku selalu merasa tenang. Punya kamu di hidup aku adalah salah satu anugerah terbaik yang pernah aku minta. Today is all about celebrating you, karena kamu benar-benar orang yang luar biasa dan pantas mendapatkan semua kebahagiaan di dunia.",
  "Terima kasih ya karena udah bertahan di setiap versi diriku. Makasih udah selalu berusaha ngerti aku, bahkan di saat aku sendiri susah buat dimengerti. Thank you for being so patient with me, selalu ngasih rasa nyaman, dan selalu ada di saat aku paling butuh. Kehadiran kamu membawa begitu banyak ketenangan dan kebahagiaan ke dalam hidupku, dan aku rasa aku nggak akan pernah berhenti bersyukur karena dipertemukan sama kamu. I hope this birthday brings you countless reasons to smile.",
  "Di umur kamu yang baru ini, aku berharap semua mimpi yang lagi kamu perjuangkan bisa pelan-pelan jadi kenyataan. Semoga setiap doa yang selama ini kamu panjatkan dijawab satu per satu, dan setiap langkah yang kamu ambil selalu membawa kamu ke hal-hal yang indah. You deserve so much happiness, love, and success. Yang paling penting, jangan pernah lupa kalau kamu dicintai begitu dalam. Not just today, but every single day.",
  "Terima kasih karena sudah menjadi diri kamu, terima kasih karena sudah mencintaiku, dan terima kasih karena sudah mengizinkan aku mencintai kamu. Happy birthday, my love. Semoga tahun ini membawa lebih banyak kebahagiaan, kesehatan, dan cerita indah untuk kamu. Aku sayang banget sama kamu, lebih dari yang bisa dijelaskan dengan kata-kata. I love you more than words could ever explain. 🤍",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Where It All Started",
    text:  "That moment when everything just clicked and suddenly made sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "The Quiet Days",
    text:  "Just you, me, and those simple moments that ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Through the Storms",
    text:  "We've had our rough days, but honestly, we always found our way back.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "Finding the Light",
    text:  "You're literally the brightest part of my journey, even in the deepest waters.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "May this year bring you the calmness of the ocean and the depth of your kindness." },
  { icon: "shell",   text: "Hope your days are as bright as the sun on the water, and your nights as peaceful as the receding tide." },
  { icon: "star",    text: "May every little wish of yours arrive right when you need it the most." },
  { icon: "compass", text: "Wherever this year takes you, I hope you always find your way back to the people who adore you." },
  { icon: "anchor",  text: "Stay grounded, stay grateful, and honestly, just stay as handsome as you are right now." },
  { icon: "heart",   text: "Happy birthday — cheers to another year of memories totally worth keeping." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6282333815016";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
